import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Alert } from "react-bootstrap";
import api from "../../api";
import UsersForm from "../components/UsersForm";

const EditarUsuario = ({ usuarios, setUsuarios }) => {
  const history = useHistory();
  const [roles, setRoles] = useState([]);
  const [estados, setEstados] = useState([]);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  //const { productId } = useParams();

  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: 0,
    url: "",
    categoria: "",
    disponible: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      const responseRoles = await api.roles.list();
      setRoles(responseRoles);
      const responseEstados = await api.estados.list();
      setEstados(responseEstados);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.users.getUsers(usuarios._id);
      setNewProduct(response);
    };

    fetchData();
  }, [usuarios]);

  const handleChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
    const apiResponse = await api.users.edit(newProduct);
    if (apiResponse.err) {
      setError(apiResponse.err.message);
      console.log(apiResponse.err);
    } else {
      setSuccess(apiResponse);
      setUsuarios([...usuarios, newProduct]);
      history.push("/ListadoUsuarios");
    }
  };

  return (
    <React.Fragment>
      <h1 className="text-center mt-5 mb-5">Editar usuario</h1>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={6}>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <UsersForm
              handleChange={handleChange}
              handleClick={handleClick}
              roles = {roles}
              estados = {estados}
              formValue={newProduct}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default EditarUsuario;
