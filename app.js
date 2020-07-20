const express = require('express');

const app = express();

app.set('view engine', 'ejs'); //references to directory named views

app.set('views', 'views');

app.use(express.static('public'));

app.use(require('./routes/index'));//reference of where we placed the index

app.use(require('./routes/speakers'));//reference of where we placed the speakers

app.listen(3000, () => {

    console.log(`listening on port 3000`); //a message that lets us know that we are listening
})