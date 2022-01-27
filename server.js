const express = require('express');

const app = express();
const PORT = 3001;
const views = require('./routes/viewRoutes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes/noteRoutes');


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public') );


//Load apiRoutes before views
app.use('/api', apiRoutes)
app.use('/', views)


app.listen(PORT, () =>

    console.log( `Example app listening at http://localhost:${PORT}` )

);