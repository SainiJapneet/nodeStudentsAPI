const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },
    grade: {
        required: true,
        type: String
    }
})
module.exports = mongoose.model("Students", studentSchema)