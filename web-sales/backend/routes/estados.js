/**
 *
@description : El archivo define las Rutas para el modulo de productos.
 * @author      : Grupo 3 Desarrollador de solucion de reto Mision TIC 2022
 * @copyright   : erikdhv@gmail.com
 * 
 */
const express = require('express');
const router = express.Router();

const EstadosController = require("../controllers/estados");

/** 
 * Rutas Get
 */
router.get("", EstadosController.getEstados);
// router.get("/show/:id", EstadosController.getProductId);
// router.get("/create", EstadosController.create);
// router.get("/edit/:id", EstadosController.edit);

// /** 
//  * Rutas Post
//  */
// router.post("/update/:id", EstadosController.update);
// router.post("/delete/:id", EstadosController.delete);
// router.post("/", EstadosController.save);

module.exports = router;