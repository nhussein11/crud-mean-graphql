const cors = require("cors");

const whitelist = ["http://localhost:4200", "http://localhost:4000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (whitelist.indexOf(origin) === -1) {
      const errorMessage =
        "The CORS policy for this site does not allow access from the specified Origin.";
      return callback(new Error(errorMessage), false);
    }
    return callback(null, true);
  },
  credentials: true,
  optionsSuccessStatus: 200,
  methods: "GET,PUT,POST,DELETE",
  allowedHeaders:
    "Content-Type, Authorization, Content-Length, X-Requested-With",
  preflightContinue: false,
  maxAge: 86400,
};

module.exports = cors(corsOptions);
