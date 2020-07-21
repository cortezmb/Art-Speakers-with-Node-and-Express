const express = require('express');
const router = express.Router();

const dataFile = require('../data/data.json');

router.get('/speakers', (req, res) => {

    let pageSpeakers = dataFile.speakers;
    let pagePhotos = [];

    pageSpeakers.forEach((speakersObj) => {
        pagePhotos = pagePhotos.concat(speakersObj.artwork);
    })

    res.render('speakers', {
        artwork: pagePhotos,
        speakers: pageSpeakers,
        maxList: pageSpeakers,
        pageID: "Speaker chat"
    })
})

//speakers/1
router.get('/speakers/:speakersid', (req, res) => {

    let speakersArry = dataFile.speakers; 

    let photos =[];

    let speakers = [];

    speakersArry.forEach((speakersObj)=>{
        if(speakersObj.shortname == req.params.speakersid){
            photos = photos.concat(speakersObj.artwork),
            speakers.push(speakersObj) 
        }
    })

  
    res.render('speakers', {
        artwork: photos,
        speakers: speakers,
        maxList: speakersArry,
        pageTitle: `Roux Meetups -- ${speakers[0].name}`,
        pageID: "Speaker Detail"
        
    })
})


module.exports = router;