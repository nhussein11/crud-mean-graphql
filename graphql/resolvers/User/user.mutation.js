const User = require("../../../database/models/User");

const createUser = async (_root, { userInput }, _context, _info) => {
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
};
const updateUser = async (_root, { _id, userInput }, _context, _info) => {
  if (!_id) {
    throw new Error("No id provided!");
  }
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
};
const deleteUser = async (_root, { id: _id }, _context, _info) => {
  const deletedUser = await User.findByIdAndDelete(_id);
  if (!deletedUser) {
    throw new Error(`No user with id ${_id} found!`);
  }
  return {
    ...deletedUser.toJSON(),
    _id: deletedUser._id.toString(),
  };
};

module.exports = { createUser, updateUser, deleteUser };
