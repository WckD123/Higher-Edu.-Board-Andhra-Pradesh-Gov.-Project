const env = 'development'
const config = require('./knexfile')
const knex = require('knex')(config[env])
module.exports = {
    // Get user based on email id which acts as an identifier for unique users.
    getUser({email}) {
        console.log("Get user for id : %s", email);
        return knex('user').where({"email":email}).select();
    },

    createUser({name,email,li_education_latest,li_experience_latest, li_profile_link}) {
        console.log("create user for name %s,email %s, li_education %s, li_experience %s, li_profile %s", name,email,li_education_latest,li_experience_latest,li_profile_link);
        return knex('user').insert({
            'name':name,
            'email':email,
            'linkedin_education_latest':li_education_latest,
            'linkedin_experience_latest':li_experience_latest,
            'linkedin_public_profile_link':li_profile_link,
        });
    }
}