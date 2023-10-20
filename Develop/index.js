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
    }




];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        console.log({...answers})
        writeToFile('readme.md', generateMarkdown({...answers}))
    })

}

// Function call to initialize app
init();
