import { Container, Row, Col } from "react-bootstrap";
import Producto from "./Producto";


const ListaProductos = ({ isLoggedIn, ventas, setVentas }) => {
    const productos = [

        {
            id: 1,
            title: "Camisa para Hombre",
            description: "La mejor camiza con la mejor calidad",
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

    return ( <
        Container >
        <
        Row > {
            productos.map((producto) => ( <
                Col xs = { 4 }
                key = { producto.id } >
                <
                Producto producto = { producto }
                isLoggedIn = { isLoggedIn }
                productos = { productos }
                ventas = { ventas }
                setVentas = { setVentas }

                />  < /
                Col >
            ))
        } <
        /Row> < /
        Container >
    );
};
export default ListaProductos;