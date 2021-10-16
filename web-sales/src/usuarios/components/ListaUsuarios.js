import { Container, Row, Col } from "react-bootstrap";
//import Producto from "./Producto";
import Usuario from "./Usuario";


const ListaUsuarios = ({ isLoggedIn,  usuarios }) => {
    //const productos = fetch("http://localhost:3002/api/products/");

    return ( <Container
        Container >
        <Row> 
        {
            usuarios.map((usuario) => ( 
                <Col xs={4} key={usuario._id}>
                <Usuario usuario={usuario}
                isLoggedIn = {isLoggedIn}
                usuarios = {usuarios}
               >
                </Usuario>
                </Col >
            ))
        } 
        </Row>
        </Container>
    );
};
export default ListaUsuarios;
