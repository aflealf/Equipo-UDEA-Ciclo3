var jwt = require("jsonwebtoken");
const Usuario = require("../models/users");

module.exports = (req, res, next) => {
  var token = req.headers.authorization;
  if (token){
    token = token.split(" ")[1];
    const decodedToken = jwt.decode(token);
    req.userData = { email: decodedToken.email, name: decodedToken.name };
   
    next();
  }
}
