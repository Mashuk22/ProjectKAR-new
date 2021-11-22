const { Router } = require("express");
const Comment = require("../db/models/comment");

const commentRouter = Router();

commentRouter.post("/create", async (req, res) => {
  const { title } = req.body;
  console.log(req.body);
  await Comment.create({ title });
  const createdComment = await Comment.findOne({ title });
  res.json(createdComment);
});

module.exports = commentRouter;
