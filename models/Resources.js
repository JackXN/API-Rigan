const mongoose = require('mongoose');


const ResourceScema = new mongoose.Schema(
    {
        designResources: {
            url: {type: String, required: true, unique: true},
            title: {type: String, required: true},
            description: {type: String, required: false},
        },
        codeResources: {
            url: {type: String, required: true},
            title: {type: String, required: true},
            description: {type: String, required: true},
        }
    }
)