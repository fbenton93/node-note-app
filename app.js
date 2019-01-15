const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');


const command = process.argv[2];
console.log(process.argv);

if(command === 'add') {
  console.log('Adding new note');
} else if(command === 'list') {
  console.log('Listing all notes');
} else if(command === 'read') {
  console.log('Fetching note');
} else if(command === 'remove') {
  console.log('Removing');
} else {
  console.log('Command not recognized');
}
