import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import React, { useState } from "react";

import Home from "./home/pages/Home";
import Ventas from "./ventas/pages/Ventas";
import Header from "./shared/Header";
import CrearProducto from "./productos/pages/CrearProducto";
import BuscarProducto from "./buscar/pages/BuscarProducto";

function App() {
    const [logged, setLogged] = useState(false);
    const [ventas, setVentas] = useState([]);
    // const [productos, setProductos] = useState([products);

    return ( 
    <Router>
        <Header isLoggedIn = { logged }
        login = { setLogged }
        cantVentas = {
            ventas.reduce((total, producto) => total + producto.cantidad,
                0
            )
        }
        />  
        <Switch>
            <Route path = "/BuscarProducto" exact >
                <BuscarProducto/>
            </Route> 
            <Route path = "/CrearProducto" exact>
                <CrearProducto/>
            </Route> 
            <Route path = "/" exact>
                <Home isLoggedIn = { logged }
                ventas = { ventas }
                setVentas = { setVentas }
                /> 
            </Route>

        <Route path = "/Ventas" exact>
        <Ventas ventas = { ventas }
        setVentas = { setVentas }
        />
        </Route> <Redirect to = "/"/>
        </Switch>  </Router>
    );
}

export default App;