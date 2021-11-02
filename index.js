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

// create a function for the start of the code