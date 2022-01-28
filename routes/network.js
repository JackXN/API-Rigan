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


//Update network entry
router.put('/:id', async (req,res) => {
    try {
        const updatedNetwork = await Network.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        {new: true}
        );
        res.status(200).json('Entry updated successfully')
    }catch(err) {
        console.log(err)
    }
})


// Delete Network Entry
router.delete('/:id', async(req,res) => {
    try {
        await Network.findByIdAndDelete(req.params.id);
        res.status(200).json('Entry Deleted Successfully');
    }catch(err) {
        console.log(err)
    }
});



// Get a single entry
router.get('/find/:id', async (req,res) => {
    try {
        const network =  Network.findById(req.params.id);
        res.status(200).json(network)
    }catch(err) {
        console.log(err)
    }
});

router.get('/', async (req,res) => {
    const qNew = req.query.new;
    try {
        let network;
        if(qNew) {
            network = await Network.find().sort({createdAt: -1}).limit(1);
        }else {
            network = await Network.find()
        }
        res.status(200).json(network)
    }catch(err) {
        console.log(err)
    }
});

 

module.exports = router;