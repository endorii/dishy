const {Schema, model} = require('mongoose');

const MenuItem = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    name: {type: String, require: true, unique: true},
    value: {type: Number, require: true},
    time: {type: Number, require: true},
    amount: {type: Number, require: true},
    weight: {type: Number, require: true},
    toCategory: {type: String, require: true},
    ingredients: [{type: String}],
    src: {type: String, require: true},
});

module.exports = model('MenuItem', MenuItem);