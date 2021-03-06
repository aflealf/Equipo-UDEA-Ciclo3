   /**
    * @description : Controlador encargado de gestionar los datos del producto.
    * @author      : Grupo 3 Desarrollador de solucion de reto Mision TIC 2022
    * @copyright   : erikdhv@gmail.com
    *  
    * @summary     : Falta implementar validaciones para que quede un poco mas descente
    */

   var mongoose = require('mongoose');
   var Product = require("../models/products");

   /**
    * 
    * @description: Esta funcion Lista todos los productos que se encuentren almacenados en la Base de datos
    * 
    */
   exports.getProducts = (req, res) => {
       Product.find().then((productoResult) => {
           res.status(200).json(productoResult);
       });
   };

   /**
    * 
    * @description: Esta funcion Lista los productos que se identifique con el id enviado, se usa el id proporcionado por mongo
    * 
    */
   exports.getProductId = (req, res) => {
       Product.findById(req.params.id).then((productoResult) => {
           if (productoResult) {
               res.status(200).json(productoResult);
           } else {
               res.status(404).json("Producto no encontrado");
           }
       });
   };

   /**
    * 
    * @description: Esta funcion direcciona a la interfaz de creacion de productos
    * 
    */
   exports.create = function(req, res) {
       res.render('../views/product/create');
   };

   /**
    * 
    * @description: Esta funcion se encarga de almacenar en la tabla de la Base de Datos
    * 
    */
   exports.save = function(req, res) {
       const productAdd = new Product({
           title: req.body.title,
           description: req.body.description,
           price: req.body.price,
           url: req.body.url,
           categoria: req.body.categoria
       });

       // No se usa Promise, se usa un Callback
       productAdd.save(function(err) {
           if (err) {
               console.log('Error: ', err);
               res.status(400).json(err);
            } else {
                console.log("Successfully created a product. :)");
                //res.render("../views/product/edit", { product: product });
                res.status(201).json("Creado satisfactoriamente");
            }
        }, { new: true },
        function(err, product) {
            if (err) {
                console.log('Error: ', err);
                res.render('../views/product/edit', { product: req.body });
                res.status(400).json("Error al actualizar la informaci??n");
            }

            console.log(product);

            res.redirect('/products/show/' + product._id);
            res.status(201).json("Poducto actualizado satisfactoriamente");
        });
};

/**
 * 
 * @description: Esta funcion se encarga de Eliminar en la tabla de la Base de Datos
 * 
 */
exports.delete = function(req, res) {
    
    const id = req.params.id;

    Product.deleteOne({ _id: id }).then((productoResult) => {
            res.status(200).json("El producto se elimin?? satisfactoriamente.");
        });
   };

   /**
    * 
    * @description: Esta funcion direcciona a la interfaz de edicion de productos
    * 
    */
   exports.edit = function(req, res) {
       Product.findOne({ _id: req.params.id }).exec(function(err, product) {
           if (err) { console.log("Error:", err); return; }

           res.render("../views/product/edit", { product: product });

       });
   };

   /**
    * 
    * @description: Esta funcion se encarga de editar en la tabla de la Base de Datos
    * 
    */
   exports.update = function(req, res) {
       Product.findByIdAndUpdate(req.params.id, {
               $set: {
                   title: req.body.title,
                   description: req.body.description,
                   price: req.body.price,
                   url: req.body.url,
                   categoria: req.body.categoria
               }
           }, { new: true },
           function(err, product) {
               if (err) {
                   console.log('Error: ', err);
                   res.render('../views/product/edit', { product: req.body });
                   res.status(400).json("Error al actualizar la informaci??n");
               }

               console.log(product);

               res.redirect('/products/show/' + product._id);
               res.status(201).json("Poducto actualizado satisfactoriamente");
           });
   };

   exports.findProduct = (req, res) => {
    const name = req.params.name;
    Product.find({ title: { $regex: ".*" + name + ".*" } }).then((products) => {
      res.status(200).json(products);
    });
  };
