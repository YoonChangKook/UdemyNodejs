const fs = require('fs')
const chalk = require('chalk')

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

module.exports = {
  readNote(title) {
    const notes = loadNotes()
    const note = notes.find(note => note.title === title)

    if (note) {
      console.log(chalk.blue(note.title))
      console.log(note.body)
    } else {
      console.log(chalk.red.inverse('The note doesn\'t exist'))
    }
  },
  listNotes() {
    console.log(chalk.blue.bold("Your notes"))

    const notes = loadNotes()
    notes.forEach(note => console.log(note.title))
  },
  addNote(title, body) {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)
  
    if (!duplicateNote) {
      notes.push({
        title: title,
        body: body,
      })
  
      saveNotes(notes)
      console.log(chalk.green.inverse('New note added'))
    } else {
      console.log(chalk.red.inverse('Note title taken!'))
    }
  },
  removeNote(title) {
    const notes = loadNotes()
    const removed = notes.filter(note => note.title !== title)
  
    if (removed.length !== notes.length) {
      saveNotes(removed)
      console.log(chalk.green.inverse('The note is removed'))
    } else {
      console.log(chalk.red.inverse(`Title: ${title} doesn't exist`))
    }
  },
}