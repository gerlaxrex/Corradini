'use strict';

var utils = require('../utils/writer.js');
var Person = require('../service/PersonService');

module.exports.peopleGET = function peopleGET (req, res, next) {
  var job = req.swagger.params['job'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Person.peopleGET(job,limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.peoplePidContactForGET = function peoplePidContactForGET (req, res, next) {
  var pid = req.swagger.params['pid'].value;
  var job = req.swagger.params['job'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Person.peoplePidContactForGET(pid,job,limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.peoplePidGET = function peoplePidGET (req, res, next) {
  var pid = req.swagger.params['pid'].value;
  var job = req.swagger.params['job'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Person.peoplePidGET(pid,job,limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.peoplePidInvolvedGET = function peoplePidInvolvedGET (req, res, next) {
  var pid = req.swagger.params['pid'].value;
  var job = req.swagger.params['job'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Person.peoplePidInvolvedGET(pid,job,limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.peoplePidRoleGET = function peoplePidRoleGET (req, res, next) {
  var pid = req.swagger.params['pid'].value;
  var job = req.swagger.params['job'].value;
  Person.peoplePidRoleGET(pid,job)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
