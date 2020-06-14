const express = require("express");

const Project = require("../models/user");

const router = express.Router();

router.post("/form", (req, res, next) => {
  const user = new user({
    _id: req.body.github,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    companyName: req.body.companyName,
    githubUrl: req.body.githubUrl,
    linkedinUrl: req.body.linkedinUrl,
  });
});

module.exports = router;
