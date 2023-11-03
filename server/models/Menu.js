const {Schema, model} = require('mongoose');

const ItemSchema = new Schema({
    name: String,
    src: String,
    value: Number,
    time: Number,
    amount: Number,
    weight: Number,
    ingredients: [String]
});

const MenuSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    logo: String,
    title: String,
    items: [ItemSchema]
});

module.exports = model('Menu', MenuSchema);
