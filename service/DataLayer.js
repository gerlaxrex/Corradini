let { PersonDbSetup } = require("./PersonService");
let { RoleDbSetup } = require("./RoleService");
let { EventDbSetup } = require("./EventService");
let { ServiceDbSetup } = require("./ServiceService");

const sqlDbFactory = require("knex");
let sqlDb = sqlDbFactory({
    debug: true,
    client: 'pg',
    searchPath: ['CorradiniDB','CorradiniDB'],
    connection: {
        host: /**/process.env.DATABASE_URL /*'127.0.0.1'*/,
        user: 'postgres',
        password: 'root',
        database: 'CorradiniDB'
    },
    ssl: true
});

function setupDataLayer() {
    console.log("Setting up Data Layer");
    //When we have more than one setup, we have to use Promise.all()
    return Promise.all([PersonDbSetup(sqlDb), RoleDbSetup(sqlDb), EventDbSetup(sqlDb), ServiceDbSetup(sqlDb)]);

}

module.exports = { database: sqlDb, setupDataLayer };