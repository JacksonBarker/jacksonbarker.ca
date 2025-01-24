var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Jackson Barker" });
});

router.get("/links", function (req, res, next) {
  res.render("links", { title: "Links" });
});

module.exports = router;
