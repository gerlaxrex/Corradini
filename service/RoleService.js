'use strict';

let sqlDb;

//SETTING UP THE CONNECTION FOR THE COMMUNICATION OF THE DATABASE
exports.RoleDbSetup = function(connection){
  sqlDb = connection;
  console.log("checking if table exists.");
  return sqlDb.schema.hasTable('role').then((exists) => {
    if(!exists){
      console.log("Table does not exit!");
    }else{
      console.log("It exits.")
    }
  });
};


/**
 * gets a group of roles of a given type, 'free' or 'all'
 * retrieves all the roles of a given type, chosen by the corresponding group
 *
 * type String type of group of role
 * limit Integer max number of items per page (optional)
 * offset Integer pagination offset for the given page (optional)
 * returns List
 **/
exports.rolesGET = function(type,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "freeroles" : 0,
  "rolename" : "rolename",
  "description" : "description",
  "rid" : "rid",
  "type" : "type"
}, {
  "freeroles" : 0,
  "rolename" : "rolename",
  "description" : "description",
  "rid" : "rid",
  "type" : "type"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * gets a specific role in a group of given type, specified by id
 * retrieves a single role that is in a group of roles of a given 'type'
 *
 * rid String pk of the role in the group of given type
 * type String type of group of role (optional)
 * returns Object
 **/
exports.rolesRidGET = function(rid,type) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * gets all the services that require the role with the given {rid}
 * returns an array of services related to the role.
 *
 * rid String pk of the role in the group of given type
 * type String type of group of role (optional)
 * limit Integer max number of items per page (optional)
 * offset Integer pagination offset for the given page (optional)
 * returns List
 **/
exports.rolesRidRelatedToGET = function(rid,type,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "description" : "description",
  "servicename" : "servicename",
  "place" : "place",
  "type" : "type",
  "sid" : "sid"
}, {
  "description" : "description",
  "servicename" : "servicename",
  "place" : "place",
  "type" : "type",
  "sid" : "sid"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

