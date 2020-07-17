//create an express
const express = require('express');

//router method allows us to route back to app.js
const router = express.Router();

let dataFile = require('../data/data.json');

router.get('/', (req, res) => {

    let pageSpeakers = dataFile.speakers //dataFile is an object. Key is speakers.This will give us an array of objects

    let pagePhotos = []; //populate with all of the artwork

    pageSpeakers.forEach((speakerObj) => {

        pagePhotos = pagePhotos.concat(speakersObj.artwork) //concat merges two or more arrays. This method does not change the existing arrays, but instead returns a new array.

    }) //as it loops through it will grab an object

    res.render('index', {

        photos: pagePhotos
    });
})



//now we need to export the file (router.get) back to app.js
module.exports = router;