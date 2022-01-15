const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, unique: true},
        backgroundColor: {type: String, required: true},
        descriptionTitleOne: {type: String, required: true},
        descriptionOne: {type: String, required: true},
        descriptionTitleTwo: {type: String, required: true},
        descriptionTwo: {type: String, required: true},
        descriptionImgOne: {type: String, required: true},
        descriptionImgTwo: {type: String, required: true},
        iconOne: {type: String, required: true},
        iconTwo: {type: String, required: true},
        iconThree: {type: String, required: false},
        iconFour: {type: String, required: false}
    },
    {timestamps: true}
)

module.exports = mongoose.model('Projects', ProjectSchema);