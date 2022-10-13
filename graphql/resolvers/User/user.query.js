const User = require("../../../database/models/User");
const {
  createJWTAccessToken,
  createJWTRefreshToken,
  setRefreshTokenCookie,
} = require("../../../utils/auth");

const getUser = async (_root, { email, password }, { res }, _info) => {
  let user = await User.findOne({ email, password }).select("+password");

  if (!user || password !== user.password) {
    throw new Error("Invalid credentials");
  }

  const accessToken = createJWTAccessToken(user);
  const refreshToken = createJWTRefreshToken(user, res);
  
  setRefreshTokenCookie(refreshToken, res);
  
  ({ password, ...userToReturn } = user.toJSON());

  return { token: accessToken, user: userToReturn };
};

const allUsers = async () => {
  const users = await User.find();
  return users;
};

module.exports = { allUsers, getUser };
