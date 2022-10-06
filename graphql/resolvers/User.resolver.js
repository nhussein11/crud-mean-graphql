const { User } = require("../../database/models");
const { createJWTToken } = require("../../utils/auth");

module.exports = {
  allUsers: async () => {
    const users = await User.find();
    return users;
  },
  getUser: async ({ email, password }) => {
    let user = await User.findOne({ email, password }).select("+password");

    if (!user || password !== user.password) {
      throw new Error("Invalid credentials");
    }

    const token = createJWTToken(user);
    ({password, ...userToReturn} = user.toJSON())

    return { token, user:userToReturn };
  },
  createUser: async ({ userInput }) => {
    const { name, address, email, password } = userInput;
    const newUser = new User({
      name,
      address,
      email,
      password,
    });
    const createdUser = await newUser.save();

    const token = createJWTToken(createdUser);

    return {
      ...createdUser.toJSON(),
      token,
    };
  },
  updateUser: async ({ id: _id, userInput }) => {
    const { name, address, email, password } = userInput;
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      {
        name,
        address,
        email,
        password,
      },
      { new: true }
    );

    if (!updatedUser) {
      throw new Error("No user found!");
    }
    return {
      ...updatedUser.toJSON(),
      _id: updatedUser._id.toString(),
    };
  },
  deleteUser: async ({ id: _id }) => {
    const deletedUser = await User.findByIdAndDelete(_id);
    if (!deletedUser) {
      throw new Error(`No user with id ${_id} found!`);
    }
    return {
      ...deletedUser.toJSON(),
      _id: deletedUser._id.toString(),
    };
  },
};
