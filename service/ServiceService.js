'use strict';

let sqlDb;


//SETTING UP THE CONNECTION FOR THE COMMUNICATION OF THE DATABASE 
exports.ServiceDbSetup = function(connection){
  sqlDb = connection;
  console.log("checking if table exists.");
  return sqlDb.schema.hasTable('service').then((exists) => {
    if(!exists){
      console.log("Table does not exit!");
    }else{
      console.log("It exits.")
    }
  });
};

/**
 * gets all the services arranged by the association
 * Take the list of all services in the association
 *
 * returns List
 **/
exports.servicesGET = function() {
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


/**
 * gets a specific service of a given type
 * retrieves all the events in which the service is presented.
 *
 * sid String identifier of the selected service
 * type String type of group of role
 * limit Integer max number of items per page (optional)
 * offset Integer pagination offset for the given page (optional)
 * returns List
 **/
exports.servicesSidPresentedInGET = function(sid,type,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "eid" : "eid",
  "schedule" : 0,
  "contact" : "contact",
  "description" : "description",
  "endtime" : "2000-01-23T04:56:07.000+00:00",
  "begintime" : "2000-01-23T04:56:07.000+00:00",
  "place" : "place",
  "eventname" : "eventname"
}, {
  "eid" : "eid",
  "schedule" : 0,
  "contact" : "contact",
  "description" : "description",
  "endtime" : "2000-01-23T04:56:07.000+00:00",
  "begintime" : "2000-01-23T04:56:07.000+00:00",
  "place" : "place",
  "eventname" : "eventname"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * gets all the services of a given type
 * retrieves all the services of a given type.
 *
 * type String type of group of role
 * limit Integer max number of items per page (optional)
 * offset Integer pagination offset for the given page (optional)
 * returns List
 **/
exports.servicesTypeGET = function(type,limit,offset) {
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


/**
 * gets a specific service of a given type
 * retrieves a service given the identifier and the type.
 *
 * sid String identifier of the selected service
 * type String type of group of role
 * limit Integer max number of items per page (optional)
 * offset Integer pagination offset for the given page (optional)
 * returns Object
 **/
exports.servicesTypeSidGET = function(sid,type,limit,offset) {
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
 * gets all the people involved in a given Service
 * retrieves the people helping in the service.
 *
 * sid String identifier of the selected service
 * type String type of group of role
 * limit Integer max number of items per page (optional)
 * offset Integer pagination offset for the given page (optional)
 * returns List
 **/
exports.servicesTypeSidInvolvingGET = function(sid,type,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "firstname" : "firstname",
  "role" : "role",
  "phonenumber" : "phonenumber",
  "pid" : "pid",
  "email" : "email",
  "age" : 7,
  "lastname" : "lastname"
}, {
  "firstname" : "firstname",
  "role" : "role",
  "phonenumber" : "phonenumber",
  "pid" : "pid",
  "email" : "email",
  "age" : 7,
  "lastname" : "lastname"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

