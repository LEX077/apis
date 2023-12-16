const express = require("express");
const router = express.Router();
const createProductModel = require("../models/productos");

router.get("/:tipo", async (req, res) => {
    const tipo = req.params.tipo.toLowerCase();

    try {
        const productoModel = createProductModel(tipo);
        const productos = await productoModel.find();
        res.json(productos);
    } catch (error) {
        console.error(`Error en la consulta de ${tipo}: ${error.message}`);
        res.status(500).json({ mensaje: "Error en la consulta de productos", error: error.message });
    }
});


router.post("/:tipo", async (req, res) => {
    const tipo = req.params.tipo.toLowerCase();

    try {
        const productoModel = createProductModel(tipo);
        const nuevoProducto = new productoModel(req.body);
        const productoGuardado = await nuevoProducto.save();
        res.status(201).json(productoGuardado);
    } catch (error) {
        console.error(`Error al guardar el ${tipo}: ${error.message}`);
        res.status(400).json({ mensaje: `Error al guardar el ${tipo}`, error: "Error en los datos proporcionados" });
    }
});


module.exports = router;