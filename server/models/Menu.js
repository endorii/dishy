const {Schema, model} = require('mongoose')

const MenuSubItem = new Schema({
    menuItem: { type: Schema.Types.ObjectId, ref: "MenuItem" },
    name: {type: String, require: true},
    src: {type: String, require: true},
    value: {type: Number, require: true},
    time: {type: Number, require: true},
    amount: {type: Number, require: true}
})

const MenuItem = new Schema({
    menu: { type: Schema.Types.ObjectId, ref: "Menu" },
    logo: {type: String, require: true},
    title: {type: String, require: true, unique: true},
    items: [MenuSubItem]
})

const Menu = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    categories: [MenuItem],
})

module.exports = model('Menu', Menu);