// File System
// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'This is first node js script. ')
// fs.appendFileSync('notes.txt', 'I want to become node js programmer.')

// Import own file
// const FullName = require('./utiles.js')
// console.log(FullName())

// Validator package
// const validator = require('./node_modules/validator')
// console.log(validator.isEmail('anchinta@example.com'))
// console.log(validator.isEmail('anchinta'))

// console.log(validator.isURL('http://www.google.com'))
// console.log(validator.isURL('https:www.google.com'))

// .Chalk
// const Chalk = require('./node_modules/chalk')
// console.log(Chalk.green('Success'))
// console.log(Chalk.black.bgYellow.bold('Success'))
// console.log(Chalk.green.inverse.bold('Success'))

// nodemon
// install pkg: npm i nodemon@1.18.5 -g
// cmd : nodemon file.js

// console.log(Chalk.red.inverse.bold('Error'))
// console.log(Chalk.blue.inverse.bold('Info'))

const yargs = require('yargs')
// console.log(yargs.argv)

yargs.command({
    command: 'add',
    description: 'Adding new note!',
    handler: function(){
        console.log('added new note')
    }
})

yargs.command({
    command: 'remove',
    description: 'Removing new note!',
    handler: function(){
        console.log('removed new note')
    }
})

yargs.command({
    command: 'read',
    description: 'Read a note',
    handler: function(){
        console.log('reading a note')
    }
})

yargs.command({
    command: 'list',
    description: 'list your notes',
    handler: function(){
        console.log('listing out all notes')
    }
})

yargs.command({
    command: 'add',
    description: 'Adding new note!',
    builder: {
        title:{
            description: 'Notes title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('added second ' + argv.title)
    }
})

yargs.command({
    command: 'add',
    description: 'Adding new note!',
    builder: {
        title:{
            description: 'Notes title',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'Body section',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title ' + argv.title)
        console.log('Body ' + argv.body)
    }
})

yargs.parse()
