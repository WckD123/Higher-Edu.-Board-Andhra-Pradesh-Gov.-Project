
exports.up = function(knex, Promise) {
    return addAccessTokenColumn();

    function addAccessTokenColumn() {
    return knex.schema.alterTable('user', function(t) {
        t.string('li_access_token', 1000);
    })
  }
};

exports.down = function(knex, Promise) {
    return removeAccessTokenColumn();
    
    function removeAccessTokenColumn() {
        return knex.schema.alterTable('user', function(t) {
            t.dropColumn('li_access_token');
        })
      }
};
