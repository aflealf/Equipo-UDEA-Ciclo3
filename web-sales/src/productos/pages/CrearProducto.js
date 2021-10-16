import React, { useState, useEffect } from "react";
import { Col, Container, Row, Alert } from 'react-bootstrap';
import api from "../../api";
//import { useHistory } from "react-router-dom";
import ProductForm from "../components/ProductForm";

//import Form from 'react-bootstrap/Form'
//import Button from 'react-bootstrap/Button'

//import { Link } from "react-router-dom";
// import ListaProductos from ".productos/components/ListaProductos";

const CrearProducto = ({ productos, setProductos }) => {
    //const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
  
    const [newProduct, setNewProduct] = useState({
      title: "",
      description: "",
      price: 0,
      url: "https://www.preproom.org/_images/labels-and-signs/warning/danger-t2.jpg",
      categoria: "Desconocida",
      disponible: true,
    });
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await api.categorias.list();
        setCategorias(response);
      };
  
      fetchData();
    }, []);
  
    const handleChange = (event) => {
      setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
    };
  
    const handleClick = async () => {
      const apiResponse = await api.products.create(newProduct);
      if (apiResponse.err) {
        setError(apiResponse.err.message);
        console.log(apiResponse.err);
      } else {
        setSuccess(apiResponse);
        setProductos([...productos, newProduct]);
        //history.push("/");
      }
    };

    return (
        <React.Fragment>
          <h1 className="text-center mt-5 mb-5">Crear producto</h1>
          <Container>
            <Row className="d-flex justify-content-center align-items-center">
              <Col xs={6}>
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}
                <ProductForm
                  handleChange={handleChange}
                  handleClick={handleClick}
                  categorias={categorias}
                  formValue={newProduct}
                />
              </Col>
            </Row>
          </Container>
        </React.Fragment>
      );
    };

export default CrearProducto;