const mongoose = require('mongoose');
let shopSchema = new mongoose.Schema({
    areaName: {
        type: String,
        required: [true, 'Area name is required'],
    },
    shopName: {
        type: String,
        required: [true, 'Shop name is required'],
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
    },
}, {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    })
const ShopModel = new mongoose.model('Shop', shopSchema, 'shops')   //third argument is the name of collection

module.exports = ShopModel