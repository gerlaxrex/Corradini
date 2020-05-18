'use strict';

var utils = require('../utils/writer.js');
var Person = require('../service/PersonService');

module.exports.peopleGET = function peopleGET (req, res, next) {
  Person.peopleGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.peopleJobGET = function peopleJobGET (req, res, next) {
  var job = req.swagger.params['job'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Person.peopleJobGET(job,limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.peopleJobPidGET = function peopleJobPidGET (req, res, next) {
  var pid = req.swagger.params['pid'].value;
  var job = req.swagger.params['job'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Person.peopleJobPidGET(pid,job,limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.peoplePidContactForGET = function peoplePidContactForGET (req, res, next) {
  var pid = req.swagger.params['pid'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Person.peoplePidContactForGET(pid,limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.peoplePidInvolvedGET = function peoplePidInvolvedGET (req, res, next) {
  var pid = req.swagger.params['pid'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Person.peoplePidInvolvedGET(pid,limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.peoplePidRoleGET = function peoplePidRoleGET (req, res, next) {
  var pid = req.swagger.params['pid'].value;
  Person.peoplePidRoleGET(pid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
