var mongoose = require('mongoose');

const roles = mongoose.Schema({
    rol: {
        type: String,
        required: [true, 'El valor es requerido'],
        maxlength: [100, 'El rol debe tener maximo 100 caracteres']
    },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Roles", roles);