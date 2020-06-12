"use strict";
const LibraryMainUseCaseError = require("./library-main-use-case-error.js");
const BOOK_ERROR_PREFIX = `${LibraryMainUseCaseError.ERROR_PREFIX}book/`;

const Create = {
  UC_CODE: `${BOOK_ERROR_PREFIX}create`,

  InvalidDtoIn: class extends LibraryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  BookDaoCreateFailed: class extends LibraryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}bookDaoCreateFailed`;
      this.message = "Create book by book Dao create failed.";
    }
  }
};

const List = {
  UC_CODE: `${BOOK_ERROR_PREFIX}list/`,

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

  BookDaoListFailed: class extends LibraryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}bookDaoListFailed`;
      this.message = "List book by book Dao list failed.";
    }
  }
};

const Update = {
  UC_CODE: `${BOOK_ERROR_PREFIX}update/`,

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

  BookDaoUpdateFailed: class extends LibraryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}bookDaoUpdateFailed`;
      this.message = "Update book by book Dao update failed.";
    }
  }
};

const Delete = {
  UC_CODE: `${BOOK_ERROR_PREFIX}delete/`,

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

  BookDaoDeleteFailed: class extends LibraryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}bookDaoDeleteFailed`;
      this.message = "Delete book by book Dao delete failed.";
    }
  }
};

const GetBook = {
  UC_CODE: `${BOOK_ERROR_PREFIX}getBook/`,

  InvalidDtoIn: class extends LibraryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${GetBook.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SchemaDaoCreateSchemaFailed: class extends LibraryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.status = 500;
      this.code = `${GetBook.UC_CODE}schemaDaoCreateSchemaFailed`;
      this.message = "GetBook schema by Dao createSchema failed.";
    }
  },

  BookDaoGetBookFailed: class extends LibraryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${GetBook.UC_CODE}bookDaoGetBookFailed`;
      this.message = "GetBook book by book Dao getBook failed.";
    }
  }
};

module.exports = {
  Create,
  List,
  Update,
  Delete,
  GetBook
};
