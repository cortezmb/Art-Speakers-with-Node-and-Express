const express = require('express');

const app = express();

const PORT = 3000;

app.set('view engine', 'ejs'); //references to directory named views

app.set('views', 'views');

app.use(express.static('public'));

app.use(require('./routes/index'));//reference of where we placed the index

app.use(require('./routes/speakers'));//reference of where we placed the speakers

app.listen(PORT, () => {

    console.log(`Listening on port ${PORT}`);
})