const {Schema, model} = require('mongoose');

const CurrentEmployee = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    name: {type: String, require: true},
    login: {type: String, require: true, unique: true},
    pin: {type: String, require: true, unique: true},
    position: {type: String, require: true}
})

module.exports = model("CurrentEmployee", CurrentEmployee);