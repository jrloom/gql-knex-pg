module.exports.up = knex =>
  knex.schema.createTable('users', tbl => {
    tbl
      .uuid('id')
      .notNullable()
      .primary()
    tbl.string('firstName').notNullable()
    tbl
      .string('email')
      .notNullable()
      .unique()
    tbl.string('password').notNullable()
  })

module.exports.down = knex => knex.schema.dropTable('users')
