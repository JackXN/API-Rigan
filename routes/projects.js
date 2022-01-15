const Projects = require('../models/Projects');
const Product = require('../models/Projects');

const router = require('express').Router();


//Test

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
router.delete('/:id', async (req,res) => {
    try {
        await Projects.findByIdAndDelete(req.params.id);
        res.status(200).json('project deleted');
    }catch(err) {
        console.log(err)
    }
});


// GET A SINGLE PROJECT
router.get('/find/:id', async (req,res) => {
    try{
const project = await Projects.findById(req.params.id);
res.status(200).json(project)
    }catch(err) {
        console.log(err)
    }
})

// Get ALL PROJECTS
router.get('/', async (req,res) => {
    const qNew = req.query.new;
    try {
        let projects;
        if(qNew) {
            projects = await Projects.find().sort({createdAt: -1}).limit(1);
        }else {
            projects = await Projects.find()
        }
        res.status(200).json(projects)
    } catch(err) {
        console.log(err)
    }
})



module.exports = router;