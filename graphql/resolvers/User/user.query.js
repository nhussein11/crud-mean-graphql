const User = require("../../../database/models/User");
const {
  createJWTAccessToken,
  createJWTRefreshToken,
  setRefreshTokenCookie,
} = require("../../../utils/auth");

const signIn = async (_root, { email, password }, { res }, _info) => {
  let user = await User.findOne({ email, password }).select("+password");

  if (!user || password !== user.password) {
    throw new Error("Invalid credentials");
  }

  const accessToken = createJWTAccessToken(user);
  const refreshToken = createJWTRefreshToken(user, res);
  
  setRefreshTokenCookie(refreshToken, res);
  
  ({ password, ...userToReturn } = user.toJSON());

  const loginResponse = { token: accessToken, user: userToReturn };
  return loginResponse;
};

const allUsers = async () => {
  const users = await User.find();
  return users;
};

const getUser = async (_root, _args, { verifiedUser }, _info) => {
  const { _id: userId } = verifiedUser;
  const user = await User.findById(userId);
  const accessToken = createJWTAccessToken(user);
  const loginResponse = { token: accessToken, user };
  return loginResponse;
};


module.exports = { allUsers, getUser, signIn };
