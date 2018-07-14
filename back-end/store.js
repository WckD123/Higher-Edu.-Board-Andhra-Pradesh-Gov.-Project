const env = 'development'
const config = require('./knexfile')
const knex = require('knex')(config[env])
module.exports = {
    // Get user based on email id which acts as an identifier for unique users.
    getUser({email}) {
        console.log("Get user for email : %s", email);
        return knex('user').where({"email":email}).select();
    },
    getUserForId({id}) {
        console.log("Get user for id : %s", id);
        return knex('user').where({"id":id}).select();
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
    },


    createDoc({owner_id,doc_type,doc_name,country,university,department,degree,year_of_admission}) {
        console.log("Create Document for owner_id : %s and doc_type : %s",owner_id,doc_type);
        return knex('sop_doc').insert({
            'owner_id':owner_id,
            'doc_type':doc_type,
            'doc_name':doc_name,
            'country':country,
            'university':university,
            'department':department,
            'degree':degree,
            'year_of_admission':year_of_admission
        });
    },
    // It is expected that content_arr is an array of dictionary
    // having keys - doc_id,sop_question,sop_answer
    createDocContent({doc_id,content_arr}) {
        console.log("Insert doc_id : %s and content_arr: %s", doc_id, content_arr.toString());
        return knex('doc_content').insert(content_arr);
    },

    uploadedDocuments({user_id}) {
        console.log("Uploaded documents id for user_id : %s", user_id);
        return knex('sop_doc').where({"owner_id":user_id}).select();
    },

    docContent({doc_id}) {
        console.log("Doc content for doc_id : %s", doc_id);
        return knex('doc_content').where({"doc_id":doc_id}).select();
    }
}