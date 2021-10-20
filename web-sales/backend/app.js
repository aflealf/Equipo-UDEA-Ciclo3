
var express = require('express');
var mongoose = require('mongoose');
const cors = require("cors");
var app = express();
/**
 * Seccion de definición de Rutas
 */
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const estadosRoutes = require("./routes/estados");
const rolesRoutes = require("./routes/roles");
/** 
 * Lineas necesarias para que interprete Json en la peticiones de entrada por metodos POST por ejemplo
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: true, credentials: true }));
//app.use(cors());

/** 
 * Se realiza la conexion a la Base de Datos mongoDB
 */
mongoose
    .connect(
        "mongodb+srv://misiontic2022:misiontic2022@clustermtic2022.gmvpu.mongodb.net/mtic2022?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Estamos conectados.. port 3002");
    })
    .catch(error => console.error(error));

app.use("/api/products/", productsRoutes);
app.use("/api/users/", usersRoutes);
app.use("/api/estados/", estadosRoutes);
app.use("/api/roles/", rolesRoutes);

module.exports = app;