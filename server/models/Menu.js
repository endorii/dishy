const {Schema, model} = require('mongoose');

const MenuSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    logo: String,
    title: String,
});


module.exports = model('Menu', MenuSchema);
