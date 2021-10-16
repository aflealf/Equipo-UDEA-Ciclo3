var mongoose = require('mongoose');

const estados = mongoose.Schema({
    estado: {
        type: String,
        enum: {
            values: ['Activo', 'Inactivo'],
            message: '{VALUE} es no permitido'
        },
        required: [true, 'El valor es requerido'],
        maxlength: [100, 'El estado debe tener maximo 100 caracteres']
    },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Estados", estados);