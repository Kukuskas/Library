"use strict";
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory, ObjectStoreError } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const { SysProfileModel } = require("uu_appg01_server").Workspace;
const Errors = require("../api/errors/books-error");

const WARNINGS = {
  createUnsupportedKeys: {
    code: `${Errors.Create.UC_CODE}unsupportedKeys`
  },
  listUnsupportedKeys: {
    code: `${Errors.List.UC_CODE}unsupportedKeys`
  },
  updateUnsupportedKeys: {
    code: `${Errors.Update.UC_CODE}unsupportedKeys`
  },
  deleteUnsupportedKeys: {
    code: `${Errors.Delete.UC_CODE}unsupportedKeys`
  },
  getBookUnsupportedKeys: {
    code: `${Errors.GetBook.UC_CODE}unsupportedKeys`
  }
};

const AUTHORITIES_PROFILE = "Authorities";

class BooksAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("book");
  }

  async create(awid, dtoIn, session, authorizationResult) {
    let id = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(32);
    });
    // id = "805747e0ec253fb296f8eec5e6b3fd6a"

    dtoIn.id = id;
    let validationResult = this.validator.validate("bookCreateDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createUnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    dtoIn.visibility = authorizationResult.getAuthorizedProfiles().includes(AUTHORITIES_PROFILE);

    dtoIn.uuIdentity = session.getIdentity().getUuIdentity();
    dtoIn.uuIdentityName = session.getIdentity().getName();

    dtoIn.awid = awid;
    let dtoOut;
    try {
      dtoOut = await this.dao.create(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        // A3
        throw new Errors.CreateBook.BookDaoCreateFailed({ uuAppErrorMap }, e);
      }
      throw e;
    }

    // hds 5
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async list(awid, dtoIn) {
    let validationResult = this.validator.validate("bookListDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.listUnsupportedKeys.code,
      Errors.List.InvalidDtoIn
    );
    let dtoOut;
    dtoIn.awid = awid;
    try {
      dtoOut = await this.dao.list(awid, dtoIn.title, dtoIn.author);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        // A3
        throw new Errors.List.BookDaoListFailed({ uuAppErrorMap }, e);
      }
    }
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async update(awid, dtoIn, session, authorizationResult) {
    let validationResult = this.validator.validate("bookUpdateDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.updateUnsupportedKeys.code,
      Errors.Update.InvalidDtoIn
    );

    dtoIn.visibility = authorizationResult.getAuthorizedProfiles().includes(AUTHORITIES_PROFILE);

    dtoIn.uuIdentity = session.getIdentity().getUuIdentity();
    dtoIn.uuIdentityName = session.getIdentity().getName();
    let dtoOut;
    dtoIn.awid = awid;
    console.log(dtoIn);

    try {
      dtoOut = await this.dao.update(awid, dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        // A3
        throw new Errors.Update.BookDaoUpdateFailed({ uuAppErrorMap }, e);
      }
    }
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async delete(awid, dtoIn, session, authorizationResult) {
    let validationResult = this.validator.validate("bookDeleteDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.deleteUnsupportedKeys.code,
      Errors.Delete.InvalidDtoIn
    );

    dtoIn.visibility = authorizationResult.getAuthorizedProfiles().includes(AUTHORITIES_PROFILE);

    dtoIn.uuIdentity = session.getIdentity().getUuIdentity();
    dtoIn.uuIdentityName = session.getIdentity().getName();
    let dtoOut;
    dtoIn.awid = awid;
    try {
      dtoOut = await this.dao.delete(awid, dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        // A3
        throw new Errors.Delete.BookDaoDeleteFailed({ uuAppErrorMap }, e);
      }
    }
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async getBook(awid, dtoIn) {
    let validationResult = this.validator.validate("bookGetBookDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getBookUnsupportedKeys.code,
      Errors.GetBook.InvalidDtoIn
    );
    let dtoOut;
    dtoIn.awid = awid;
    try {
      dtoOut = await this.dao.getBook(awid, dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        // A3
        throw new Errors.GetBook.BookDaoGetBookFailed({ uuAppErrorMap }, e);
      }
    }
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }
}

module.exports = new BooksAbl();
