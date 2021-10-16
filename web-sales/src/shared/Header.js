import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from "react-bootstrap/Container";
//import Nav from "react-bootstrap/Nav";

import HeaderButtons from "./components/HeaderButtons";

const Header = ({ isLoggedIn, login, cantVentas }) => {
    return ( 
        <Navbar bg="light" expand="lg">
            <Container >
                <Navbar.Brand href="/"> Mi Tienda </Navbar.Brand>
                
                <HeaderButtons isLoggedIn = { isLoggedIn }
                            setLogin = { login }
                            cantVentas = { cantVentas }
                        />
            </Container>  
        </Navbar>
    );
};

export default Header;