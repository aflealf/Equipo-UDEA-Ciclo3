import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form'
import CardFooter from "./CardFooter";
import Button from 'react-bootstrap/Button'
import React, {useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Producto = ({ producto, isLoggedIn, productos, ventas, setVentas }) => {
    const [venta, setVenta] = useState({
        id: 0,
        nombre: 0,
        descripcion: '',
        precio: 0,
        cantidad: 0,
        categoria: 0,
        disponible: 0
    })
    
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
    {/*
    *   Funciónes para guardar la venta
    */}
    
    const setNombre = (event) => {
        venta.nombre=event.target.value;
        console.log(event.target.value);
        console.log("venta",venta);
    }
    const setDescripcion  = (event) => {
        venta.descripcion=event.target.value;
        console.log(event.target.value);
        console.log("venta",venta);
    }
    const setPrecio = (event) => {
        venta.precio=event.target.value;
        console.log(event.target.value);
        console.log("venta",venta);
    }
    const setCantidad = (event) => {
        venta.cantidad=event.target.value;
        console.log(event.target.value);
        console.log("venta",venta);
    }
    const setCategoria = (event) => {
        venta.categoria=event.target.value;
        console.log(event.target.value);
        console.log("venta",venta);
    }
    const setDisponible = (event) => {
        venta.disponible=event.target.value;
        console.log(event.target.value);
        console.log("venta",venta);
    }
    const setVendido = () => {
        console.log("length",ventas.length);
        venta.id=ventas.length+1;
        ventas.push(venta);
        console.log("venta",venta);
        console.log("ventas",ventas);
    }
    {/*
    * Termina Funciónes de guardar la venta
    */}
    return (
        <React.Fragment>
            <Container>
                <h1 classNmae = "d-flex justify-content-center align-text" > Crear venta </h1> 
                <Row className = "d-flex justify-content-center align-text" >
                    <Col xs = { 6 } >
                        {/*
                         *   Formulario de registro de una venta
                         */}
                        <Form>
                            <Form.Group className = "mb-3" controlId = "formBasicEmail">
                                <Form.Label > Nombre 
                                </Form.Label> 
                                <Form.Select ariaLabel = "Default select example" onChange = {setNombre} >
                                    <option > Seleccione un nombre 
                                    </option> 
                                    {
                                        productos.map((producto) => (

                                            <option description = { producto }
                                            value = { producto.id } > { producto.title } 
                                    </option>  
                                        ))
                                    } 
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className = "mb-3"controlId = "formBasicPassword" >
                                <Form.Label > Descripcion 
                                </Form.Label> 
                                <Form.Control type = "textarea"
                                    syle = {
                                        { heigth: "50px" } }
                                    value = { description }
                                    onChange = {setDescripcion}
                                /> 
                            </Form.Group> 
                            <Form.Group className = "mb-3" controlId = "formBasicPassword">
                                <Form.Label> Precio 
                                </Form.Label> 
                                <Form.Control type = "number" onChange = {setPrecio}/>
                            </Form.Group>

                            <Form.Group className = "mb-3" controlId = "formBasicPassword">
                                <Form.Label> Cantidad
                                </Form.Label> 
                                <Form.Control type = "number" onChange = {setCantidad}/>
                            </Form.Group>

                            <Form.Group className = "mb-3"controlId = "formBasicEmail" >
                                <Form.Label > Categoria 
                                </Form.Label> 
                                <Form.Select ariaLabel = "Default select example" onChange = {setCategoria} >
                                    <option > Seleccione una categoria 
                                    </option> 
                                    {
                                        categorias.map((categoria) => ( 
                                            <option value = { categoria.id } > { categoria.nombre } 
                                    </option>  
                                ))
                                } 
                                </Form.Select> 
                            </Form.Group>

                            <Form.Group className = "mb-3" controlId = "formBasicCheckbox">
                                <Form.Check type = "checkbox" label = "Disponible" onChange = {setDisponible}/>
                            </Form.Group>
                            < Button variant = "primary" onClick={setVendido}> 
                            { description } 
                            Vender 
                            <CardFooter id = { description }
                                precio = { producto.price }
                                categoria = { producto.categoria }
                                isLoggedIn = { isLoggedIn }
                                productos = { productos }
                                ventas = { ventas }
                                setVentas = { setVentas }
                                description = { description }
                            />  
                            </Button> 
                        </Form> 
                    </Col> 
                </Row> 
            </Container> 
        </React.Fragment>
    );
};


export default Producto;