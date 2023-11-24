const {Schema, model} = require('mongoose');

const ContactText = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    content: {type: String, require: true},
    date: {type: String, require: true},
    from: {type: String, require: true}
})

module.exports = model("ContactText", ContactText);