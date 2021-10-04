import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const CardFooter = ({
    id,
    precio,
    categoria,
    isLoggedIn,
    productos,
    ventas,
    setVentas,
    description
}) => {
    const AddProduct = (e) => {
        console.log(e.target.id);
        const productoAgregar = productos.find((p) => p.id == e.target.id);
        console.log(typeof e.target.id)
        const productoAgregado = ventas.find((p) => p.id === productoAgregar.id);

        if (productoAgregado) {
            productoAgregado.cantidad++;
            productoAgregado.total =
                productoAgregado.precio * productoAgregado.cantidad;
            setVentas([...ventas]);
        } else {
            //Cuando no se ha agregado el producto a las ventas 
            const producto = {
                id: productoAgregar.id,
                nombre: productoAgregar.title,
                cantidad: 1,
                precio: productoAgregar.price,
                total: productoAgregar.price

            };

            setVentas([...ventas, producto])
        }
        console.log(ventas);
    };

    if (isLoggedIn) {
        return (

            <
            Button id = { description }
            variant = "primary"
            onClick = { AddProduct } >
            $ { precio } < /Button>
        );
    } else {
        return ( < Badge pill bg = "secondary" > { categoria } < /Badge>

        );

    }
};

export default CardFooter;