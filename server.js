const express = require('express');

const app = express();
const PORT = 3001;

app.use( express.static('public') );

app.get('/notes', (req,res) => {

    // send the file 'notes.html'
    res.sendFile( path.join(__dirname, 'public/notes.html' ) );

});

app.get('/api/notes', (req,res) => {

    // send the file 'notes.html'
    res.json( /* send note data */ );

});

app.post('/api/notes', (req, res) => {

    // Create/persist data

    // Access the new note data from 'req'

    // Push it to my existing list of notes

    // Write my updated notes list to the 'db.json' file
    res.json( 'message' );

});

app.listen(PORT, () =>
    console.log('Exapmle app listening at http://localhost:${PORT}')
);