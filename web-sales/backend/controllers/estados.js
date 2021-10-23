/**
 * @description : Controlador encargado de gestionar los datos del producto.
 * @author      : Grupo 3 Desarrollador de solucion de reto Mision TIC 2022
 * @copyright   : erikdhv@gmail.com
 *  
 * @summary     : Falta implementar validaciones para que quede un poco mas descente
 */

 var mongoose = require('mongoose');
 var Estados = require("../models/estados");
 
 /**
  * 
  * @description: Esta funcion Lista todos los productos que se encuentren almacenados en la Base de datos
  * 
  */
 exports.getEstados = (req, res) => {
    Estados.find().then((estadoResult) => {
         res.status(200).json(estadoResult);
     });
 };
 