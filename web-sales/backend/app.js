var express = require('express');
var mongoose = require('mongoose');
var app = express();

/**
 * Seccion de definición de Rutas
 */
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");

/** 
 * Lineas necesarias para que interprete Json en la peticiones de entrada por metodos POST por ejemplo
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/** 
 * Se realiza la conexion a la Base de Datos mongoDB
 */
mongoose
    .connect(
        "mongodb+srv://misiontic2022:misiontic2022@clustermtic2022.gmvpu.mongodb.net/mtic2022?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Estamos conectados");
    });

app.use("/api/products/", productsRoutes);
app.use("/api/users/", usersRoutes);

module.exports = app;