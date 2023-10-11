const {Schema, model} = require('mongoose');

const Order = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    name: { type: String, require: true},
    openingTime: {type: String, require: true},
    amount: {type: String, require: true}
})

module.exports = model("Order", Order);