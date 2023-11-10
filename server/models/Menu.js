const {Schema, model} = require('mongoose');

const MenuSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    logo: { type: String, require: true },
    category: {type: String, require: true, unique: true}
});

module.exports = model('Menu', MenuSchema);
