const {Schema, model} = require('mongoose');

const User = new Schema({
    email: {type: String, require: true, unique: true},
    name: {type: String, require: true,},
    phone: {type: Number, require: true, unique: true},
    company: {type: String, require: true,},
    password: {type: String, require: true}
})

module.exports = model("User", User);