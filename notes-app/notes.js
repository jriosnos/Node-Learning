const fs = require('fs')
const chalk = require('chalk')

const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note)=> note.title === title )

    debugger

    if(!duplicateNote){
        notes.push({
        title: title,
        body: body
        })

        saveNotes(notes)
        console.log(chalk.green('New Note Added'))
    } else {
        console.log(chalk.red('Note Title Taken!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    notesKept = notes.filter((kept) => kept.title != title)

    if(notesKept.length < notes.length){
        saveNotes(notesKept)
        console.log(chalk.green('Removed note from array!'))
    } else{
        console.log(chalk.red('Title did not match any titles in notes!'))
    }
}

const listNote = () => {
    const notes = loadNotes()

    console.log(chalk.green('Your notes:'))
    
    notes.forEach((note)=>{
        console.log(note.title) 
    })
}

const readNote = (title) =>{
    const notes = loadNotes()

    const findingNote = notes.find((note)=> note.title === title)

    if(findingNote){
        console.log(chalk.inverse(title))
        console.log(findingNote.body)
    }
    else{console.log(chalk.red('Unable to find that note'))}
}



module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}
