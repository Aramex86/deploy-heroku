const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const apartaments = require("./routes/apartaments.route");

const corsConfig = {
  origin: true,
  credentials: true,
};

const app = express();
app.use(cors(corsConfig));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 5000;
const conectionString = process.env.MONGODB_URL;
mongoose
  .connect(conectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    poolSize: 50,
    useFindAndModify: false,
  })
  .then(() => console.log("MONGO is CONNECTED"))
  .catch((err) => console.log(err));

app.use("/api/v1/apartaments", apartaments);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
