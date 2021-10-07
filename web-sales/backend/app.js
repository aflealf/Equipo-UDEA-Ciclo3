var express = require('express');
var mongoose = require('mongoose');
var app = express();


const productsRoutes = require("./routes/products");

// Lineas necesarias para que interprete Json en la peticiones de entrada por metodos POST por ejemplo
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
    .connect(
        "mongodb+srv://misiontic2022:misiontic2022@clustermtic2022.gmvpu.mongodb.net/mtic2022?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Estamos conectados");
    });

//"mongodb+srv://misiontic2022:misiontic2022@clustermtic2022.gmvpu.mongodb.net/test?authSource=admin&replicaSet=atlas-xzm85s-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"

app.use("/api/products/", productsRoutes);

module.exports = app;