const express = require('express');

const router = express.Router();

let dataFile = require('../data/data.json');

//{speakers: [{artwork: []}, {}, {}]} //we want to loop through the artwork

router.get('/', (req, res) => {


    let pageSpeakers = dataFile.speakers; //this is an array from datafile object just pulling the speaker object

    let pagePhotos = [];  //populate with all of the artwork

    pageSpeakers.forEach((speakersObj) => {
      

        pagePhotos = pagePhotos.concat(speakersObj.artwork)
    })

    
    res.render('index', {
        
        photos: pagePhotos
    })
})

module.exports = router;