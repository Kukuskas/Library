"use strict";
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory, ObjectStoreError } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const { SysProfileModel } = require("uu_appg01_server").Workspace;
const Errors = require("../api/errors/location-error");

const WARNINGS = {
  createUnsupportedKeys: {
    code: `${Errors.Create.UC_CODE}unsupportedKeys`
  },
  updateUnsupportedKeys: {
    code: `${Errors.Update.UC_CODE}unsupportedKeys`
  },
  getByIDUnsupportedKeys: {
    code: `${Errors.GetByID.UC_CODE}unsupportedKeys`
  },
  listUnsupportedKeys: {
    code: `${Errors.List.UC_CODE}unsupportedKeys`
  },
  deleteUnsupportedKeys: {
    code: `${Errors.Delete.UC_CODE}unsupportedKeys`
  }
};

class LocationAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao('location')
  }

  async create(awid, dtoIn) {
    let validationResult = this.validator.validate("locationCreateDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.createUnsupportedKeys.code, Errors.Create.InvalidDtoIn);

    let dtoOut;
    dtoIn.awid = awid;
    try {
      dtoOut = await this.dao.create(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) { // A3
        throw new Errors.Create.LocationDaoCreateFailed({uuAppErrorMap}, e);
      }
    }
      dtoOut.uuAppErrorMap = uuAppErrorMap;
      return dtoOut;
    }

  async update(awid, dtoIn) {
    let validationResult = this.validator.validate("locationUpdateDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.updateUnsupportedKeys.code, Errors.Update.InvalidDtoIn);
    let dtoOut;
    dtoIn.awid = awid;
    try {
      dtoOut = await this.dao.update(awid,dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) { // A3
        throw new Errors.Update.LocationDaoUpdateFailed({uuAppErrorMap}, e);
      }
    }
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  };

  async getByID(awid, dtoIn) {
    let validationResult = this.validator.validate("locationGetByIDDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.getByIDUnsupportedKeys.code, Errors.GetByID.InvalidDtoIn);
    let dtoOut;
    dtoIn.awid = awid;
    try {
      dtoOut = await this.dao.getByID(awid, dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) { // A3
        throw new Errors.GetByID.LocationDaoGetByIDFailed({uuAppErrorMap}, e);
      }
    }dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  };

  async list(awid, dtoIn) {
    let validationResult = this.validator.validate("locationListDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.listUnsupportedKeys.code, Errors.List.InvalidDtoIn);
    let dtoOut;
    dtoIn.awid = awid;
    try {
      dtoOut = await this.dao.list(awid, dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) { // A3
        throw new Errors.List.LocationDaoListFailed({uuAppErrorMap}, e);
      }
    }
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  };

  async delete(awid, dtoIn) {
    let validationResult = this.validator.validate("locationDeleteDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.deleteUnsupportedKeys.code, Errors.Delete.InvalidDtoIn);
    let dtoOut;
    dtoIn.awid = awid;
    try {
      dtoOut = await this.dao.delete(awid, dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) { // A3
        throw new Errors.Delete.LocationDaoDeleteFailed({uuAppErrorMap}, e);
      }
    }
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }
}

module.exports = new LocationAbl();
