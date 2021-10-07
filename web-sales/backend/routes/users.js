/**
 * @description : El archivo define las Rutas para el modulo de usuarios.
 * @author      : Grupo 3 Desarrollador de solucion de reto Mision TIC 2022
 * @copyright   : erikdhv@gmail.com
 * 
 */
const express = require('express');
const router = express.Router();

const UserController = require("../controllers/users");

/** 
 * Rutas Get
 */
router.get("", UserController.getUsers);
router.get("/show/:id", UserController.getUserId);
router.get("/create", UserController.create);
router.get("/edit/:id", UserController.edit);

/** 
 * Rutas Post
 */
router.post("/update/:id", UserController.update);
router.post("/delete/:id", UserController.delete);
router.post("/", UserController.save);

module.exports = router;