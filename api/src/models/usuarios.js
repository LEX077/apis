const mongoose = require("mongoose");


const usuariosModel = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    celular: {
        type:Number,
        required: true

    },
    
});


module.exports = mongoose.model("usuarios", usuariosModel);