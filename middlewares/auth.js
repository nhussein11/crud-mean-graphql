const { unless } = require("express-unless");
const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] || '';
    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.verifiedUser = verified
    next();
  } catch (error) {
    console.log(error)
    throw Error("Invalid Token");
  }
};

authenticate.unless = unless

module.exports = { authenticate };
