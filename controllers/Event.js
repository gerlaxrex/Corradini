'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');

module.exports.eventsEidContactGET = function eventsEidContactGET (req, res, next) {
  var eid = req.swagger.params['eid'].value;
  var month = req.swagger.params['month'].value;
  Event.eventsEidContactGET(eid,month)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsEidGET = function eventsEidGET (req, res, next) {
  var eid = req.swagger.params['eid'].value;
  var month = req.swagger.params['month'].value;
  Event.eventsEidGET(eid,month)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsEidPresentsGET = function eventsEidPresentsGET (req, res, next) {
  var eid = req.swagger.params['eid'].value;
  var month = req.swagger.params['month'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Event.eventsEidPresentsGET(eid,month,limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsGET = function eventsGET (req, res, next) {
  var month = req.swagger.params['month'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Event.eventsGET(month,limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
