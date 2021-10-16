const jwt = require("jsonwebtoken");
const Usuario = require("../models/users");

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.decode(token);
  req.userData = { email: decodedToken.email, name: decodedToken.name };
  console.log(decodedToken);
  next();
};