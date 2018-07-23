var jwt = require('jsonwebtoken');
var config = require('./config');
var errorResponse = require('./resterrors');

//middleware function to verifyToken.
function verifyToken(req, res, next) {
    var token = req.headers['x-access-token'];
    if (!token) {
      return res.status(401).send({ auth: false, error:errorResponse(401) });
    }
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) {
        return res.status(500).send({ auth: false, error:errorResponse(500)});
      }  
      // if everything good, save to request for use in other routes
      req.loggedInUserId = decoded.id;
      req.loggedInUserEmail = decoded.email;
      next();
    });
  }
  
  module.exports = verifyToken;