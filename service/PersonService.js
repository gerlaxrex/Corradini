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
       result = result.join('role','role.rid','=','person.rid').whereNot('role.rolename','Sponsor')
                                                               .andWhere('role.rolename','not like','%Assistant%');
     }else if (job == "assistants"){
       result = result.join('role','role.rid','=','person.rid').where('role.rolename','like','%Assistant%');
     }else{
       result = result.join('role','role.rid','=','person.rid').where('role.rolename',job);
     }
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
  let result = sqlDb('person').where('pid',pid).join('event','person.pid','=','event.contact');

  if(job != undefined){
    if(job == "collaborators"){
      result = result.join('role','role.rid','=','person.rid').whereNot('role.rolename','Sponsor')
                                                              .andWhere('role.rolename','not like','%Assistant%');
    }else if (job == "assistants"){
      result = result.join('role','role.rid','=','person.rid').where('role.rolename','like','%Assistant%');
    }else{
      result = result.join('role','role.rid','=','person.rid').where('role.rolename',job);
    }
  }

  if(limit != undefined){
    result = result.limit(limit);
  }

  if(offset != undefined){
    result = result.offset(offset);
  }

  return result.select('event.*');
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
exports.peoplePidGET = function(pid,job) {
  let result = sqlDb('person').where('pid',pid);

  if(job != undefined){
    if(job == "collaborators"){
      result = result.join('role','role.rid','=','person.rid').whereNot('role.rolename','Sponsor')
                                                              .andWhere('role.rolename','not like','%Assistant%');
    }else if (job == "assistants"){
      result = result.join('role','role.rid','=','person.rid').where('role.rolename','like','%Assistant%');
    }else{
      result = result.join('role','role.rid','=','person.rid').where('role.rolename',job);
    }
  }

  return result.select('person.*');
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
  let result = sqlDb('person').where('pid',pid).join('involves','person.pid','=','involves.person')
                                               .join('service','service.sid','=','involves.service');

  if(job != undefined){
     if(job == "collaborators"){
       result = result.join('role','role.rid','=','person.rid').whereNot('role.rolename','Sponsor')
                                                               .andWhere('role.rolename','not like','%Assistant%');
     }else if (job == "assistants"){
       result = result.join('role','role.rid','=','person.rid').where('role.rolename','like','%Assistant%');
     }else{
       result = result.join('role','role.rid','=','person.rid').where('role.rolename',job);
     }
  }

  if(limit != undefined){
    result = result.limit(limit);
  }

  if(offset != undefined){
    result = result.offset(offset);
  }

  return result.select('service.*');
  
}

exports.peoplePidPicturesGET = function(pid,job,limit,offset) {
  let result = sqlDb('imageperson').where('person',pid).join('person','person.pid','=','imageperson.person');

  if(job != undefined){
     if(job == "collaborators"){
       result = result.join('role','role.rid','=','person.rid').whereNot('role.rolename','Sponsor')
                                                               .andWhere('role.rolename','not like','%Assistant%');
     }else if (job == "assistants"){
       result = result.join('role','role.rid','=','person.rid').where('role.rolename','like','%Assistant%');
     }else{
       result = result.join('role','role.rid','=','person.rid').where('role.rolename',job);
     }
  }

  if(limit != undefined){
    result = result.limit(limit);
  }

  if(offset != undefined){
    result = result.offset(offset);
  }

  return result.select('imageperson.imagename');
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
  let result = sqlDb('person').where('pid',pid).join('role','person.rid','=','role.rid');
  
  if(job != undefined){
    if(job == "collaborators"){
      result = result.join('role','role.rid','=','person.rid').whereNot('role.rolename','Sponsor')
                                                              .andWhere('role.rolename','not like','%Assistant%');
    }else if (job == "assistants"){
      result = result.join('role','role.rid','=','person.rid').where('role.rolename','like','%Assistant%');
    }else{
      result = result.join('role','role.rid','=','person.rid').where('role.rolename',job);
    }
  }
  
  return result.select('role.*');
}

