import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import React, { useState, useEffect} from "react";

import Home from "./home/pages/Home";
import Ventas from "./ventas/pages/Ventas";
import Header from "./shared/Header";
import CrearProducto from "./productos/pages/CrearProducto";
import BuscarProducto from "./buscar/pages/BuscarProducto";

import ListadoUsuarios from "./usuarios/pages/ListadoUsuarios";
import api from "./api";

function App() {
    const [logged, setLogged] = useState(false);
    const [ventas, setVentas] = useState([]);
    const [usuarios, setUsuarios] = useState([]);

  
    useEffect(() => {
        const fetchData = async () => {
          const response = await api.usuarios.list();
          setUsuarios(response);
        };

        fetchData();

      

    }, []);
    useEffect(() => {
        const token = localStorage.getItem("token");
    
        if (token === null) {
          setLogged(false);
        } else {
          setLogged(true);
        }
      }, []);
   
   

    return ( 
    <Router>
        <Header 
        isLoggedIn = { logged }
        login = { setLogged }
        cantVentas = {
            ventas.reduce((total, producto) => total + producto.cantidad,
                0
            )
        }
        />  
        <Switch>
         
        <Route path = "/ListadoUsuarios" exact >
                <ListadoUsuarios
                usuarios = {usuarios}
                setUsuarios =  {setUsuarios}
             />
                
            </Route> 
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
            </Route> 
            <Redirect to = "/"/>
        </Switch>  
    </Router>
    );
}

export default App;