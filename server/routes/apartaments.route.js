const express = require("express");
const Apartaments = require("../models/apartament.model");

const router = express.Router();

router.route("/").get((req, res) => {
  Apartaments.find()
    .limit(10)
    .exec()
    .then((a) => {
      console.log(a.length);
      res.send(a);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
