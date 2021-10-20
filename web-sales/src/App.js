//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import React, { useState } from "react";

import Home from "./home/pages/Home";
import Carrito from "./carrito/pages/Carrito";
import Header from "./shared/Header";
import CrearProducto from "./productos/pages/CrearProducto";
import Gestion from "./productos/pages/Gestion";
import api from "./api";
import { useEffect } from "react";
import EditarProducto from "./productos/pages/EditarProducto";
import ListadoUsuarios from "./usuarios/pages/ListadoUsuarios";
import EditarUsuario from "./usuarios/pages/EditarUsuario";
import CrearVenta from "./ventas/pages/CrearVenta";
import EditarVenta from "./ventas/pages/EditarVenta";
import GestionVentas from "./ventas/pages/GestionVentas";

function App() {
  const [logged, setLogged] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.products.list();
      //console.log(response);
      setProductos(response);
    };

    const getUsers = async() => {
      console.log("getUsers App.js");
      const responseUsers = await api.users.list();
      console.log("responseUsers = ", responseUsers);
      setUsuarios(responseUsers);
    };

    const getVentas = async() => {
      console.log("getVentas App.js");
      const responseVentas = await api.ventas.list();
      console.log("responseVentas = ", responseVentas);
      setVentas(responseVentas);
    };


    fetchData();
    getUsers();
    getVentas();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      setLogged(false);
    } else {
      setLogged(true);
    }
  }, []);

    /*useEffect(() => {
        
        const getEstados = async() => {
            await fetch("http://localhost:3002/api/estados")
                .then(res => res.json())
                .then(res => setEstados(res))

        };

        const getRoles = async() => {
            await fetch("http://localhost:3002/api/roles")
                .then(res => res.json())
                .then(res => setRoles(res))

        };

        const getProducts = async() => {
            await fetch("http://localhost:3002/api/products")
                .then(res => res.json())
                .then(res => setProductos(res))

        };

        setProductos();
        getRoles();
        getEstados();
        getUsers();

    }, []);*/

    return (
        <Router>
          <Header
            isLoggedIn={logged}
            login={setLogged}
            cantCarrito={carrito.reduce(
            (total, producto) => total + producto.cantidad,
            0
            )}
            />
          <Switch>
            <Route path="/" exact>
              <Home
                isLoggedIn={logged}
                carrito={carrito}
                setCarrito={setCarrito}
                productos={productos}
              />
            </Route>
            <Route path="/Carrito" exact>
              <Carrito carrito={carrito} setCarrito={setCarrito} />
            </Route>
            <Route path="/CrearProducto" exact>
              <CrearProducto productos={productos} setProductos={setProductos} isLoggedIn={logged}
                carrito={carrito}
                setCarrito={setCarrito} />
            </Route>
            <Route path="/Gestion" exact>
              <Gestion productos={productos} setProductos={setProductos} />
            </Route>
            <Route path="/Gestion/Edit/:productId" exact>
              <EditarProducto productos={productos} setProductos={setProductos} />
            </Route>
            <Route path="/ListadoUsuarios" exact>
              <ListadoUsuarios usuarios={usuarios} setUsuarios={setUsuarios} />
            </Route>
            <Route path="/EditarUsuario" exact>
              <EditarUsuario usuarios={usuarios} setUsuarios={setUsuarios} />
            </Route>
            <Route path="/CrearVenta" exact>
              <CrearVenta ventas={ventas} setVentas={setVentas} />
            </Route>
            <Route path="/GestionVentas" exact>
              <GestionVentas ventas={ventas} setVentas={setVentas} />
            </Route>
            <Route path="/GestionVentas/Edit/:productId" exact>
              <EditarVenta ventas={ventas} setVentas={setVentas} />
            </Route>
     
            <Redirect to="/" />
          </Switch>
        </Router>
      );
    }

export default App;
