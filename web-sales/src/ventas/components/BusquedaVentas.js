import Form from "react-bootstrap/Form";
import api from "../../api";

const BusquedaVentas = ({ ventas, setVentas }) => {
  const find = (event) => {
    const regex = new RegExp(".*" + event.target.value + ".*");
    const ventasFilter = ventas.filter((venta) =>
      venta.title.match(regex)
    );
    console.log(ventasFilter);
    setVentas(ventasFilter);
  };

  return <Form.Control onChange={find} type="text" placeholder="Buscar..." />;
};

export default BusquedaVentas;