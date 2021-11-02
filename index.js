const inquirer = require('inquirer')
const jest = require('jest')
const fs = require('fs')
const path = require('path')
const markdown = require('./generatemarkdown')

const start = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Hello Team Manager, what is your name?'
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'What is your employee ID?'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: `Great! 
         What is your email?`
    },
    {
        type: 'input',
        name: 'managerOffNum',
        message: 'Please enter your office numer.'
    },
]
const menu = [
    {
        type: 'list',
        name: 'newMemb',
        message: 'Would you like to add a new member or finish up?',
        choices: ['Add new member', 'Finished']
    },
]
const newMember = [
    {
        type: 'list',
        name: 'membList',
        message: 'Who would you like to add next?',
        choices: ['Engineer', 'Intern']
    }
]
const engineerQs = [
    {
        type: 'input',
        name: 'engName',
        messgae: 'What is the engineer/s name?'
    },
    {
        type: 'input',
        name: 'engID',
        messgae: 'What is the engineer/s employee ID?'
    },
    {
        type: 'input',
        name: 'engEmail',
        messgae: 'What is the engineer/s email?'
    },
    {
        type: 'input',
        name: 'engGitHub',
        messgae: 'What is the engineer/s github username?'
    }
]
const internQs = [
    {
        type: 'input',
        name: 'internName',
        messgae: 'What is the intern/s name?'
    },
    {
        type: 'input',
        name: 'internID',
        messgae: 'What is the intern/s employee ID?'
    },
    {
        type: 'input',
        name: 'internEmail',
        messgae: 'What is the intern/s email?'
    },
    {
        type: 'input',
        name: 'internGitHub',
        messgae: 'What is the intern/s github username?'
    }
]

function cont()
{
    inquirer 
        .prompt(newMember)
        .then(// write the other questions to insert in here with an if, then statement)
}

function 



//Add where and what the file should be called
function writeToFile(input) {
    fs.writeFileSync(`${input.fileName}.md`, markdown(input))
}

// create a function for the start of the code
function init() {
    inquirer
    .prompt(start)
    .then(menu)
    .then((input, list) => {
        if (`${list.choices}` == 'Finished'){
          writeToFile(input);  
        } else {
            cont();
        }
    });
};

// Function call to initialize app
init();