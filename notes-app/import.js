const notes = require('./note')

const yargs = require('yargs')
// console.log(yargs.argv)

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
    handler(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    description: 'removing new note!',
    builder: {
        title:{
            description: 'Notes title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    description: 'list your notes',
    handler(){
        notes.listNotes()
    }  
})


yargs.command({
    command: 'read',
    description: 'Read a note',
    builder: {
        title:{
            description: 'Notes title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse()