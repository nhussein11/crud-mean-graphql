const User = require("../../../database/models/User");
const {createJWTToken} = require("../../../utils/auth");

const getUser = async (_root, { email, password }, _context, _info) => {
  let user = await User.findOne({ email, password }).select("+password");

  if (!user || password !== user.password) {
    throw new Error("Invalid credentials");
  }

  const token = createJWTToken(user);
  ({ password, ...userToReturn } = user.toJSON());

  return { token, user: userToReturn };
};
const allUsers = async () => {
  const users = await User.find();
  return users;
};

module.exports = { allUsers, getUser };
