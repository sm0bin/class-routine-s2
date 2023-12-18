const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    batch: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
});

const Class = mongoose.model('Class', classSchema);
module.exports = Class;

// {
//     "day": "Sun",
//     "batch": "Batch 2",
//     "time": "11",
//     "duration": 1,
//     "state": "active",
//     "course": "ICE1222 A HH 232"
//   },