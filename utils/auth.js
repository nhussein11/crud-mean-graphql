const jwt = require("jsonwebtoken");

const createJWTToken = (user) => {
  const { password, ...userInfoToSend } = user.toJSON();

  return jwt.sign(userInfoToSend, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });
};

module.exports = { createJWTToken };
