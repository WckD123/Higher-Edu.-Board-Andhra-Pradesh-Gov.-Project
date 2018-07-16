var jwt = require('jsonwebtoken');
var config = require('./config');

//middleware function to verifyToken.
function verifyToken(req, res, next) {
    console.log(req);
    console.log(req.headers);
    var token = req.headers['x-access-token'];
    if (!token)
      return res.status(403).send({ auth: false, message: 'No token provided.' });
  
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err)
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  
      // if everything good, save to request for use in other routes
      req.loggedInUserId = decoded.id;
      req.loggedInUserEmail = decoded.email;
      next();
    });
  }
  
  module.exports = verifyToken;