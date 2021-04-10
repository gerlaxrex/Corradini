let { PersonDbSetup } = require("./PersonService");
let { RoleDbSetup } = require("./RoleService");
let { EventDbSetup } = require("./EventService");
let { ServiceDbSetup } = require("./ServiceService");

let local = false;

//For Heroku Connection
const sqlDbFactory = require("knex");
let sqlDb = sqlDbFactory({
    debug: false,
    client: 'pg',
    searchPath: ['d9m9vkc0rqg9ho','CorradiniDB'],
    connection: process.env.DATABASE_URL,
    ssl: true
});


function setupDataLayer() {
    console.log("Setting up Data Layer");
    //When we have more than one setup, we have to use Promise.all()
    return Promise.all([PersonDbSetup(sqlDb), RoleDbSetup(sqlDb), EventDbSetup(sqlDb), ServiceDbSetup(sqlDb)]);

}

module.exports = { database: sqlDb, setupDataLayer };