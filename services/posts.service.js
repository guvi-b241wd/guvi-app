const { ObjectId } = require("mongodb");

const mongo = require("../shared/mongo");

const service = {
  getPosts() {
    return mongo.db.collection("posts").find().toArray();
  },
  getPost(id) {
    return mongo.db.collection("posts").findOne({ _id: ObjectId(id) });
  },
  createPost(data) {
    return mongo.db.collection("posts").insert(data);
  },
  updatePost(id, data) {
    return mongo.db
      .collection("posts")
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: data },
        { returnDocument: "after" }
      );
  },
  deletePost(id) {
    return mongo.db.collection("posts").remove({ _id: ObjectId(id) });
  },
};

module.exports = service;
