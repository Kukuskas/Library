"use strict";

const LocationAbl = require("../../abl/location-abl");

class LocationController {
  create(ucEnv) {
    return LocationAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getSession(), ucEnv.getAuthorizationResult());
  }
  update(ucEnv) {
    return LocationAbl.update(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getSession(), ucEnv.getAuthorizationResult());
  }
  addBookToLocation(ucEnv) {
    return LocationAbl.getByID(ucEnv.getUri().getAwid(), ucEnv.getDtoIn()).update(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getSession(), ucEnv.getAuthorizationResult());
  }
  getByID(ucEnv){
    return LocationAbl.getByID(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  list(ucEnv){
    return LocationAbl.list(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  delete(ucEnv){
    return LocationAbl.delete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getSession(), ucEnv.getAuthorizationResult());
  }
}

module.exports = new LocationController();