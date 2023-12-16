const express = require("express")
const router = express.Router();
const usuariosModel = require("../models/usuarios")

/**
 * @swagger
 * components:
 *  schemas:
 *      Usuarios:
 *            type: object
 *            properties:
 *              nombre:
 *                    type: string
 *                    description: nombre de usuario
 *   
 *              apellido:
 *                    type: string
 *                    description: apellido de usuario
 *    
 *              correo:
 *                    type: string
 *                    description: correo del usuario
 *    
 *              password:
 *                    type: string
 *                    description: password del usuario
 *    
 *              celular: 
 *                    type: integer
 *                    description: nro de celular
 *                
 *            required:
 *                - nombre
 *                - apellido
 *                - correo
 *                - password
 *                - celular
 *            example:
 *                nombre: leos
 *                apellido: Perez
 *                correo: algo@gmail.com
 *                password: algosada
 *                celular: 999999999
 */
/**
 * @swagger
 * /api/usuarios:
 *  get:
 *     summary: lista de usuarios
 *     tags: [usuarios]
 *     responses:
 *          200:
 *              description: usuarios mostrados correctamente         
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                      items:
 *                          $ref: '#components/schemas/Usuarios'
 *  
 *  
 *  
 *  post:
 *     summary: Crear un nuevo usuario
 *     tags: [usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Usuarios'
 *     responses:
 *      201:
 *        description: Usuario creado correctamente
 *        content:
 *          application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuarios'
 */  

/**
 * @swagger
 * /api/usuarios/{productoId}:
 *  put:
 *     summary: Actualizar un usuario existente
 *     tags: [usuarios]
 *     parameters:
 *       - in: path
 *         name: productoId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Usuarios'
 *     responses:
 *      200:
 *        description: Usuario actualizado correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Usuarios'
 * 
 * 
 *  delete:
 *     summary: Eliminar un usuario existente
 *     tags: [usuarios]
 *     parameters:
 *       - in: path
 *         name: productoId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario eliminado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuarios'
 *       404:
 *          description: Usuario no encontrado
 *          content:
 *           application/json:
 *             example:
 *               mensaje: Usuario no encontrado   
 *  get:
 *     summary: Obtner un usuario existente por id
 *     tags: [usuarios]
 *     parameters:
 *       - in: path
 *         name: productoId
 *         required: true
 *         schema:
 *           type: string
 *     
 *     responses:
 *      200:
 *        description: Usuario encontrado correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Usuarios'
 *      404:
 *        description: Usuario no encontrado
 *        content:
 *          application/json:
 *            example:
 *              mensaje: Usuario no encontrado
 */ 
/**

 * @swagger
 * paths:
 *   /api/usuarios/{correo}:
 *     get:
 *       summary: Obtener un usuario existente por correo
 *       tags: [usuarios]
 *       parameters:
 *         - in: path
 *           name: correo
 *           required: true
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: Usuario encontrado correctamente
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Usuarios'
 *         '404':
 *           description: Usuario no encontrado
 *           content:
 *             application/json:
 *               example:
 *                 mensaje: Usuario no encontrado
 */

//get
router.get("/usuarios", (req, res) => { 
    usuariosModel.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
});


//get
router.get("/usuarios/:correo", (req, res) => { 
    const { correo } = req.params;
    usuariosModel.findOne({ correo: correo })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});
//get con productoproductoId
router.get("/usuarios/:productoId", (req, res) => { 
    const {productoId} = req.params;
    usuariosModel.findById(productoId)
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
});

//post
router.post("/usuarios", (req, res) => { 
    const venta = usuariosModel(req.body);
    venta.save()
    .then((data) => res.json({mensaje: "Objeto guardado correctamente"}))
    .catch((error) => res.json({mensaje: error}))
});

//put
router.put("/usuarios/:productoId", (req, res) => { 
    const {productoId} = req.params;
    const {nombre, apellido, correo, password, celular} = req.body;
    usuariosModel.updateOne({_id:productoId}, {$set:{nombre, apellido, correo, password, celular}})
    .then((data) => res.json({mensaje: "Objeto guardado correctamente"}))
    .catch((error) => res.json({mensaje: error}))
});



//delete
router.delete("/usuarios/:productoId", (req, res) => { 
    const {productoId} = req.params;
    usuariosModel.deleteOne({_id:productoId})
    .then((data) => res.json({mensaje: "Objeto eliminado"}))
    .catch((error) => res.json({mensaje: error}))
});


module.exports = router;