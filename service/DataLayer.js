let { PersonDbSetup } = require("./PersonService");
let { RoleDbSetup } = require("./RoleService");
let { EventDbSetup } = require("./EventService");
let { ServiceDbSetup } = require("./ServiceService");

let local = false;


//For Local Connection
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


// //For Heroku Connection
// const sqlDbFactory = require("knex");
// let sqlDb = sqlDbFactory({
//     debug: false,
//     client: 'pg',
//     searchPath: ['d9m9vkc0rqg9ho','CorradiniDB'],
//     /*connection: {
//         host: "ec2-54-246-89-234.eu-west-1.compute.amazonaws.com",
//         user: 'pmzywjulaikobu',
//         password: 'ff5a4e47ca3e7952add093235ab6412e2a870c98af8a0c80ba69f08067d3e7e8',
//         database: 'd9m9vkc0rqg9ho'
//     },*/
//     connection: process.env.DATABASE_URL,
//     ssl: true
// });


function setupDataLayer() {
    console.log("Setting up Data Layer");
    //When we have more than one setup, we have to use Promise.all()
    return Promise.all([PersonDbSetup(sqlDb), RoleDbSetup(sqlDb), EventDbSetup(sqlDb), ServiceDbSetup(sqlDb)]);

}

module.exports = { database: sqlDb, setupDataLayer };