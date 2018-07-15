
exports.up = function(knex, Promise) {
    return addPictureUrlColumn();

    function addPictureUrlColumn() {
    return knex.schema.alterTable('user', function(t) {
        t.string('pictureUrl', 1000);
    })
  }
};

exports.down = function(knex, Promise) {
    return removePictureUrlColumn();
    
    function removePictureUrlColumn() {
        return knex.schema.alterTable('user', function(t) {
            t.dropColumn('pictureUrl');
        })
      }
};
