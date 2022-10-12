const jwt = require("jsonwebtoken");

// const authenticate = (req, res, next) => {
//   try {
//     const token = req.headers.authorization?.split(" ")[1] || '';
//     const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
//     req.verifiedUser = verified
//     next();
//   } catch (error) {
//     console.log(error)
//     throw Error("Invalid Token");
//   }
// };

const authenticate = async (resolve, root, args, context, info) => {
  try {
    const result = await resolve(root, args, context, info);
    console.log(result)
    const token = args.headers.authorization?.split(" ")[1] || "";
    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.verifiedUser = verified;
    // next();
    return result;
  } catch (error) {
    throw Error("Invalid Token");
  }
};
module.exports = { authenticate };
