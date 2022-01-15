const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
    {
        id: {type: Number, required: true, unique: true},
        title: {type: String, required: true, unique: true},
        backgroundColor: {type: String, required: true},
        descriptionTitleOne: {type: String, required: true},
        descriptionOne: {type: String, required: true},
        descriptionTitleTwo: {type: String, required: false},
        descriptionTwo: {type: String, required: false},
        descriptionImgOne: {type: String, required: true},
        descriptionImgTwo: {type: String, required: false},
        iconOne: {type: String, required: false},
        iconTwo: {type: String, required: false},
        iconThree: {type: String, required: false},
        iconFour: {type: String, required: false}
    },
    {timestamps: true}
)

module.exports = mongoose.model('Projects', ProjectSchema);