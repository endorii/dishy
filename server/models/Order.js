const {Schema, model} = require('mongoose');

const OrderItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    src: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: false
    },
    ingredients: {
        type: [String],
        required: false
    }
});

const GuestSchema = new Schema({
    id: {
        type: Number
    },
    guest: [OrderItemSchema]
});

const OrderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    openingTime: {
        type: String,
        required: true
    },
    tableNumber: {
        type: Number
    },
    order: [GuestSchema]
});

module.exports = model('Order', OrderSchema);