const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
const command = argv._[0];

function logNote(note) {
  console.log('---')
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}


if(command === 'add') {
  const note = notes.addNote(argv.title,argv.body)
  if(note) {
    console.log('Note created')
    logNote(note);
  } else {
    console.log('Note title taken')
  }
} else if(command === 'list') {
    const allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`)
    allNotes.forEach(note => logNote(note))
} else if(command === 'read') {
  const note = notes.getNote(argv.title)
  if(note) {
    console.log('Note found')
    logNote(note);
  } else {
    console.log('Note not found')
  }
} else if(command === 'remove') {
  const noteRemoved = notes.removeNote(argv.title);
  const message = noteRemoved ? 'Note was removed' : 'Failed';
  console.log(message);
} else {
  console.log('Command not recognized');
}
