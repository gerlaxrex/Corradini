'use strict';

let sqlDb;


//SETTING UP THE CONNECTION FOR THE COMMUNICATION OF THE DATABASE
exports.PersonDbSetup = function(connection){
  sqlDb = connection;
  console.log("checking if table exists.");
  return sqlDb.schema.hasTable('person').then((exists) => {
    if(!exists){
      console.log("Table does not exit!");
    }else{
      console.log("It exits.")
    }
  });
};


/**
 * gets all the people involved in a given type of job
 * retrieves all the people having a given type of job in the association.
 *
 * job String role of the person (optional)
 * limit Integer max number of items per page (optional)
 * offset Integer pagination offset for the given page (optional)
 * returns List
 **/
exports.peopleGET = function(job,limit,offset) {
   let result = sqlDb('person');
   if(job != undefined){
     if(job == "collaborators"){
       result = result.join('role','role.rid','=','person.rid').select('person.*').whereNot('role.rolename','Sponsor')
                                                               .andWhere('role.rolename','not like','%Assistant%');
     }else{
       result = result.join('role','role.rid','=','person.rid').where('role.rolename',job).select('person.*');
     }
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
 * gets a specific person that has a given job
 * retrieves the events for which the person is the contact.
 *
 * pid String role of the person
 * job String role of the person (optional)
 * limit Integer max number of items per page (optional)
 * offset Integer pagination offset for the given page (optional)
 * returns List
 **/
exports.peoplePidContactForGET = function(pid,job,limit,offset) {
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
 * gets a specific person that has a given job
 * retrieves a person with a specific id and a type of job
 *
 * pid String role of the person
 * job String role of the person (optional)
 * limit Integer max number of items per page (optional)
 * offset Integer pagination offset for the given page (optional)
 * returns List
 **/
exports.peoplePidGET = function(pid,job,limit,offset) {
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


/**
 * gets the services in which the person works.
 * retrieves the services in which the person works.
 *
 * pid String identifier of the person
 * job String role of the person (optional)
 * limit Integer max number of items per page (optional)
 * offset Integer pagination offset for the given page (optional)
 * returns List
 **/
exports.peoplePidInvolvedGET = function(pid,job,limit,offset) {
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
 * retrieves the role of a specific person
 * retrieves the role of a specific person
 *
 * pid String role of the person
 * job String role of the person (optional)
 * returns Object
 **/
exports.peoplePidRoleGET = function(pid,job) {
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

