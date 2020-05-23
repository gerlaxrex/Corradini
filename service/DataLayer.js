let { PersonDbSetup } = require("./PersonService");
let { RoleDbSetup } = require("./RoleService");
let { EventDbSetup } = require("./EventService");
let { ServiceDbSetup } = require("./ServiceService");

let local = false;


//For Local Connection
// const sqlDbFactory = require("knex");
// let sqlDb = sqlDbFactory({
//     debug: true,
//     client: 'pg',
//     searchPath: ['CorradiniDB','CorradiniDB'],
//     connection: {
//         host: /**/process.env.DATABASE_URL /*'127.0.0.1'*/,
//         user: 'postgres',
//         password: 'root',
//         database: 'CorradiniDB'
//     },
//     ssl: true
// });

const sqlDbFactory = require("knex");
let sqlDb = sqlDbFactory({
    debug: true,
    client: 'pg',
    searchPath: ['d65a7i9u7uhv9n','CorradiniDB'],
    connection: {
        host: "ec2-54-246-90-10.eu-west-1.compute.amazonaws.com",
        user: 'rbjagrfxysmadu',
        password: '49a234e1fdc3150128cd7874dd6056e4f0ad2366f21c272825c6fda05dea4692',
        database: 'd65a7i9u7uhv9n'
    },
    ssl: true
});



function setupDataLayer() {
    console.log("Setting up Data Layer");
    //When we have more than one setup, we have to use Promise.all()
    return Promise.all([PersonDbSetup(sqlDb), RoleDbSetup(sqlDb), EventDbSetup(sqlDb), ServiceDbSetup(sqlDb)]);

}

module.exports = { database: sqlDb, setupDataLayer };