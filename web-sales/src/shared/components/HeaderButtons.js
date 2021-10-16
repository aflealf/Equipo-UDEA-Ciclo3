import React from "react";

import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown'
import { GoogleLogin } from 'react-google-login';

const HeaderButtons = ({ isLoggedIn, setLogin, cantVentas }) => {
    const login = (res) => {
        setLogin(true);
        localStorage.setItem("isLogged", true);
    };

    const loginError = (err) => {
        console.log(err);
      };

    const logout = () => {
        setLogin(false);
        localStorage.setItem("isLogged", false);
    };

    if (isLoggedIn) {
        return (
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home{ login }</Nav.Link>
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/CrearProducto">Adicionar</NavDropdown.Item>
                        <NavDropdown.Item href="/Gestion">Gestionar</NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>

                    <NavDropdown title="Usuarios" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/RegistroUsuario">Registrar</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Consultar</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Editar</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Eliminar</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Ventas" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/RegistroUsuario">Registrar</NavDropdown.Item>
                        <NavDropdown.Item href="/Ventas">Consultar</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Editar</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Eliminar</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                <Nav className = "justify-content-end">
                    <Button onClick={logout}>Logout</Button>
                </Nav>
            </Navbar.Collapse>
            
        );
    } else {
        return ( 
            <div>
                <Button onClick={ login }>Login</Button>
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