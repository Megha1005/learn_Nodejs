const fs=require('fs')
const chalk = require('chalk')

const getnotes = () => {
    return 'Your notes ... '
}

const addNote = (title,body) => {
    const notes= loadNotes()
    // const duplicatenotes = notes.filter(function(note){
    //         return note.title===title
    // })
    //const duplicatenotes = notes.filter((note) => note.title === title )
    const duplicateNote = notes.find((note) => notes.title === title)

    debugger 
    //if(duplicatenotes.length === 0) {
        //if(duplicateNote === undefined){
    if(!duplicateNote){
        notes.push({
            title:title ,
            body:body
        })
        savenotes(notes)
        console.log(chalk.green.inverse("New note added"))
    }
    else{
        console.log(chalk.red.inverse("Note title taken"))
    }
}

const removeNote =function(title){
    const notes = loadNotes()
    // const matchnote = notes.filter(function(note){        
    //         return note.title !== title        
    // })    
    const matchnote = notes.filter((note) =>  note.title !== title ) 

    if(notes.length > matchnote.length){
        console.log(chalk.green.inverse('Note removed'))
    } else {
        console.log(chalk.red.inverse('No note found'))
    }

    savenotes(matchnote)
}

const listNotes = () => {    
    const notes =loadNotes() 
    console.log(chalk.green.inverse('Your Notes'))
    notes.forEach((note) => {
        console.log(note.title)
    })

}

const ReadNotes = (title) => {
    const notes = loadNotes()    
    const findtitle = notes.find((note) => note.title === title)
    if (findtitle){
        console.log(chalk.inverse.grey(findtitle.title))
        console.log(findtitle.body)
    } else {
        console.log(chalk.red.inverse('No notes to read with this title')) 
    }

}

const savenotes = (notes) => {
    const dataJson=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}
const loadNotes= () => {

    try{
        const databuffer= fs.readFileSync('notes.json')
        const dataJSON= databuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
            return []
    }
}
module.exports = {
    getnotes:getnotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    ReadNotes:ReadNotes
}