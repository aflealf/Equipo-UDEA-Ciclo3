/**
 *
@description : El archivo define las Rutas para el modulo de productos.
 * @author      : Grupo 3 Desarrollador de solucion de reto Mision TIC 2022
 * @copyright   : erikdhv@gmail.com
 * 
 */
const express = require('express');
const router = express.Router();

const RolesController = require("../controllers/roles");

/** 
 * Rutas Get
 */
router.get("", RolesController.getRoles);
// router.get("/show/:id", RolesController.getProductId);
// router.get("/create", RolesController.create);
// router.get("/edit/:id", RolesController.edit);

// /** 
//  * Rutas Post
//  */
// router.post("/update/:id", RolesController.update);
// router.post("/delete/:id", RolesController.delete);
// router.post("/", RolesController.save);

module.exports = router;