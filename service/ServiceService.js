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
 * gets all the services of a given type
 * retrieves all the services of a given type.
 *
 * type String type of group of role (optional)
 * limit Integer max number of items per page (optional)
 * offset Integer pagination offset for the given page (optional)
 * returns List
 **/
exports.servicesGET = function(type,limit,offset) {
  let result = sqlDb('service');
  if(type != undefined){
    result = result.where('type',type);
  }
  if(limit != undefined){
    result = result.limit(limit);
  }
  if(offset != undefined){
    result = result.offset(offset);
  }
  return result;
}


exports.servTypesGET = function(limit,offset) {
  let result = sqlDb('service');
  if(limit != undefined){
    result = result.limit(limit);
  }
  if(offset != undefined){
    result = result.offset(offset);
  }
  return result.distinct('service.type');
}


/**
 * gets a specific service of a given type
 * retrieves a service given the identifier and the type.
 *
 * sid String identifier of the selected service
 * type String type of group of role (optional)
 * returns Object
 **/
exports.servicesSidGET = function(sid,type) {
  let result = sqlDb('service').where('sid',sid);
  if(type != undefined){
    result = result.where('type',type);
  }
  return result;
}


/**
 * gets all the people involved in a given Service
 * retrieves the people helping in the service.
 *
 * sid String identifier of the selected service
 * type String type of group of role (optional)
 * limit Integer max number of items per page (optional)
 * offset Integer pagination offset for the given page (optional)
 * returns List
 **/
exports.servicesSidInvolvingGET = function(sid,type,limit,offset) {
  let result = sqlDb('service').where('sid',sid).join('involves','service.sid','=','involves.service')
                                                .join('person','person.pid','=','involves.person');
  if(type != undefined){
    result = result.where('service.type',type);
  }

  if(limit != undefined){
    result = result.limit(limit);
  }
  if(offset != undefined){
    result = result.offset(offset);
  }

  return result.select('person.*');

}


/**
 * gets a specific service of a given type
 * retrieves all the events in which the service is presented.
 *
 * sid String identifier of the selected service
 * type String type of group of role (optional)
 * limit Integer max number of items per page (optional)
 * offset Integer pagination offset for the given page (optional)
 * returns List
 **/
exports.servicesSidPresentedInGET = function(sid,type,limit,offset) {
  let result = sqlDb('service').where('service.sid',sid).join('presents','presents.service','=','service.sid')
                                                    .join('event','event.eid','=','presents.event');
  if(type != undefined){
    result = result.where('service.type',type);
  }

  if(limit != undefined){
    result = result.limit(limit);
  }
  if(offset != undefined){
    result = result.offset(offset);
  }

  return result.select('event.*');
}

