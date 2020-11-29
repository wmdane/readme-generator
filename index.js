const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./generateMarkdown");

//user prompts to gather info to be written into the readme
const prompts = [
  {
    type: "input",
    message: "What is the Title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a description for your project",
    name: "description",
  },
  {
    type: "input",
    message: "Enter installation instructions",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter usage information",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter any contribution guidelines",
    name: "contributing",
  },
  {
    type: "input",
    message: "Enter test instructions",
    name: "tests",
  },
  {
    type: "checkbox",
    message: "Select which license you'd like to use",
    name: "license",
    choices: ["MIT", "ISC"],
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log("Success! Now gererating your README!");
  });
}
