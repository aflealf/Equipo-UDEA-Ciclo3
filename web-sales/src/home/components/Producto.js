import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form'
import CardFooter from "./CardFooter";
import Button from 'react-bootstrap/Button'
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const Producto = ({ producto, isLoggedIn, productos, ventas, setVentas }) => {

    const categorias = [
        { id: 1, nombre: "Calzado" },
        { id: 2, nombre: "Accesorios" },
        { id: 3, nombre: "Wearables" },
    ];
    let description;
    const cargar = (e) => {
        console.log("Hola", e.target.value)
        description = e.target.value
        console.log(description);
    };
    return (

        <
        React.Fragment >

        <
        Container >
        <
        h1 classNmae = "d-flex justify-content-center align-text" > Crear venta < /h1> <
        Row className = "d-flex justify-content-center align-text" >
        <
        Col xs = { 6 } >
        <
        Form >

        <
        Form.Group className = "mb-3"
        controlId = "formBasicEmail" >
        <
        Form.Label > Nombre < /Form.Label> <
        Form.Select ariaLabel = "Default select example"
        onChange = { cargar } >

        <
        option > Seleccione un nombre < /option> {
            productos.map((producto) => (

                <
                option description = { producto }
                value = { producto.id } > { producto.title } < /option>  
            ))
        } <
        /Form.Select>

        <
        /Form.Group>

        <
        Form.Group className = "mb-3"
        controlId = "formBasicPassword" >
        <
        Form.Label > Descripcion < /Form.Label> <
        Form.Control type = "textarea"
        STYLE = {
            { heigth: "50px" } }
        value = { description }
        /> <
        /Form.Group> <
        Form.Group className = "mb-3"
        controlId = "formBasicPassword" >
        <
        Form.Label > Precio < /Form.Label> <
        Form.Control type = "number" / >
        <
        /Form.Group>



        <
        Form.Group className = "mb-3"
        controlId = "formBasicEmail" >
        <
        Form.Label > Categoria < /Form.Label> <
        Form.Select ariaLabel = "Default select example" >
        <
        option > Seleccione una categoria < /option> {
            categorias.map((categoria) => ( <
                option value = { categoria.id } > { categoria.nombre } < /option>  
            ))
        } <
        /Form.Select> <
        /Form.Group>




        <
        Form.Group className = "mb-3"
        controlId = "formBasicCheckbox" >
        <
        Form.Check type = "checkbox"
        label = "Disponible" / >
        <
        /Form.Group>

        <
        Button variant = "primary" > { description }
        Vender <
        CardFooter id = { description }
        // precio = { producto.price }
        // categoria = { producto.categoria }
        isLoggedIn = { isLoggedIn }
        productos = { productos }
        ventas = { ventas }
        setVentas = { setVentas }
        description = { description }

        />  <
        /Button> <
        /Form> <
        /Col> <
        /Row> <
        /Container> <
        /React.Fragment>
    );
};


export default Producto;