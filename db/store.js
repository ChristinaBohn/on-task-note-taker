const util = require('util');
const fs = require('fs');

const {v1: uuidv1} = require('uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

function read() {

    return readFileAsync( "db/db.json", "utf8" );

};

function write( note ) {

    return writeFileAsync( 'db/db.json', JSON.stringify( note ));

};

const getNotes = exports.getNotes = function() {

    return read().then(( notes ) => {

        let readNotes = JSON.parse( notes ) || [];
        return readNotes;

    });
};

exports.addNote = function( note ) {

    const { title, text } = note;

    if( !title || !text ) {
        throw new Error('Note must have a title and text!')
    };

    const newNote = { title, text, id: uuidv1() };

    return getNotes()
    .then(( notes ) => {
        notes.push( newNote )
        return write( notes );
    })
    .then(() => newNote );

};

exports.deleteNote = function( id ) {

    return getNotes()
    .then(( notes ) => notes.filter(( note ) => note.id !== id ))
    .then(( filteredNotes ) => write( filteredNotes ));

};