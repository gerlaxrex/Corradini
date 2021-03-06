'use strict';

var utils = require('../utils/writer.js');
var Role = require('../service/RoleService');

module.exports.rolesGET = function rolesGET (req, res, next) {
  var type = req.swagger.params['type'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Role.rolesGET(type,limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rolesRidGET = function rolesRidGET (req, res, next) {
  var rid = req.swagger.params['rid'].value;
  var type = req.swagger.params['type'].value;
  Role.rolesRidGET(rid,type)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rolesRidRelatedToGET = function rolesRidRelatedToGET (req, res, next) {
  var rid = req.swagger.params['rid'].value;
  var type = req.swagger.params['type'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Role.rolesRidRelatedToGET(rid,type,limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
