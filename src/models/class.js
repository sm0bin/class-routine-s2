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
    status: {
        type: String,
        required: true
    },
    courseDetails: {
        type: Object,
        required: true,
        course: {
            type: String,
            required: true
        },
        section: {
            type: String,
            required: true
        },
        teacher: {
            type: String,
            required: true
        },
    }
});

const Class = mongoose.model('Class', classSchema);
module.exports = Class;

// {
//     "batch": "41-2023",
//     "day": "sunday",
//     "time": "09:00",
//     "duration": "1:00",
//     "status": "active",
//     "courseDetails": {
//       "course": "ICE1211",
//       "section": "A",
//       "teacher": "HH",
//       "room": "232"
//     }
//   },