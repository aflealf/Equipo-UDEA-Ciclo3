import { Container, Row, Col } from "react-bootstrap";
import Venta from "./Venta";


const ListadoVentas = ({ isLoggedIn, ventas, setVentas, productos }) => {
    const newLocal = fetch("http://localhost:3002/api/ventas/");
    const ventas = newLocal;
    console.log("ventas", ventas);

    return ( 
    <Container>
        <Row> 
        {
            ventas.map((venta) => ( 
                <Col xs={4} key={venta._id}>
                <Venta venta={ventas}
                isLoggedIn = {isLoggedIn}
                ventas = {ventas}
                setVentas = {setVentas}>
                </Venta>
                </Col >
            ))
        } 
        </Row>
        </Container>
    );
};
export default ListadoVentas;
