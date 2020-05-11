'use strict';


/**
 * gets all the categories of services in the association
 * We take the list of all categories of services in an association
 *
 * limit Integer max number of items per page (optional)
 * offset Integer pagination offset for the given page (optional)
 * returns List
 **/
exports.servicesGET = function(limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "description" : "description",
  "place" : "place",
  "serviceName" : "serviceName",
  "type" : "type",
  "sid" : "sid"
}, {
  "description" : "description",
  "place" : "place",
  "serviceName" : "serviceName",
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
 * gets all the services of a given type
 * retrieves all the services of a given type, chosen by the corresponding group in '/services'
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
  "place" : "place",
  "serviceName" : "serviceName",
  "type" : "type",
  "sid" : "sid"
}, {
  "description" : "description",
  "place" : "place",
  "serviceName" : "serviceName",
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
 * retrieves all the services of a given type, chosen by the corresponding group in '/services'
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

