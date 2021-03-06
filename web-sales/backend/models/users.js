const mongoose = require("mongoose");
require('mongoose-type-email');

const usuario = mongoose.Schema({
    email: [{ type: mongoose.SchemaTypes.Email }],
    nombres: {
        type: String,
        required: [true, 'El nombre es requerido'],
        maxlength: [150, 'Los nombres debe tener maximo 150 caracteres']
    },
    apellidos: {
        type: String,
        required: [true, 'El apellido es requerido'],
        maxlength: [150, 'Los apellidos debe tener maximo 150 caracteres']
    },
    telefono: {
        type: String,
        maxlength: [50, 'El telefono debe tener maximo 50 caracteres']
    },
    direccion: {
        type: String,
        maxlength: [1000, 'La dirección debe tener maximo 1000 caracteres']
    },
    ciudad: {
        type: String,
        required: [true, 'La ciudad es requerida'],
        maxlength: [100, 'La ciudad debe tener maximo 100 caracteres']
    },
    barrio: {
        type: String,
        required: [true, 'El barrio es requerido'],
        maxlength: [100, 'El barrio debe tener maximo 100 caracteres']
    },
    codpostal: {
        type: String,
        maxlength: [20, 'El código postal debe tener maximo 20 caracteres']
    },
    rol: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Roles",
        required: true
    },
    estado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Estados",
        required: true
    },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("users", usuario);
