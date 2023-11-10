const {Schema, model} = require('mongoose');

const MenuItem = new Schema({
    name: String,
    src: String,
    value: Number,
    time: Number,
    amount: Number,
    weight: Number,
    category: String,
    ingredients: [String]
});

module.exports = model('MenuItem', MenuItem);