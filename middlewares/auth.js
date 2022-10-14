const jwt = require("jsonwebtoken");

const authenticate = async (resolve, root, args, context, info) => {
  try {
    const accessToken = context.headers.authorization?.split(" ")[1] || null;
    const refreshToken = context.cookies["refresh-token"] || null;
    
    if (!accessToken && !refreshToken) {
      throw Error("No token provided!");
    }

    if (!accessToken) {
      const verified = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET_KEY);
      context.verifiedUser = verified;
      return resolve(root, args, context, info);
    }
    
    const verified = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET_KEY);
    context.verifiedUser = verified;
    return resolve(root, args, context, info);

  } catch (error) {
    throw Error(error || "Invalid Token");
  }
};
module.exports = { authenticate };
