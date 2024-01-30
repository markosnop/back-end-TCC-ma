// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'bd_wiki',
      user: 'root',
      password: 'root'
    },
  },

  production:{
    client: 'pg',
    connection:{
      host:'dpg-cmg7bh821fec739npkqg-a.oregon-postgres.render.com',
      port: 5432,
      user: 'matheus',
      password: 'sNjVKGCM38XM4pM7JCSnSgRr7Ic3hSfq',
      database:'bdwiki_ld8r',
      ssl: true,
    }
  }

};
