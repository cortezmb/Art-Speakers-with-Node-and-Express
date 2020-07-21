const express = require('express');
const router = express.Router();
const data = require('../data/data.json');

//this file displays feedback form from feedback.ejs
router.get('/feedback', (req, res) => {

    //make sure partials are getting da needed to render
    //maxlist: the array of speakers which is data.speakers(from header)
    //we need a pageTitle from head
    res.render('feedback.ejs', {

        maxList: data.speakers,
        pageTitle: "Feedback Form",
        pageID: "feedback",
        
    })
 
})



module.express = router;