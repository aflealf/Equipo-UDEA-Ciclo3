/**
 * @description : El archivo define las Rutas para el modulo de productos.
 * @author      : Grupo 3 Desarrollador de solucion de reto Mision TIC 2022
 * @copyright   : erikdhv@gmail.com
 * 
 */
const express = require('express');
const router = express.Router();

const ProductController = require("../controllers/products");

/** 
 * Rutas Get
 */
router.get("", ProductController.getProducts);
router.get("/show/:id", ProductController.getProductId);
router.get("/create", ProductController.create);
router.get("/edit/:id", ProductController.edit);

/** 
 * Rutas Post
 */
router.post("/update/:id", ProductController.update);
router.post("/delete/:id", ProductController.delete);
router.post("/", ProductController.save);

module.exports = router;