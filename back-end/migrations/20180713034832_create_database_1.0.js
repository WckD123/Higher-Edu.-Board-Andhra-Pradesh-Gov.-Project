
exports.up = function(knex, Promise) {
    return createUserTable().then(createSopDocTable).then(createDocContentTable).then(createTransactionsTable);

    function createUserTable() {
        return knex.schema.createTable('user', function (t) {
            t.increments('id').primary()
            t.string('name')
            t.string('email').notNullable()
            t.string('linkedin_education_latest', 600)
            t.string('linkedin_experience_latest', 600)
            t.string('linkedin_public_profile_link').notNullable()
            t.float('total_earnings').defaultTo(0.0)
            t.string('account_number')
            t.string('ifsc_code')        
            t.timestamps(false,true)
          })
    }
    function createSopDocTable() {
        return knex.schema.createTable('sop_doc', function(t) {
            t.increments('id').primary()
            t.integer('owner_id').unsigned().notNullable()
            t.foreign('owner_id').references('user.id')
            t.integer('doc_type').notNullable()
            t.string('doc_name').notNullable()
            t.string('country').notNullable()
            t.string('university')
            t.string('department')
            t.string('degree')
            t.integer('year_of_admission').notNullable()
            t.timestamps(false,true)
        })
    } 
    function createDocContentTable() {
        return knex.schema.createTable('doc_content', function(t) {
            t.increments('id').primary()
            t.integer('doc_id').unsigned().notNullable()
            t.foreign('doc_id').references('sop_doc.id')
            t.text('sop_question','mediumtext')
            t.text('sop_answer', 'longtext').notNullable()
            t.timestamps(false,true)
         })
    }
    function createTransactionsTable() {
        return knex.schema.createTable('transactions', function(t) {
            t.increments('id').primary()
            t.integer('doc_id').unsigned().notNullable()
            t.foreign('doc_id').references('sop_doc.id')
            t.integer('buyer_id').unsigned().notNullable()
            t.foreign('buyer_id').references('user.id')
            t.string('payment_reference_id').notNullable()
            t.timestamps(false,true)
         }) 
    }
};

exports.down = function(knex, Promise) {
    return dropTransactionsTable().then(dropDocContentTable).then(dropSopDocTable).then(dropUserTable);

    function dropUserTable() {
        return knex.schema.dropTableIfExists('user');
    }
    function dropSopDocTable() {
        return knex.schema.dropTableIfExists('sop_doc');
    }
    function dropDocContentTable() {
        return knex.schema.dropTableIfExists('doc_content');
    }
    function dropTransactionsTable() {
        return knex.schema.dropTableIfExists('transactions');
    }
};
