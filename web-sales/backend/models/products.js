var mongoose = require('mongoose');

const producto = mongoose.Schema({
    title: { type: String, required: true, max: 100 },
    description: { type: String, required: true, max: 100 },
    price: { type: Number, required: true },
    url: { type: String, required: true, max: 1000 },
    categoria: { type: String, required: true, max: 100 },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Producto", producto);