// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const data = [
  {
    type: 'input',
    name: 'name',
    message: "What is your project's name?",
  },
  {
    type: 'input',
    name: 'description',
    message: "What is your project about?",
  },
  {
    type: 'input',
    name: 'installation',
    message: "What are the installation instructions for your project?",
  },
  {
    type: 'input', 
    name: 'solution',
    message: 'What does your problem solve?',
  },
  {
    type: 'input',
    name: 'functions',
    message: 'What features does your project have?',
  },
  {
    type: 'input',
    name: 'technologies',
    message: 'What technologies does your project use?',
  },
  {
    type: 'input',
    name: 'benefit',
    message: 'Who can benefit from using your project?',
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Who are the contributors to your project?',
  },
  {
    type: 'input',
    name: 'license',
    message: 'What license is your project under?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const fileData = `
${data.name}

## Name

${data.description}

## Description

${data.installation}

## Installation

${data.solution}

## Solution

${data.functions}

## Features

${data.technologies}

## Technologies

${data.benefit}

## Who can benefit

${data.contributions} 

## Contributors

${data.license}

## License
`;
fs.writeFile(fileName, fileData, (err) => {
  if (err) throw err;
  console.log('README file written successfully.');
});
 
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(data).then((answers) => {
    writeToFile('README.md', answers);
  });
}


// Function call to initialize app
init();

