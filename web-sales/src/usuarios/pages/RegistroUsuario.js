import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import { Link } from "react-router-dom";



    const RegistroUsuario = (isLoggedIn, setLogin, setVentas, ventas, cantVentas) => {
        const rol = [
            { id: 1, nombre: "Vendedor" },
            { id: 2, nombre: "Administrador" },
    ];
    const estado = [
        { id: 1, nombre: "Activo" },
        { id: 2, nombre: "Inactivo" },
];
    return ( 
        <React.Fragment >

        <Container >
        <h1 classNmae = "d-flex justify-content-center align-text"  > Registro Usuarios </h1> 
        <Row className = "d-flex justify-content-center align-text" >

        <Col xs = { 6 } >
                    <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Nombres</Form.Label>
                  <Form.Control type="text" placeholder="Nombres" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Apellidos</Form.Label>
                  <Form.Control type="text" placeholder="Apellidos" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type ="phone" placeholder="Ej: 305776..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Direccion</Form.Label>
                <Form.Control placeholder="Ej: Calle 16 ..." />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Barrio</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Fontibon</option>
                    <option>...</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Codigo Postal</Form.Label>
                <Form.Control />
                </Form.Group>

                <Form.Group className = "mb-3"
                controlId = "formBasicEmail" >
                <Form.Label > Rol </Form.Label> 
                <Form.Select ariaLabel = "Default select example" >
                <option > Seleccione una rol </option> {
                    rol.map((categoria) => ( 
                    <option value = { categoria.id } > { categoria.nombre } </option>  
                    ))
                
                    
        } 
        </Form.Select> 
        
        </Form.Group>
        <Form.Group className = "mb-3"
                controlId = "formBasicEmail" >
                <Form.Label > Estado </Form.Label> 
                <Form.Select ariaLabel = "Default select example" >
                <option > Seleccione un estado </option> {
                    estado.map((categoria) => ( 
                    <option value = { categoria.id } > { categoria.nombre } </option>  
                    ))
                
                    
        } 
        </Form.Select> 
        
        </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Acepto terminos y condiciones" />
            </Form.Group>

         

            <Button variant="primary" type="submit" className = "me-3">
                Registrar
            </Button>

            <Link to = "/ListadoUsuarios"  >
        <Button variant = "primary"
        className = "me-3" > Ver usuarios 
        </Button>  
        </Link>
            </Form>
         </Col> 
        </Row> 
        </Container> 
        </React.Fragment>
    );

};

export default RegistroUsuario; 