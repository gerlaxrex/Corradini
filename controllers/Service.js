'use strict';

var utils = require('../utils/writer.js');
var Service = require('../service/ServiceService');

module.exports.servicesGET = function servicesGET (req, res, next) {
  var type = req.swagger.params['type'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Service.servicesGET(type,limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.servTypesGET = function servicesTypesGET (req, res, next) {
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Service.servTypesGET(limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.servicesSidGET = function servicesSidGET (req, res, next) {
  var sid = req.swagger.params['sid'].value;
  var type = req.swagger.params['type'].value;
  Service.servicesSidGET(sid,type)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.servicesSidInvolvingGET = function servicesSidInvolvingGET (req, res, next) {
  var sid = req.swagger.params['sid'].value;
  var type = req.swagger.params['type'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Service.servicesSidInvolvingGET(sid,type,limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.servicesSidPresentedInGET = function servicesSidPresentedInGET (req, res, next) {
  var sid = req.swagger.params['sid'].value;
  var type = req.swagger.params['type'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Service.servicesSidPresentedInGET(sid,type,limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
