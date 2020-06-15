const express = require("express");
const chalk = require("chalk");
const boxen = require("boxen");
const path = require("path");
const fs = require("fs");
const router = express.Router();

// set up Boxen options
const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

router.get("/app", (req, res) => {
  //   console.log(req.body);
  const linkedin = req.body.linkedin;
  const github = req.body.github;
  const name = req.body.name;
  const newLine = "\n";
  //   console.log("gege");

  const result =
    chalk.blue(`                  Hello, I'm ${name}`) +
    newLine +
    newLine +
    chalk.red(`   LinkedIn: `) +
    chalk.cyan(`${linkedin}`) +
    newLine +
    chalk.red(`   GitHub: `) +
    chalk.cyan(`${github}`) +
    newLine +
    newLine +
    chalk.yellow(
      "Written with love by e33or_assasin, modified by Rajat Sablok"
    ) +
    newLine;

  console.log(boxen(result));
  res.status(200).send(result);
});

module.exports = router;
