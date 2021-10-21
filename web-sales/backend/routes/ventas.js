/**
 * @description : El archivo define las Rutas para el modulo de ventas.
 * @author      : Grupo 3 Desarrollador de solucion de reto Mision TIC 2022
 * @copyright   : aflealf@unal.edu.co
 * 
 */
 const express = require('express');
 const router = express.Router();
 
 const VentaController = require("../controllers/ventas");
 
 /** 
  * Rutas Get
  */
 router.get("", VentaController.getVentas);
 router.get("/show/:id", VentaController.getVentaId);
 router.get("/create", VentaController.create);
 router.get("/edit/:id", VentaController.edit);
 
 /** 
  * Rutas Post
  */
 router.post("/update/:id", VentaController.update);
 router.delete("/:id", VentaController.delete);
 router.post("/", VentaController.save);
 router.get("/:name", VentaController.findProduct);
 
 module.exports = router;