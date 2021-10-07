import React from "react";

import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

const HeaderButtons = ({ isLoggedIn, setLogin, cantVentas }) => {
    const login = () => {
        setLogin(true);
    };

    const logout = () => {
        setLogin(false);
    };

    if (isLoggedIn) {
        return (

            <React.Fragment >
            <Row >
            <Col >

            <Link to = "/RegistroUsuario" >
            <Button variant = "primary"
            className = "me-3" > Registrar Usuarios </Button>  
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
            <Button variant = "light"
            onClick = { login } >
            Login 
            </Button>  
            </div>
        );
    }
};

export default HeaderButtons;