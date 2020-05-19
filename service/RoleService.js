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
  let result = sqlDb('role');
  
  if(type == 'free'){
    result = result.where('freeroles','>',0);
  }else if(type == 'all'){
    ;
  }else{
    console.log('ERROR: type for role is not well defined');
  }

  if(limit != undefined){
    result = result.limit(limit);
  }
  if(offset != undefined){
    result = result.offset(offset);
  }
  return result;
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
  let result = sqlDb('role').where('rid',rid);
  if(type != undefined){
    result = result.where('type',type);
  }
  return result;
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
  let result = sqlDb('role').where('rid',rid).join('relates','relates.role','=','role.rid')
                                             .join('service','service.sid','=','relates.service');
  if(type != undefined){
    result = result.where('role.type',type);
  }

  if(limit != undefined){
    result = result.limit(limit);
  }

  if(offset != undefined){
    result = result.offset(offset);
  }

  return result.select('service.*');
}

