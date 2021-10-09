/**
 * @description : Controlador encargado de gestionar los datos de los usuarios.
 * @author      : Grupo 3 Desarrollador de solucion de reto Mision TIC 2022
 * @copyright   : erikdhv@gmail.com
 *  
 * @summary     : Falta implementar validaciones para que quede un poco mas descente
 */

var mongoose = require('mongoose');
var User = require("../models/users");

/**
 * 
 * @description: Esta funcion Lista todos los usuarios que se encuentren almacenados en la Base de datos
 * 
 */
exports.getUsers = (req, res) => {
    User.find().then((userResult) => {
        res.status(200).json(userResult);
    });
};

/**
 * 
 * @description: Esta funcion Lista los usuarios que se identifique con el id enviado, se usa el id proporcionado por mongoDB
 * 
 */
exports.getUserId = (req, res) => {
    User.findById(req.params.id).then((UserResult) => {
        if (UserResult) {
            res.status(200).json(UserResult);
        } else {
            res.status(404).json("Usuario no encontrado");
        }
    });
};

/**
 * 
 * @description: Esta funcion direcciona a la interfaz de creacion de usuarios
 * 
 */
exports.create = function(req, res) {
    res.render('../views/users/create');
};

/**
 * 
 * @description: Esta funcion se encarga de almacenar en la tabla de usuarios en Base de Datos
 * 
 */
exports.save = function(req, res) {
    const UserAdd = new({
        email: req.body.email,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        ciudad: req.body.ciudad,
        barrio: req.body.barrio,
        codpostal: req.body.codpostal,
        rol: req.body.rol,
        estado: req.body.estado
    });

    // No se usa Promise, se usa un Callback
    UserAdd.save(function(err) {
        if (err) {
            console.log('Error: ', err);
            res.status(400).json("Error al guardar la información");
        }

        console.log("Successfully created a user. :)");
        //res.render("../views/user/edit", { usuario: usuario });
        res.status("201").json("Creado satisfactoriamente");
    });
};

/**
 * 
 * @description: Esta funcion direcciona a la interfaz de edicion de usuarios
 * 
 */
exports.edit = function(req, res) {
    User.findOne({ _id: req.params.id }).exec(function(err, user) {
        if (err) { console.log("No existe", err); return; }

        res.render("../views/user/edit", { user: user });

    });
};

/**
 * 
 * @description: Esta funcion se encarga de editar los registros de la tabla usuarios en Base de Datos
 * 
 */
exports.update = function(req, res) {
    User.findByIdAndUpdate(req.params.id, {
            $set: {
                email: req.body.email,
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                telefono: req.body.telefono,
                direccion: req.body.direccion,
                ciudad: req.body.ciudad,
                barrio: req.body.barrio,
                codpostal: req.body.codpostal,
                rol: req.body.rol,
                estado: req.body.estado
            }
        }, { new: true },
        function(err, usuario) {
            if (err) {
                console.log('Error: ', err);
                res.render('../views/user/edit', { usuario: req.body });
                res.status(400).json("Error al actualizar la información");
            }

            console.log(usuario);

            res.redirect('/user/show/' + usuario._id);
            res.status(201).json("Poducto actualizado satisfactoriamente");
        });
};

/**
 * 
 * @description: Esta funcion se encarga de Eliminar de tabla usuarios de la Base de Datos
 * 
 */
exports.delete = function(req, res) {

    User.remove({ _id: req.params.id }, function(err) {
        if (err) { console.log('Error: ', err); return; }

        console.log("User deleted!");
        res.status(201).json("Usuario eliminado satisfactoriamente");
        res.redirect("/user");
    });

};