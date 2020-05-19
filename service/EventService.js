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
  let result = sqlDb('event').where('event.eid',eid).join('person','person.pid','=','event.contact');
  if(month != undefined){
    result = result.whereRaw('extract(month from begintime) = '+month);
  }
  return result.select('person.*');
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
  let result = sqlDb('event').where('eid',eid);
  if(month != undefined){
    result = result.whereRaw('extract(month from begintime) = '+month);
  }
  return result;
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
  let result = sqlDb('event').where('event.eid',eid).join('presents','presents.event','=','event.eid')
                                                    .join('service','service.sid','=','presents.service');
  if(month != undefined){
    result = result.whereRaw('extract(month from begintime) = '+month);
  }

  if(limit != undefined){
    result = result.limit(limit);
  }
  
  if(offset != undefined){
    result = result.offset(offset);
  }

  return result.select('service.*');
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
  let result = sqlDb('event');
  if(month != undefined){
    result = result.whereRaw('extract(month from begintime) = '+month);
  }

  if (limit != undefined){
    result = result.limit(limit);
  }

  if(offset != undefined){
    result = result.offset(offset);
  }

  return result;
}

