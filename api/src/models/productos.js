
const mongoose = require("mongoose");

// Define tu esquema
const productoSchema = new mongoose.Schema({
    tipo: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    talla: {
        type: String,
        required: true
    },
    thumbnailUrl: {
        type: String,
        required: true
    }
});


module.exports = function(collectionName) {
    
    return mongoose.model(collectionName, productoSchema);
};