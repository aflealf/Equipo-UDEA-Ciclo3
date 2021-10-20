import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const VentaForm = ({ handleChange, handleClick, categorias, formValue }) => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Producto</Form.Label>
        <Form.Control
          type="text"
          name="producto"
          onChange={handleChange}
          value={formValue.title}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Nombre Vendedor</Form.Label>
        <Form.Control
          as="textarea"
          name="nombrevendedor"
          style={{ height: "50px" }}
          onChange={handleChange}
          value={formValue.description}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Cantidad</Form.Label>
        <Form.Control
          type="number"
          name="cantidad"
          onChange={handleChange}
          value={formValue.cantidad}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Precio Unitario</Form.Label>
        <Form.Control
          type="number"
          name="price"
          onChange={handleChange}
          value={formValue.price}
        />
      </Form.Group>

      <Button type="button" variant="outline-secondary">
        Cancelar
      </Button>
      <Button
        onClick={handleClick}
        type="button"
        variant="primary"
        className="float-end"
      >
        Guardar
      </Button>
    </Form>
  );
};

export default VentaForm;