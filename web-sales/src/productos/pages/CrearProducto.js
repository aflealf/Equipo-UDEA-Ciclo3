import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import { Link } from "react-router-dom";
// import ListaProductos from ".productos/components/ListaProductos";

const CrearProducto = (isLoggedIn, setLogin, setVentas, ventas, cantVentas) => {
    const categorias = [
        { id: 1, nombre: "Calzado" },
        { id: 2, nombre: "Accesorios" },
        { id: 3, nombre: "Wearables" },
    ];

    return ( <
        React.Fragment >

        <
        Container >
        <
        h1 classNmae = "d-flex justify-content-center align-text" > Generar cambios < /h1> <
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
        Form.Control type = "text"
        placeholder = "Enter email" / >
        <
        Form.Text className = "text-muted" >
        Nombre <
        /Form.Text> <
        /Form.Group>

        <
        Form.Group className = "mb-3"
        controlId = "formBasicPassword" >
        <
        Form.Label > Descripcion < /Form.Label> <
        Form.Control type = "textarea"
        STYLE = {
            { heigth: "50px" } }
        /> <
        /Form.Group> <
        Form.Group className = "mb-3"
        controlId = "formBasicPassword" >
        <
        Form.Label > Precio < /Form.Label> <
        Form.Control type = "number" / >
        <
        /Form.Group> <
        Form.Group className = "mb-3"
        controlId = "formBasicPassword" >
        <
        Form.Label > URL imagen < /Form.Label> <
        Form.Control type = "text" / >
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
        /Form.Group> <
        Link to = "/Ventas" >
        <
        Button variant = "primary"
        className = "me-3" > Guardar cambios <
        /Button>  <
        /Link>

        <
        /Form> <
        /Col> <
        /Row> <
        /Container> <
        /React.Fragment>
    )

}

export default CrearProducto;