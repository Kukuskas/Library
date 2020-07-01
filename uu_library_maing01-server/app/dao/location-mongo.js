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
    console.log("+++++++++++++++++++++");

    console.log(awid);
    console.log(name);
    // name = "Brno"
    console.log("+++++++++++++++++++");
    let conditions = [];
    name && conditions.push({ name: name });
    !name && conditions.push({});

    let filter = {
      awid,
      $or: conditions
    };
    console.log("******************");

    console.log(filter);
    return await super.find(filter);
  }

  async delete(awid, location) {
    let deletedLocation = await super.findOne({ awid, id: location.id });
    await super.deleteOne({ awid, id: location.id });
    return deletedLocation;
  }
}

module.exports = LocationMongo;
