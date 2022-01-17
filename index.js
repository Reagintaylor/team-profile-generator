const inquirer = require('inquirer')
const fs = require('fs')
// do I need this?
// const path = require('path')
const markdown = require('./src/markdown')
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")

const start = [
    {
        type: 'input',
        name: 'name',
        message: 'Hello Team Manager, what is your name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: `Great! 
         What is your email?`
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter your office number.'
    },
]
const menu = [
    {
        type: 'confirm',
        name: 'newMemb',
        message: 'Would you like to add a new member or finish up?',
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
        name: 'name',
        message: 'What is the engineer/s name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the engineer/s employee ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engineer/s email?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineer/s github username?'
    }
]
const internQs = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the intern/s name?'
    },
    {
        type: 'input',
        name: 'id',
        messgae: 'What is the intern/s employee ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the intern/s email?'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is the intern/s github username?'
    }
]

function cont()
{
    inquirer 
        .prompt(menu)
        .then((input) => {
            if (input.newMemb){
                moreMembs();
            } else  {
                fs.appendFileSync(`./dist/team.html`, markdown.endingMarkdown(), (err) => {
                    if (err) {
                        console.log(err)
                    };
                })
            }
        })
}

function moreMembs(){
    inquirer
        .prompt(newMember)
        .then((input) => {
            if (input.membList === 'Engineer'){
                engineerQuests();
            } else if(input.membList === 'Intern'){
                internQuests();
            } 
        })
}

function engineerQuests(){
    inquirer
        .prompt(engineerQs)
        .then((input) => {

            const engineerEntry =  new Engineer(input.name, input.id, input.email, input.github)
            fs.appendFileSync(`./dist/team.html`, markdown.engineerMarkdown(engineerEntry), (err) => {
                if (err) {
                    console.log(err)
                };
            })
            cont()
        });
    };

function internQuests(){
    inquirer
        .prompt(internQs)
        .then((input) => {
            const internEntry =  new Intern (input.name, input.id, input.email, input.school)
            fs.appendFileSync(`./dist/team.html`, markdown.internMarkdown(internEntry), (err) => {
                if (err) {
                    console.log(err)
                };
            })
            cont()
        });
};



//Add where and what the file should be called
function writeToFile(input) {
    fs.writeFileSync(`./dist/team.html`, markdown.beginningMarkdown(input), (err) => {
        if(err){
            console.log(err)
        };
        return
    })
}

// create a function for the start of the code
function init() {
    inquirer
    .prompt(start)
    .then((input) => {
        const managerRes = new Manager(input.name, input.id, input.email, input.officeNumber)
        // writing the content to the file
        writeToFile(managerRes);
        // fucntion to see if they want more members or to be finished
        cont();
    })  
};

// Function call to initialize app
init();