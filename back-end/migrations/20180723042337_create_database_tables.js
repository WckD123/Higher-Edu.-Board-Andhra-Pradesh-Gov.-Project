var randomstring = require("randomstring");

exports.up = function(knex, Promise) {
  return createUserTable().then(createSopDocTable).then(addFullTextIndex).then(createDocContentTable).then(createTransactionsTable);
    function createUserTable() {
        return knex.schema.createTable('user',function(t) {
            t.increments('id').primary()
            t.string('name')
            t.string('email').notNullable().unique()
            t.string('li_headline',600)
            t.string('li_profile_link',250)
            t.string('li_picture_url',250)
            t.float('total_earnings').defaultTo(0.0)
            t.string('account_number')
            t.string('ifsc_code')
            t.timestamps(false,true)
        })
    }
    function createSopDocTable() {
        return knex.schema.createTable('sop_doc',function(t) {
            t.increments('id').primary()
            t.integer('owner_id').unsigned().notNullable()
            t.foreign('owner_id').references('user.id')
            t.string('owner_name')
            t.string('owner_li_profile_link')
            t.string('owner_li_picture_url')
            t.integer('doc_type').notNullable()
            t.string('doc_name').notNullable()
            t.string('country').notNullable()
            t.string('university')
            t.string('degree')
            t.string('year_of_admission').notNullable()
            t.timestamps(false,true)
        })
    }

    function addFullTextIndex() {
        return knex.raw('alter table sop_doc add fulltext search_index(doc_name,country,university,degree,year_of_admission)');
    }

    function createDocContentTable() {
        return knex.schema.createTable('doc_content', function(t) {
            t.increments('id').primary()
            t.integer('doc_id').unsigned().notNullable()
            t.foreign('doc_id').references('sop_doc.id')
            t.text('sop_question','mediumtext').notNullable()
            t.text('sop_answer', 'longtext').notNullable()
            t.timestamps(false,true)
        })
    }
    function createTransactionsTable() {
        return knex.schema.createTable('transactions', function(t) {
            t.increments('id').primary()
            t.string('payment_reference_id',10).notNullable()
            t.integer('doc_id').unsigned().notNullable()
            t.foreign('doc_id').references('sop_doc.id')
            t.integer('buyer_id').unsigned().notNullable()
            t.foreign('buyer_id').references('user.id')
            t.integer('status').defaultTo(0)
            t.string('razorpay_payment_id')
        })
    }
};

exports.down = function(knex, Promise) {
    return dropTransactionsTable().then(dropDocContentTable).then(dropFullTextIndex).then(dropSocDocTable).then(dropUserTable);

    function dropUserTable() {
        return knex.schema.dropTableIfExists('user');
    }
    function dropSocDocTable() {
        return knex.schema.dropTableIfExists('sop_doc');
    }
    function dropFullTextIndex() {
        return knex.raw('drop index search_index on sop_doc');
    }
    function dropDocContentTable() {
        return knex.schema.dropTableIfExists('doc_content');
    }
    function dropTransactionsTable() {
        return knex.schema.dropTableIfExists('transactions');
    }
};
