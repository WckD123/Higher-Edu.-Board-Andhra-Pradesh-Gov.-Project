var jwt = require('jsonwebtoken');
var config = require('./config');

module.exports = {
    getToken({user_id, email}) {
        console.log("Create token for user_id : %s and user_email : %s", user_id,email);
        return jwt.sign({ id: user_id, email:email }, config.secret, {
            expiresIn: '365d' // expires in 365 days.
          });
    },
}

