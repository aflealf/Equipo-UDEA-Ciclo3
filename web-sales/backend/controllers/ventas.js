   /**
    * @description : Controlador encargado de gestionar los datos de ventas.
    * @author      : Grupo 3 Desarrollador de solucion de reto Mision TIC 2022
    * @copyright   : aflealf@unal.edu.co
    *  
    */

    var mongoose = require('mongoose');
    var Venta = require("../models/ventas");
 
    /**
     * 
     * @description: Esta funcion Lista todos las ventas que se encuentren almacenados en la Base de datos
     * 
     */
    exports.getVentas = (req, res) => {
        Venta.find().then((ventaResult) => {
            console.log(ventaResult);
            res.status(200).json(ventaResult);
        });
    };
 
    /**
     * 
     * @description: Esta funcion Lista los productos que se identifique con el id enviado, se usa el id proporcionado por mongo
     * 
     */
    exports.getVentaId = (req, res) => {
        Venta.findById(req.params.id).then((VentaResult) => {
            if (VentaResult) {
                res.status(200).json(VentaResult);
            } else {
                res.status(404).json("Venta no encontrada");
            }
        });
    };
 
    /**
     * 
     * @description: Esta funcion direcciona a la interfaz de creacion de Ventas
     * 
     */
    exports.create = function(req, res) {
        res.render('../views/venta/create');
    };
 
    /**
     * 
     * @description: Esta funcion se encarga de almacenar en la tabla de la Base de Datos
     * 
     */
    exports.save = function(req, res) {
        const ventaAdd = new Venta({
            producto: req.body.producto,
            nombrevendedor: req.body.nombrevendedor,
            cantidad: req.body.cantidad,
            price: req.body.price,
        });
 
        // No se usa Promise, se usa un Callback
        ventaAdd.save(function(err) {
            if (err) {
                console.log('Error: ', err);
                res.status(400).json(err);
             } else {
                 console.log("Successfully created a sale. :)");
                 //res.render("../views/product/edit", { product: product });
                 res.status(201).json("Creada satisfactoriamente");
             }
         }, { new: true },
         function(err, venta) {
             if (err) {
                 console.log('Error: ', err);
                 res.render('../views/venta/edit', { venta: req.body });
                 res.status(400).json("Error al actualizar la información");
             }
 
             console.log(venta);
 
             res.redirect('/ventas/show/' + venta._id);
             res.status(201).json("Venta actualizado satisfactoriamente");
         });
 };
 
 /**
  * 
  * @description: Esta funcion se encarga de Eliminar en la tabla de la Base de Datos
  * 
  */
 exports.delete = function(req, res) {
     
     const id = req.params.id;
 
     Venta.deleteOne({ _id: id }).then((ventaResult) => {
             res.status(200).json("La venta se eliminó satisfactoriamente.");
         });
    };
 
    /**
     * 
     * @description: Esta funcion direcciona a la interfaz de edicion de Ventas
     * 
     */
    exports.edit = function(req, res) {
        Venta.findOne({ _id: req.params.id }).exec(function(err, venta) {
            if (err) { console.log("Error:", err); return; }
 
            res.render("../views/venta/edit", { venta: venta });
 
        });
    };
 
    /**
     * 
     * @description: Esta funcion se encarga de editar en la tabla de la Base de Datos
     * 
     */
    exports.update = function(req, res) {
        Venta.findByIdAndUpdate(req.params.id, {
                $set: {
                    producto: req.body.producto,
                    nombrevendedor: req.body.nombrevendedor,
                    cantidad: req.body.cantidad,
                    price: req.body.price,
                }
            }, { new: true },
            function(err, venta) {
                if (err) {
                    console.log('Error: ', err);
                    res.render('../views/venta/edit', { venta: req.body });
                    res.status(400).json("Error al actualizar la información");
                }
 
                console.log(venta);
 
                res.redirect('/ventas/show/' + venta._id);
                res.status(201).json("Venta actualizado satisfactoriamente");
            });

    };
    exports.findProduct = (req, res) => {
        const name = req.params.name;
        Venta.find({ title: { $regex: ".*" + name + ".*" } }).then((products) => {
          res.status(200).json(products);
        });
      };
 