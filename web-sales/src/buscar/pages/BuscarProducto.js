import { Col, Container, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Badge from "react-bootstrap/Badge";
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
const BuscarProducto = ({

    id,
    precio,
    categoria,
    isLoggedIn,
    ventas,
    setVentas,
}) => {

    const [value, setValue] = useState("");
    let [productosB, setPlaca] = useState([]);
    let [prod, setProd] = useState([]);

    productosB = [

        {
            id: 1,
            title: "Camisa para Hombre",
            description: "La mejor camisa con la mejor calidad",
            price: 100,
            url: "https://modaellos.com/wp-content/uploads/2016/03/tendencias-camisas-de-otono-invierno-2016-2017.jpg",
            categoria: "Calzado",

        },
        {
            id: 2,
            title: "Gafas Rayban",
            description: "Gafas para cuidar tus ojos",
            price: 50,
            url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
            categoria: "Accesorios",

        },
        {
            id: 3,
            title: "Apple Watch",
            description: "Smartwatch para estar siempre conectado",
            price: 200,
            url: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
            categoria: "Wearables",

        },

    ];
    const handleChange = (event) => {
        setValue(event.target.value.toUpperCase());
    }


    const handleClick = () => {
        console.log('handleClick', value);
        if (!value.length) {
            alert("Por favor ingrese un valor valido!")
        } else {
            const existe = productosB.filter((producto) => producto.id === value);
            console.log("Hola", existe)
            if (!existe) {
                setPlaca([...productosB, { producto: value }])
                console.log("Hola1")
            } else {
                productosB.map((producto) => {

                    if (producto.id == value || producto.description.toUpperCase() == value.toUpperCase()) {
                        setProd(producto);
                        console.log("El producto es ", producto)
                    }
                })



                // existe.horaSalida = fecha
                // existe.precio = (parseInt((fecha - existe.horaEntrada)/60000)+1) * valorHora
                setPlaca([...productosB])
                console.log("Hola2")
            }

        }
        console.log(productosB)

    }

    // if (isLoggedIn) {
    return ( < Container >
        <
        Row >
        <
        Col >
        <
        Form >
        <
        div className = "text-center" >
        <
        h1 className = "text-center" > Buscar: < /h1> <
        h5 className = "text-center" > { value } < /h5> < /
        div > <
        Form.Group className = "mb-3" >
        <
        Form.Label > Digita id del producto: < /Form.Label> <
        Form.Control type = "text"
        onChange = { handleChange }

        /> < /
        Form.Group > <
        Button type = "button"
        variant = "outline-secondary" >
        Cancelar <
        /Button>

        <
        Button onClick = { handleClick }
        type = "button"
        variant = "primary"
        className = "float-end" >
        Buscar <
        /Button> < /
        Form > <
        Table striped bordered hover >
        <
        thead >
        <
        tr >
        <
        th > Id < /th> <
        th > Nombre < /th> <
        th > Descripcion < /th> <
        th > Categoria < /th> <
        th > Precio < /th>

        <
        /tr> < /
        thead > <
        tbody >
        <
        tr > <
        td > { prod.id } < /td> <
        td > { prod.title } < /td> <
        td > { prod.description } < /td>  <
        td > { prod.categoria } < /td>  <
        td > { prod.price } < /td> < /
        tr >
        <
        /tbody>

        <
        /Table>


        <
        /Col> < /
        Row >

        <
        /Container>
    );

};

export default BuscarProducto;