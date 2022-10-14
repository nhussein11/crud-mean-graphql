const jwt = require("jsonwebtoken");

const createJWTAccessToken = (user) => {
  const { password, ...userInfoToSend } = user.toJSON();

  return jwt.sign(userInfoToSend, process.env.JWT_ACCESS_SECRET_KEY, {
    expiresIn: "15m",
  });
};

const createJWTRefreshToken = (user) => {
  const { password, ...userInfoToSend } = user.toJSON();

  return jwt.sign(userInfoToSend, process.env.JWT_REFRESH_SECRET_KEY, {
    expiresIn: "2h",
  });
};

const setRefreshTokenCookie = (refreshToken, res) => {
  const refreshTokenExpiration = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  return res.cookie("refresh-token", refreshToken, {
    httpOnly: true,
    expires: refreshTokenExpiration,
  });
};

module.exports = {
  createJWTAccessToken,
  createJWTRefreshToken,
  setRefreshTokenCookie,
};
