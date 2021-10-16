import React from "react";

import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';

const HeaderButtons = ({ isLoggedIn, setLogin, cantVentas }) => {
    const login = (res) => {
        setLogin(true);
        localStorage.removeItem("token");
    };
  
    const loginError = (err) => {
      console.log(err);
    };
    const logout = () => {
        setLogin(false);
        localStorage.removeItem("token");
    };

    if (isLoggedIn) {
        return (

            <React.Fragment >
            <Row >
            <Col >

            <Link to = "/ListadoUsuarios" >
            <Button variant = "primary"
            className = "me-3" > Gestion Usuarios </Button>  
            </Link> 

            <Link to = "/BuscarProducto" >
            <Button variant = "primary"
            className = "me-3" > Buscar Producto </Button> 
            </Link></Col >
            </Row>

            <Link to = "/CrearProducto" >
            <Button variant = "primary"
            className = "me-3" > Generar Cambios </Button>  
            </Link> 
            <Link to = "/Ventas" >
            <Button variant = "primary"
            className = "me-3" > Ventas < Badge bg = "secondary" > { cantVentas } 
            </Badge>  
            </Button>  
            </Link>

            <Button variant = "outline-light"
            onClick = { logout }  >
            Logout </Button>
           
              </React.Fragment>
             
        );
    } else {
        return ( 
            <div >
                  <GoogleLogin
                    clientId="673123986671-5uj893dbjoghe04b3t66cimdk7or1qn0.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={login}
                    onFailure={loginError}
                    cookiePolicy={'single_host_origin'}
                />
        
            </div>
        );
    }
};

export default HeaderButtons;