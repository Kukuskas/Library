"use strict";
const BooksAbl = require("../../abl/books-abl");

class BooksController {

  create(ucEnv) {
    return BooksAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getSession(), ucEnv.getAuthorizationResult());
  }

  list(ucEnv){
    return BooksAbl.list(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  update(ucEnv) {
    return BooksAbl.update(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getSession(), ucEnv.getAuthorizationResult());
  }

  delete(ucEnv){
    return BooksAbl.delete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getSession(), ucEnv.getAuthorizationResult());
  }

  getBook(ucEnv){
    return BooksAbl.getBook(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
}

module.exports = new BooksController();
