const util = require('util');
const fs = require('fs');

const {v1: uuidv1} = require('uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

function read() {
    return readFileAsync("db/db.json", "utf8")
};

function write(note) {
    return writeFileAsync('db/db.json', JSON.stringify(note));
}

const getNotes = exports.getNotes = function() {
    return read().then((notes) => {
        let readNotes = JSON.parse(notes) || [];
        return readNotes;
    })
}

