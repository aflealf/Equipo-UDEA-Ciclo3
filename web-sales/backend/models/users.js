var mongoose = require('mongoose');

const usuario = mongoose.Schema({
    email: { type: String, required: true, max: 300 },
    nombres: { type: String, required: true, max: 150 },
    apellidos: { type: String, required: true, max: 150 },
    telefono: { type: String, max: 50 },
    direccion: { type: String, max: 1000 },
    ciudad: { type: String, required: true, max: 100 },
    barrio: { type: String, required: true, max: 100 },
    codpostal: { type: String, max: 20 },
    rol: { type: String, required: true, max: 100 },
    estado: { type: String, required: true, max: 100 },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Usuario", usuario);