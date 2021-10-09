var mongoose = require('mongoose');

const roles = mongoose.Schema({
    rol: { type: String, required: true, max: 100 },

    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Roles", roles);