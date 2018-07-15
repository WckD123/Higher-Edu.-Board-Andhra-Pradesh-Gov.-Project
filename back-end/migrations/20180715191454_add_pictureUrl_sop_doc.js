
exports.up = function(knex, Promise) {
    return addPictureUrlColumn();

    function addPictureUrlColumn() {
    return knex.schema.alterTable('sop_doc', function(t) {
        t.string('owner_pictureUrl', 1000);
    })
  }
};

exports.down = function(knex, Promise) {
    return removePictureUrlColumn();
    
    function removePictureUrlColumn() {
        return knex.schema.alterTable('sop_doc', function(t) {
            t.dropColumn('owner_pictureUrl');
        })
      }
};
