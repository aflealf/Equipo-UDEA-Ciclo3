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
import RegistroUsuario from "./usuarios/pages/RegistroUsuario";
import ListadoUsuarios from "./usuarios/pages/ListadoUsuarios";
import CallApi from "./api.js/env";
function App() {
    const [logged, setLogged] = useState(false);
    const [ventas, setVentas] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [estados, setEstados ] =  useState([]);
    const [roles, setRoles] =  useState([]);
  
    useEffect(() => {
      const getUsers = async () => {
         await fetch("http://localhost:3002/api/users")
          .then(res =>  res.json())
          .then(res => setUsuarios(res))
          
      };
      const getEstados = async () => {
        await fetch("http://localhost:3002/api/estados")
         .then(res =>  res.json())
         .then(res => setEstados(res))
         
     };
     const getRoles = async () => {
        await fetch("http://localhost:3002/api/roles")
         .then(res =>  res.json())
         .then(res => setRoles(res))
         
     };
     getRoles();
     getEstados();
      
      getUsers();

    }, []);

   
   

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
        <Route path = "/CallApi" exact >
                <CallApi/>
            </Route> 
        <Route path = "/ListadoUsuarios" exact >
                <ListadoUsuarios
                usuarios = {usuarios}
                roles= {roles}
                estados = {estados} />
                
            </Route> 

            <Route path = "/RegistroUsuario" exact >
                <RegistroUsuario/>
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