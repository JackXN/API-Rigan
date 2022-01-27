const Network = require('../models/Network');

const router = require('express').Router();


// Create new network entry
router.post('/', async (req,res) => {
    const newNetwork = new Network(req.body);
    try {
        const savedNetwork = await newNetwork.save();
        res.status(200).json(savedNetwork)
    } catch(err) {
        console.log(err)
    }
});


module.exports = router;