const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//Customize yargs version
yargs.version('1.1.0')

//Create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.addNote(argv.title, argv.body)
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removing the note',
    builder:{
        title:{
            describe: 'Title of removed Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.removeNote(argv.title)
})

//Creating the list command
yargs.command({
    command: 'list',
    describe: 'Listing your notes',
    
    handler: () => {notes.listNote()} 
})

// Creating the read command
yargs.command({
    command: 'read',
    describe: 'Reading your note',
    builder: {
        title:{
            describe: 'Title and body of selected note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.readNote(argv.title)
})

//add, remove, read, list

yargs.parse()