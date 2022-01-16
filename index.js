const inquirer = require('inquirer')
const fs = require('fs')
// do I need this?
// const path = require('path')
const markdown = require('./src/markdown')
const 

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
        message: 'What is the engineer/s name?'
    },
    {
        type: 'input',
        name: 'engID',
        message: 'What is the engineer/s employee ID?'
    },
    {
        type: 'input',
        name: 'engEmail',
        message: 'What is the engineer/s email?'
    },
    {
        type: 'input',
        name: 'engGitHub',
        message: 'What is the engineer/s github username?'
    }
]
const internQs = [
    {
        type: 'input',
        name: 'internName',
        message: 'What is the intern/s name?'
    },
    {
        type: 'input',
        name: 'internID',
        messgae: 'What is the intern/s employee ID?'
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is the intern/s email?'
    },
    {
        type: 'input',
        name: 'internGitHub',
        message: 'What is the intern/s github username?'
    }
]

function cont()
{
    inquirer 
        .prompt(newMember)
        .then((list) => {
            if (`${list.choices}` == 'Engineer'){
                engineerQuests();
            } else if (`${list.choices}` == `Intern`) {
                internQuests();
            } else {
                writeToFile(input);
            }
        })
}

function engineerQuests(){
    inquirer
        .prompt(engineerQs)
        // .then(menu) //only add one .then
        .then((list) => {
            if (list.choices == 'Engineer'){
                engineerQuests();
            } else if (list.choices == `Intern`) {
                internQuests();
            } else {
                writeToFile(input);
            }
        });
    };

function internQuests(){
    inquirer
        .prompt(internQs)
        .then(menu)
        .then((list) => {
            if (`${list.choices}` == 'Engineer'){
                engineerQuests();
            } else if (`${list.choices}` == `Intern`) {
                internQuests();
            } else {
                writeToFile(input);
            }
        });
}



//Add where and what the file should be called
function writeToFile(input) {
    fs.writeFileSync(`team.html`, markdown(input))
}

// create a function for the start of the code
function init() {
    inquirer
    .prompt(start)
    .then(menu)
    .then((input, list) => {
        if (list.choices == 'Finished'){
          writeToFile(input);  
        } else {
            cont();
        }
    });
};

// Function call to initialize app
init();