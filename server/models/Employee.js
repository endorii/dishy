const { Schema, model } = require('mongoose');

const Employee = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    name: { type: String, require: true },
    login: { type: String, require: true, unique: true },
    pin: { type: String, require: true, unique: true },
    position: { type: String, require: true },
    isOnline: { type: Boolean, default: false },
    workingTime: [{
        start: { type: String, required: true, default: "0" },
        end: { type: String, required: true, default: "0" },
        total: { type: String, default: "0" }
    }]
})

module.exports = model("Employee", Employee);