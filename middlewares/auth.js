const jwt = require("jsonwebtoken");

const authenticate = async (resolve, root, args, context, info) => {
  try {

    const token = context.headers.authorization?.split(" ")[1] || "";
    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    context.verifiedUser = verified;
    return resolve(root, args, context, info);

  } catch (error) {
    throw Error("Invalid Token");
  }
};
module.exports = { authenticate };
