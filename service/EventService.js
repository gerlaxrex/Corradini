'use strict';


/**
 * gets all the group of events divided by month
 * We take the list of all events by month
 *
 * limit Integer max number of items per page (optional)
 * offset Integer pagination offset for the given page (optional)
 * returns List
 **/
exports.eventsGET = function(limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "eid" : "eid",
  "schedule" : 0,
  "contact" : "contact",
  "eventName" : "eventName",
  "description" : "description",
  "beginTime" : "2000-01-23T04:56:07.000+00:00",
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "place" : "place"
}, {
  "eid" : "eid",
  "schedule" : 0,
  "contact" : "contact",
  "eventName" : "eventName",
  "description" : "description",
  "beginTime" : "2000-01-23T04:56:07.000+00:00",
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "place" : "place"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * gets an the event from the selected month
 * retrieves all the roles of a given type, chosen by the corresponding group
 *
 * eid String identifier for the event
 * month Integer month in which there is all the group of events
 * limit Integer max number of items per page (optional)
 * offset Integer pagination offset for the given page (optional)
 * returns Object
 **/
exports.eventsMonthEidGET = function(eid,month,limit,offset) {
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
 * gets all the events by the selected month
 * retrieves all the roles of a given type, chosen by the corresponding group
 *
 * month Integer month in which there is all the group of events
 * limit Integer max number of items per page (optional)
 * offset Integer pagination offset for the given page (optional)
 * returns List
 **/
exports.eventsMonthGET = function(month,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "eid" : "eid",
  "schedule" : 0,
  "contact" : "contact",
  "eventName" : "eventName",
  "description" : "description",
  "beginTime" : "2000-01-23T04:56:07.000+00:00",
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "place" : "place"
}, {
  "eid" : "eid",
  "schedule" : 0,
  "contact" : "contact",
  "eventName" : "eventName",
  "description" : "description",
  "beginTime" : "2000-01-23T04:56:07.000+00:00",
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "place" : "place"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

