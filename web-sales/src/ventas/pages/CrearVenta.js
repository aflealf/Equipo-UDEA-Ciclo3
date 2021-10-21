import React, { useState, useEffect } from "react";
import { Col, Container, Row, Alert } from 'react-bootstrap';
import api from "../../api";

import VentaForm from "../components/VentaForm";

const CrearVenta = ({ ventas, setVentas }) => {
    //const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
  
    const [newVenta, setNewVenta] = useState({
      producto: "",
      nombrevendedor:"",
      cantidad: 0,
      price: 0,
    });
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await api.categorias.list();
        setCategorias(response);
      };
  
      fetchData();
    }, []);
  
    const handleChange = (event) => {
      setNewVenta({ ...newVenta, [event.target.name]: event.target.value });
    };
  
    const handleClick = async () => {
      const apiResponse = await api.ventas.create(newVenta);
      if (apiResponse.err) {
        setError(apiResponse.err.message);
      setSuccess();
      console.log(apiResponse.err);
      } else {
        setSuccess(apiResponse.mensaje);
        setError();
        setVentas([...ventas, apiResponse.ventas]);
        //history.push("/");
      }
    };

    return (
        <React.Fragment>
          <h1 className="text-center mt-5 mb-5">Crear Venta</h1>
          <Container>
            <Row className="d-flex justify-content-center align-items-center">
              <Col xs={6}>
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}
                <VentaForm
                  handleChange={handleChange}
                  handleClick={handleClick}
                  categorias={categorias}
                  formValue={newVenta}
                />
              </Col>
            </Row>
          </Container>
        </React.Fragment>
      );
    };

export default CrearVenta;