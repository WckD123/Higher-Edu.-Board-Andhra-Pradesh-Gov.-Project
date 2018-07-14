
exports.up = function(knex, Promise) {
    return removePreviousIndex().then(addFulltextIndex);

  function removePreviousIndex() {
    //remove previous index with name 'FULLTEXT'
    return knex.schema.alterTable('sop_doc', function(t) {
        t.dropIndex(['doc_name','country','university','degree','year_of_admission'], 'FULLTEXT');
    })
  }
  function addFulltextIndex() {
      return knex.raw('alter table sop_doc add fulltext search_index(doc_name,country,university,degree,year_of_admission)');
  }
};

exports.down = function(knex, Promise) {
  return addPreviousIndex().then(removeFulltextIndex);
    function addPreviousIndex() {
        //add previous index with name 'FULLTEXT'
        return knex.schema.alterTable('sop_doc', function(t) {
            t.dropIndex(['doc_name','country','university','degree','year_of_admission'], 'FULLTEXT');
        })
    }
    function removeFulltextIndex() {
        return knex.raw('drop index search_index on sop_doc');
    }
};
