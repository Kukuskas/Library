"use strict";
const LibraryMainUseCaseError = require("./library-main-use-case-error");

const Create = {
  UC_CODE: `${LibraryMainUseCaseError.ERROR_PREFIX}create/`,

  InvalidDtoIn: class extends LibraryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SchemaDaoCreateSchemaFailed: class extends LibraryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.status = 500;
      this.code = `${Create.UC_CODE}schemaDaoCreateSchemaFailed`;
      this.message = "Create schema by Dao createSchema failed.";
    }
  },

  LocationDaoCreateFailed: class extends LibraryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}locationDaoCreateFailed`;
      this.message = "Create location by location Dao create failed.";
    }
  },
};

const Update = {UC_CODE: `${LibraryMainUseCaseError.ERROR_PREFIX}update/`,

  InvalidDtoIn: class extends LibraryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SchemaDaoCreateSchemaFailed: class extends LibraryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.status = 500;
      this.code = `${Update.UC_CODE}schemaDaoCreateSchemaFailed`;
      this.message = "Update schema by Dao createSchema failed.";
    }
  },

  LocationDaoUpdateFailed: class extends LibraryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}locationDaoUpdateFailed`;
      this.message = "Update location by location Dao update failed.";
    }
  }
};

const GetByID = {UC_CODE: `${LibraryMainUseCaseError.ERROR_PREFIX}getByID/`,

  InvalidDtoIn: class extends LibraryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${GetByID.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SchemaDaoCreateSchemaFailed: class extends LibraryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.status = 500;
      this.code = `${GetByID.UC_CODE}schemaDaoCreateSchemaFailed`;
      this.message = "GetByID schema by Dao createSchema failed.";
    }
  },

  LocationDaoGetByIDFailed: class extends LibraryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${GetByID.UC_CODE}locationDaoGetByIDFailed`;
      this.message = "GetByID location by location Dao getByID failed.";
    }
  }
};

const List = {UC_CODE: `${LibraryMainUseCaseError.ERROR_PREFIX}list/`,

  InvalidDtoIn: class extends LibraryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SchemaDaoCreateSchemaFailed: class extends LibraryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.status = 500;
      this.code = `${List.UC_CODE}schemaDaoCreateSchemaFailed`;
      this.message = "List schema by Dao createSchema failed.";
    }
  },

  LocationDaoListFailed: class extends LibraryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}locationDaoListFailed`;
      this.message = "List location by location Dao List failed.";
    }
  }
};

const Delete = {UC_CODE: `${LibraryMainUseCaseError.ERROR_PREFIX}delete/`,

  InvalidDtoIn: class extends LibraryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SchemaDaoCreateSchemaFailed: class extends LibraryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.status = 500;
      this.code = `${Delete.UC_CODE}schemaDaoCreateSchemaFailed`;
      this.message = "Delete schema by Dao createSchema failed.";
    }
  },

  LocationDaoDeleteFailed: class extends LibraryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}locationDaoDeleteFailed`;
      this.message = "Delete location by location Dao delete failed.";
    }
  }
};

module.exports = {
  Create,
  Update,
  GetByID,
  List,
  Delete
};
