var mongoose = require('mongoose');

const estados = mongoose.Schema({
    estado: { type: String, required: true, max: 100 },

    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Estados", estados);