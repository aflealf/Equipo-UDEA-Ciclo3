var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
require('mongoose-type-url');

const producto = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'El titulo es requerido'],
        unique: [true, 'Ya existe un producto con ese titulo'],
        maxlength: [100, 'El titulo debe tener maximo 100 caracteres']
    },
    description: {
        type: String,
        required: [true, 'La descripción es requerido'],
        maxlength: [100, 'La descripción debe tener maximo 100 caracteres']
    },
    price: {
        type: Number,
        required: [true, 'El valor es requerido'],
        max: [9999999, 'El precio ingresado es incorrecto, {VALUE}'],
        default: 0
    },
    url: { type: String },
    categoria: {
        type: String,
        enum: {
            values: ['Calzado', 'Accesorios', 'Wearables', 'Desconocida'],
            message: '{VALUE} es no permitido'
        },
        required: [true, 'La categoria es requerida'],
        maxlength: [100, 'La categoria debe tener maximo 100 caracteres']
    },
    created_at: { type: Date, default: Date.now }
});

producto.plugin(uniqueValidator);

module.exports = mongoose.model("Producto", producto);