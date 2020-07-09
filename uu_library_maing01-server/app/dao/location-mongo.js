"use strict";

const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class LocationMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex({ awid: 1, id: 1 }, { unique: true });
  }

  async create(location) {
    return await super.insertOne(location);
  }

  async update(awid, location) {
    return await super.findOneAndUpdate({ awid, id: location.id }, location, "NONE");
  }

  async getByID(awid, location) {
    return await super.findOne({ awid, id: location.id });
  }

  async list(awid, name) {

    let conditions = [];
    name && conditions.push({ name: name });
    !name && conditions.push({});

    let filter = {
      awid,
      $or: conditions
    };
    return await super.find(filter);
  }

  async delete(awid, location) {
    let deletedLocation = await super.findOne({ awid, id: location.id });//zbytečný- navíc načítám spoustu dat
    await super.deleteOne({ awid, id: location.id });//return tohle
    return deletedLocation;
  }
}

module.exports = LocationMongo;
