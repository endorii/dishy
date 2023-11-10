const {Schema, model} = require('mongoose');

const MenuItem = new Schema({
    name: {type: String, require: true, unique: true},
    src: {type: String, require: true,},
    value: {type: Number, require: true,},
    time: {type: Number, require: true,},
    amount: {type: Number, require: true,},
    weight: {type: Number, require: true,},
    toCategory: {type: String, require: true,},
    ingredients: [{type: String}]
});

module.exports = model('MenuItem', MenuItem);