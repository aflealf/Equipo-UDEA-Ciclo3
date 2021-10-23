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


router.post("", RolesController.create);
router.get("", RolesController.getRoles);


module.exports = router;