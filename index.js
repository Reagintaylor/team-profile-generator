const inquirer = require('inquirer')
const jest = require('jest')
const fs = require('fs')
const path = require('path')
const markdown = require('./generatemarkdown')

const start = [
    {
        type: 'input',
        name: '',
        message: ''
    },
    {
        type: '',
        name: '',
        message: 
    },
    {
        type: '',
        name: '',
        message: ''
    },
    {
        type: '',
        name: '',
        message: ''
    },
]

// create a function for the start of the code