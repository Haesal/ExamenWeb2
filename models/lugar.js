const mongoose = require('mongoose');

const LugarSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    lugar: {
        type: String,
        required: true
    },
    pais: {
        type: String,
        required: true
    },
    atractivo: {
        type: String,
        required: true
    },
    interes: Number
}, { collection: 'lugar' });

//Crear el modelo
module.exports = mongoose.model('lugar', LugarSchema);