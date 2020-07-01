"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class BooksMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex({ awid: 1, _id: 1 }, { unique: true });
    //await super.createIndex({awid: 1, visibility: 1});
  }

  async create(book) {
    // book.id= GetId();
    // console.log("OOOOOOOOOOO");
    
    console.log(book);
    console.log("OOOOOOOOOOO");
    return await super.insertOne(book);
  }

  async list(awid, title, author) {
    let conditions= [];
title && conditions.push({ title:title });
author && conditions.push({author:author});
!title && !author && conditions.push({});
    
    let filter = {
      awid,
      $and: conditions
    };
    console.log("******************");
    
    console.log(filter);
    
    return await super.find(filter);
  }

  async getBook(awid, book) {
    return await super.findOne({ awid, id: book.id });
  }

  async update(awid, book) {
    console.log(awid, book);

    return await super.findOneAndUpdate({ awid, id: book.id }, book, "NONE");
  }

  async delete(awid, book) {
    let deletedBook = await super.findOne({ awid, id: book.id });
    await super.deleteOne({ awid, id: book.id });
    return deletedBook;
  }
}

module.exports = BooksMongo;
