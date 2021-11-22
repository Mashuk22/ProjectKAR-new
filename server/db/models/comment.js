const { Schema, model } = require("mongoose");

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

const Comment = model("Comment", schema);

module.exports = Comment;
