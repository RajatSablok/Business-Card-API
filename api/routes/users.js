const express = require("express");
const mongoose = require("mongoose");

const User = require("../models/user");

const router = express.Router();

//Add a user
router.post("/users/add", async (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    companyName: req.body.companyName,
    githubUrl: req.body.githubUrl,
    linkedinUrl: req.body.linkedinUrl,
  });
  await user
    .save()
    .then(async (user) => {
      res.status(200).json({
        message: "Success",
        userDetails: user,
      });
    })
    .catch(async (err) => {
      res.status(400).json({
        message: "Failure",
        error: err,
      });
    });
});

//Get details of one user
router.get("/users/one", async (req, res, next) => {
  User.find({ _id: req.body.userId })
    .exec()
    .then(async (user) => {
      if (user.length < 1) {
        return res.status(404).json({
          message: "Failure",
          error: "User not found",
        });
      }
      res.status(200).json({
        message: "Success",
        userDetails: user[0],
      });
    })
    .catch(async (err) => {
      res.status(400).json({
        message: "Failure",
        error: err,
      });
    });
});

//Get details of all users
router.get("/users/all", async (req, res, next) => {
  User.find({})
    .exec()
    .then(async (users) => {
      if (users.length < 1) {
        return res.status(404).json({
          message: "Failure",
          error: "No users found",
        });
      }
      res.status(200).json({
        message: "Success",
        count: users.length,
        individualUsers: users,
      });
    })
    .catch(async (err) => {
      res.status(400).json({
        message: "Failure",
        error: err,
      });
    });
});

module.exports = router;
