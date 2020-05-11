'use strict';


/**
 * gets all the categories of roles in the association (**useless, to be eliminated**)
 * This retrieves the group for free or all roles in the association
 *
 * returns List
 **/
exports.rolesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "freeRoles" : 1,
  "roleName" : "Gardener",
  "description" : "A gardener assistant",
  "rid" : "r0001",
  "type" : "free"
}, {
  "freeRoles" : 1,
  "roleName" : "Gardener",
  "description" : "A gardener assistant",
  "rid" : "r0001",
  "type" : "free"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * gets a group of roles of a given type, 'free' or 'all'
 * retrieves all the roles of a given type, chosen by the corresponding group
 *
 * type String type of group of role
 * limit Integer max number of items per page (optional)
 * offset Integer pagination offset for the given page (optional)
 * returns List
 **/
exports.rolesTypeGET = function(type,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "rid" : "r0001",
  "name" : "garden assistant",
  "type" : "not free",
  "descr" : "hi"
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
 * type String type of group of role
 * limit Integer max number of items per page (optional)
 * offset Integer pagination offset for the given page (optional)
 * returns Object
 **/
exports.rolesTypeRidGET = function(rid,type,limit,offset) {
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

