const {Schema, model} = require('mongoose');

const Employee = new Schema({
    name: {type: String, require: true},
    login: {type: String, require: true, unique: true},
    pin: {type: Number, require: true, unique: true},
    position: {type: String, require: true}
})

module.exports = model("Employee", Employee);