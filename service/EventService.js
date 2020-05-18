'use strict';

let sqlDb;



//Setting the connection to the db and check if table exists
exports.EventDbSetup = function(connection){
  sqlDb = connection;
  console.log("checking if table exists.");
  return sqlDb.schema.hasTable('event').then((exists) => {
    if(!exists){
      console.log("Table does not exit!");
    }else{
      console.log("It exits.")
    }
  });
};



/**
 * gets the person in charge as contact for the event
 * retrieves the person that is the official contact for that event.
 *
 * eid String identifier for the event
 * month Integer month in which there is all the group of events (optional)
 * returns Object
 **/
exports.eventsEidContactGET = function(eid,month) {
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
 * gets an the event from the selected month
 * retrieves the event in a given month with a given identifier.
 *
 * eid String identifier for the event
 * month Integer month in which there is all the group of events (optional)
 * returns Object
 **/
exports.eventsEidGET = function(eid,month) {
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
 * gets the services presented in the event
 * retrieves all the services presented in the event specified by the eid.
 *
 * eid String identifier for the event
 * month Integer month in which there is all the group of events (optional)
 * limit Integer max number of items per page (optional)
 * offset Integer pagination offset for the given page (optional)
 * returns List
 **/
exports.eventsEidPresentsGET = function(eid,month,limit,offset) {
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
 * gets all the events by the selected month
 * retrieves all the events happening on a given month
 *
 * month Integer month in which there is all the group of events (optional)
 * limit Integer max number of items per page (optional)
 * offset Integer pagination offset for the given page (optional)
 * returns List
 **/
exports.eventsGET = function(month,limit,offset) {
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

