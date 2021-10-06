import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import HeaderButtons from "./components/HeaderButtons";

const Header = ({ isLoggedIn, login, cantVentas }) => {
    return ( 
        <Navbar bg = "dark"
        variant = "dark" >
        <Container >
        <Navbar.Brand href = "/" > Mi Tienda </Navbar.Brand> 
        <Nav className = "justify-content-end" >
        <HeaderButtons isLoggedIn = { isLoggedIn }
        setLogin = { login }
        cantVentas = { cantVentas }
        /> 
        </Nav> 
        </Container>  
        </Navbar>
    );
};

export default Header;