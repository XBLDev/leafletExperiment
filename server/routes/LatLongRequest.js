
const express = require('express');

const router = new express.Router();

router.get('/LLRequest', (req, res) => {
    console.log('/LatLongRequest/LLRequest called');
    if(req.ip)
    {
        console.log(req.ip);        
    }
    if(req.connection.remoteAddress)
    {
        console.log(req.connection.remoteAddress);
    }
    if(req.headers['x-forwarded-for'])
    {
        console.log(req.headers['x-forwarded-for']);
    }

    res.status(200).json({
        message: 'GOT REQUEST',
    });  

})

module.exports = router;