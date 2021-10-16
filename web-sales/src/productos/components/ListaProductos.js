import { Container, Row, Col } from "react-bootstrap";
import Producto from "./Producto";


const ListaProductos = ({ isLoggedIn, ventas, setVentas, productos }) => {
    //const productos = fetch("http://localhost:3002/api/products/");

    return ( <Container
        Container >
        <Row> 
        {
            productos.map((producto) => ( 
                <Col xs={4} key={producto._id}>
                <Producto producto={productos}
                isLoggedIn = {isLoggedIn}
                productos = {productos}
                ventas = {ventas}
                setVentas = {setVentas}>
                </Producto>
                </Col >
            ))
        } 
        </Row>
        </Container>
    );
};
export default ListaProductos;