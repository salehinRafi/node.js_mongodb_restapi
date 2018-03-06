// import mongoose package
const mongoose = require('mongoose');

// create new JobSchema
const JobSchema = mongoose.Schema({

    // add title property
    // set title property to required
    title: {
        type: String,
        require: true
    },
    // add description property
    // set the type of description to String
    description: {
        type: String
    },
    // add duration property
    // set the type of duration to String
    duration: {
        type: String,
    }

});
// export the instance of the model by passing JobSchema
module.exports = mongoose.model('Job', JobSchema);