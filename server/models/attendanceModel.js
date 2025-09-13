const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        area: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const AttendanceModel = mongoose.model('attendance', AttendanceSchema);
module.exports = AttendanceModel;