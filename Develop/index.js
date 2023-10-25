// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title',
    },

    {
        type: 'input',
        name: 'description',
        message: 'leave a short description'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How to install application',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'how this app is used',
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'did anyone contribute',

    },

    {
        type: 'input',
        name: 'test',
        message: 'what frameworks was used',
    },

    {
        type: 'input',
        name: 'email',
        message: 'what is your email?',

    },


    {
        type: 'input',
        name: 'github',
        message: 'what is your github',
    },

    {
        type: 'list',
        name: 'license',
        message: 'what license was used for application',
        choices: ['MIT', 'BSD 3.0', 'APACHE 2.0', 'none']
    },
    //testing 

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log({ ...answers })
        writeToFile('readme.md', generateMarkdown({ ...answers }))
    })

}

// Function call to initialize app
init();
