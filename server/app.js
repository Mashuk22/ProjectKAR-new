const express = require("express");
const connectDB = require("./db/index");
const cors = require("cors");
const commentRouter = require("./routes/commentRouter");

const app = express();
app.use(cors());

const PORT = 8080;
app.use(express.json());

app.use("/comment", commentRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is started!");
  });
});
