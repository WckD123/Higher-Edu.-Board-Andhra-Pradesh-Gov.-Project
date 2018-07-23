const env = 'development'
const config = require('./knexfile')
const knex = require('knex')(config[env])
var randomstring = require("randomstring");
module.exports = {
    // Get user based on email id which acts as an identifier for unique users.
    getUser({id, email}) {
        console.log("Get user for email : %s and id: %s", email,id);
        return knex('user').where({"email":email, 'id':id}).select();
    },

    getUserForEmail({email}) {
        console.log("Get user for email : %s", email);
        return knex('user').where({'email':email}).select();
    },

    getUserForId({user_id}) {
        console.log("Get user for id : %s", user_id);
        return knex('user').where({'id':user_id}).select();
    },

    createUser({name,email,li_headline, li_profile_link, pictureUrl}) {
        console.log("create user for name %s,email %s, li_headline %s, li_profile %s", name,email,li_headline,li_profile_link);
        return knex(constants.TABLE_NAME_USER).insert({
            'name':name,
            'email':email,
            'li_headline':li_headline,
            'li_profile_link':li_profile_link,
            'li_picture_url':pictureUrl
        });
    },

    updateUserForEmail({name,email,li_headline, li_profile_link, pictureUrl}) {
        console.log("Update user data for email_id : %s", email);
        return knex('user').where({'email':email}).update({
            'name':name,
            'email':email,
            'li_headline':li_headline,
            'li_profile_link':li_profile_link,
            'li_picture_url':pictureUrl
        })
    },


    createDoc({owner_id,owner_name,owner_li_link,owner_pictureUrl,doc_type,doc_name,country,university,degree,year_of_admission}) {
        console.log("Create Document for owner_id : %s and doc_type : %s",owner_id,doc_type);
        return knex('sop_doc').insert({
            'owner_id':owner_id,
            'owner_name':owner_name,
            'owner_li_link':owner_li_link,
            'owner_pictureUrl':owner_pictureUrl,
            'doc_type':doc_type,
            'doc_name':doc_name,
            'country':country,
            'university':university,
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
    },

    // transaction_arr should contain buyer_id,doc_id,payment_reference_id
    recordTransaction({transaction_arr}) {
        console.log("Record transaction for the transaction array : %s", transaction_arr.toString());
        return knex("transactions").insert(transaction_arr);
    },

    purchasedDocumentIds({user_id}) {
        console.log("purchased documents for user_id : %s", user_id);
        return knex("transactions").where({"buyer_id":user_id}).select('doc_id');
    },

    documentsMetadataforDocIds({doc_ids}) {
        console.log("Get documents Metadata for doc_ids : %s", doc_ids.toString());
        return knex('sop_doc').whereIn('id',doc_ids).select();
    },

    search({search_text}) {
        console.log("Search for search_text : %s", search_text);
        var results_limit = 50;
        //'owner_id','owner_name','owner_li_link','doc_name','year_of_admission'
        return knex('sop_doc').select().orWhereRaw('MATCH(doc_name,country,university,degree,year_of_admission) AGAINST(? IN NATURAL LANGUAGE MODE)',search_text);
    },

    updateAccount({user_id, account_number,ifsc_code}) {
        console.log("Update the account status for user_id : %s", user_id);
        return knex('user').where({'id':user_id}).update({
            'account_number':account_number,
            'ifsc_code':ifsc_code,
        })
    },

    getAccountStatus({user_id}) {
        console.log("Get the account staus for user_id : %s", user_id);
        return knex('user').select('account_number', 'ifsc_code').where({'id':user_id});
    }

}