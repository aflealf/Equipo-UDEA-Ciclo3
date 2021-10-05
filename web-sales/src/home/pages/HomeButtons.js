import ListaProductos from "../components/ListaProductos";
import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";

const HomeButtons = ({ isLoggedIn, setLogin, setVentas, ventas, cantVentas }) => {


    const login = () => {
        setLogin(true);
    };

    const logout = () => {
        setLogin(false);
    };

    if (isLoggedIn) {
        return ( <
            React.Fragment >
            <
            Link to = "/Ventas" >
            <
            Button variant = "primary"
            className = "me-3" > Ventas < Badge bg = "secondary" > { cantVentas } <
            /Badge>  <
            /Button>  <
            /Link> <
            ListaProductos isLoggedIn = { isLoggedIn }
            ventas = { ventas }
            setVentas = { setVentas }
            />

            <
            Button variant = "outline-light"
            onClick = { logout } >
            Logout <
            /Button>  <
            /React.Fragment>
        );
    } else {
        return ( <
            div className = "bg-light border" >
            <
            Button variant = "light"
            onClick = { login } >
            Login < /Button>

            <
            /div>
        );
    }
};

export default HomeButtons;