
exports.up = function(knex, Promise) {
    return removeLiRelatedColumns();

    function removeLiRelatedColumns() {
    return knex.schema.alterTable('user', function(t) {
        t.dropColumn('linkedin_education_latest');
        t.dropColumn('linkedin_experience_latest');
        t.dropColumn('li_access_token');
        // Add column to capture Li headline.
        t.string('li_headline',1000);
    })
  }
};

exports.down = function(knex, Promise) {
    return addLiRelatedColumns();
    
    function addLiRelatedColumns() {
        return knex.schema.alterTable('user', function(t) {
            t.string('linkedin_education_latest', 600)
            t.string('linkedin_experience_latest', 600)
            t.string('li_access_token', 1000);
            t.dropColumn('li_headline',1000);
        })
      }
};
