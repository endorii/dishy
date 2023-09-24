const {Schema, model} = require('mongoose')

const Position = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    name: {type: String, require: true},
    permissions: {type: String, require: true}
})

module.exports = model("Position", Position);