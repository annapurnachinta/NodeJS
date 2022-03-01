const fs = require('fs')
const Chalk = require('./node_modules/chalk')

const getNotes = () => {
    return 'Your notes..'
}

const addNotes = (title,body) =>{
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function(note){
    //     return note.title === title
    // })

    // arrow fun
    const duplicateNotes = notes.filter((note) => note.title === title)


    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(Chalk.green.inverse.bold('Note Added!'))
    }else{
        console.log(Chalk.red.inverse.bold('Note already exist!'))
    }
}

const removeNotes = (title) =>{
    const notes = loadNotes()
    // const notesToKeep = notes.filter(function(note){
    //     return note.title !== title
    // })

      // arrow fun
      const notesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length > notesToKeep.length){
        console.log(Chalk.green.inverse.bold('Note removed!'))
        saveNotes(notesToKeep)
    }else{
        console.log(Chalk.red.inverse.bold('Not Found!'))
    }
}

const listNotes = () =>{
    const notes = loadNotes()
    
    console.log(Chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note)=> note.title === title)

    if (note) {
        console.log(Chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(Chalk.red.inverse('Note not found!')) 
    }
}


const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () =>{
    try { 
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}