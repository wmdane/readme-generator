const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

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
    message: "Enter any contribution guidelines or co-contributors",
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
  {
    type: "input",
    message: "Please enter your github username",
    name: "github",
  },
  {
    type: "input",
    message: "Please enter an email you can be reached at",
    name: "email",
  },
];

//function to write data to a new file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log("Success! Now gererating your README!");
  });
}

function init() {
  console.log("Thank you for using wmdane's README Generator!");
  inquirer.prompt(prompts).then((userInput) => {
    const markdown = generateMarkdown(userInput);
    writeToFile("README.md", markdown);
  });
}

init();
