const User = require("../../models/User");

module.exports = {
  allUsers: async () => {
    const users = await User.find();
    return users;
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
    return {
      ...createdUser.toJSON(),
      _id: createdUser._id.toString(),
      name: createdUser.name,
      address: createdUser.address,
      email: createdUser.email,
      password: createdUser.password,
    };
  },
  updateUser: async ({ id, userInput }) => {
    const { name, address, email, password } = userInput;
    const updatedUser = await User.findByIdAndUpdate(
      id,
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
  deleteUser: async ({ id }) => {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      throw new Error(`No user with id ${id} found!`);
    }
    return {
      ...deletedUser.toJSON(),
      _id: deletedUser._id.toString(),
    };
  },
};
