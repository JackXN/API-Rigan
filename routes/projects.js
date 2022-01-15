const Projects = require('../models/Projects');
const Product = require('../models/Projects');

const router = require('express').Router();


// CREATE A NEW PROJECT
router.post('/', async (req,res) => {
    const newProject = new Projects(req.body);
    try {
        const savedProduct = await newProject.save();
        res.status(200).json(savedProduct);

    }catch (err) {
        console.log(err)
    }
})


// UPDATE A PROJECT

router.put('/:id', async (req,res) => {
    try {
        const updatedProject = await Projects.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new : true}
        );
        res.status(200).json(updatedProject)
    }catch(err) {
        console.log(err)
    }
});


// DELETE A PROJECT

router.delete('/:id,', async (req,res) => {
    try {
        const project = await Projects.findById(req.params.id);
        res.status(200).json(project);
    }catch(err) {
        console.log(err)
    }
});





module.exports = router;