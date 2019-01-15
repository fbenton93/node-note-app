// const obj = {
//   name: 'Forrest'
// }
//
// const stringObj = JSON.stringify(obj);
//
// console.log(JSON.parse(stringObj))
//
// const personString = '{"name": "Forrest"}'
// const personObj = JSON.parse(personString);
// console.log(personObj.name);

// JSON.parse vs. JSON.stringify

// console.log([1,2,3] instanceof Array)

// const fs = require('fs');
//
// const originalNote = {
//   title: 'Some Title',
//   body: 'Some Body'
// }
//
// const originalNoteString = JSON.stringify(originalNote);
//
// fs.writeFileSync('notes.json',originalNoteString);
//
// const noteString = fs.readFileSync('notes.json');
// const note = JSON.parse(noteString);
// console.log(typeof note);
// console.log(note.title);
