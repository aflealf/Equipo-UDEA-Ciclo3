var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
require('mongoose-type-url');

const venta = mongoose.Schema({
    producto: {
        type: String,
        maxlength: [100, 'El producto debe tener maximo 100 caracteres']
    },
    nombrevendedor: {
        type: String,
        required: [true, 'El vendedor es requerido'],
        maxlength: [100, 'El nombre debe tener maximo 100 caracteres']
    },
    cantidad: {
        type: Number,
        required: [true, 'El valor es requerido'],
        max: [9999999, 'La cantidad ingresada es incorrecta, {VALUE}'],
        default: 0
    },
    price: {
        type: Number,
        required: [true, 'El valor es requerido'],
        max: [9999999, 'El precio ingresado es incorrecto, {VALUE}'],
        default: 0
    },
    created_at: { type: Date, default: Date.now }
});

venta.plugin(uniqueValidator);

module.exports = mongoose.model("Venta", venta);