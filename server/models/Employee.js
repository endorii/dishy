const { Schema, model } = require('mongoose');

const Employee = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    name: { type: String, require: true },
    login: { type: String, require: true, unique: true },
    pin: { type: String, require: true, unique: true },
    position: { type: String, require: true },
    isCurrent: { type: Boolean, default: false },
    totalWorkingTime: { type: String, default: "0" },
    workingTime: [{
        start: { type: Date, required: true },
        end: { type: Date, required: true }
    }]
})

module.exports = model("Employee", Employee);