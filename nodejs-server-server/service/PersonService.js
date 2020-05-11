'use strict';


/**
 * gets all groups of people in the association by job
 * We take the list of all events by month
 *
 * returns List
 **/
exports.peopleGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "phoneNumber" : "phoneNumber",
  "role" : "role",
  "pid" : "pid",
  "email" : "email",
  "age" : 8
}, {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "phoneNumber" : "phoneNumber",
  "role" : "role",
  "pid" : "pid",
  "email" : "email",
  "age" : 8
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * gets all the people involved in a given job
 * retrieves all the roles of a given type, chosen by the corresponding group
 *
 * job String role of the person
 * limit Integer max number of items per page (optional)
 * offset Integer pagination offset for the given page (optional)
 * returns List
 **/
exports.peopleJobGET = function(job,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "phoneNumber" : "phoneNumber",
  "role" : "role",
  "pid" : "pid",
  "email" : "email",
  "age" : 8
}, {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "phoneNumber" : "phoneNumber",
  "role" : "role",
  "pid" : "pid",
  "email" : "email",
  "age" : 8
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * gets a specific person that has a given job
 * retrieves all the roles of a given type, chosen by the corresponding group
 *
 * pid String role of the person
 * job String role of the person
 * limit Integer max number of items per page (optional)
 * offset Integer pagination offset for the given page (optional)
 * returns List
 **/
exports.peopleJobPidGET = function(pid,job,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "phoneNumber" : "phoneNumber",
  "role" : "role",
  "pid" : "pid",
  "email" : "email",
  "age" : 8
}, {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "phoneNumber" : "phoneNumber",
  "role" : "role",
  "pid" : "pid",
  "email" : "email",
  "age" : 8
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

