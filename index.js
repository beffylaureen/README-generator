// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const questions = [
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license:',
      choices: ['None', 'Apache', 'Boost', 'MIT', 'Mozilla'],
      default: 'None'
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of this project?',
      
    },
    {
      type: 'input',
      name: 'purpose',
      message: 'What is the purpose of this application?',

    },
    {
      type: 'input',
      name: 'installation',
      message: 'How is this application installed?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How is this application used?',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'How is this application tested?',
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'How do I contribute to the application?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub user name?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    }
  ];


// TODO: Create a function to write README file
function writeToFile(data) {
  const filename = './results/README.md';

  fs.writeFile(filename, data, function (err){
    err ? console.log(err) : console.log(filename + " successful!")
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then (answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init();
