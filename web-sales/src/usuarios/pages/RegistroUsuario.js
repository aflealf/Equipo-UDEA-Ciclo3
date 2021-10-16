
// import { Col, Container, Row, Alert } from 'react-bootstrap';
// import React from 'react';
// import { useHistory } from "react-router-dom";
// import UsersForm from '../components/UsersForm';
// import  { useState, useEffect } from "react";
// import api from "../../api";



//     const RegistroUsuario = ({usuarios, setUsuarios}) => {
//         const history = useHistory();
//         const [error, setError] = useState();
//         const [success, setSuccess] = useState();
//         const [roles, setRoles] = useState([]);
//         const [estados, setEstados] = useState([]);
//         const [newUser, setNewUser] = useState({
//             email: "",
//             nombres: "",
//             apellidos: "",
//             telefono: "",
//             direccion: "",
//             ciudad: "",
//             barrio: "",
//             codpostal: "",
//             rol: "",
//             estado: ""
//           });
//           useEffect(() => {
//              const fetchData = async () => {
//               const responseRoles = await api.roles.list();
//               setRoles(responseRoles);
//               const responseEstados = await api.estados.list();
//               setEstados(responseEstados);
//              };
//              fetchData();
//            }, []);

// const handleChange = (event) => {
//     setNewUser({ ...newUser, [event.target.name]: event.target.value });
//   };
// const handleClick = async () => {
//   const apiResponse = await api.usuarios.create(newUser);
  
//     if (apiResponse.err) {
//     setError(apiResponse.err.message);
//     console.log(apiResponse.err);
//    } else {
//     setSuccess(apiResponse);
//     setUsuarios([...usuarios, newUser]);
//     //history.push("/");
//     }
//   };



  
//     return ( 

      
//         <React.Fragment >
//         <Container >
//         <h1 className = "d-flex justify-content-center align-text"  > Registro Usuarios </h1> 
//         <Row className = "d-flex justify-content-center align-text" >
//         <Col xs = { 6 } >
//         {error && <Alert variant="danger">{error}</Alert>}
//             {success && <Alert variant="success">{success}</Alert>}
//             <UsersForm
//               handleChange={handleChange}
//               handleClick={handleClick}
//               roles = {roles}
//               estados = {estados}
//               formValue={newUser}
//             />     
//          </Col> 
//         </Row> 
//         </Container> 
//         </React.Fragment>
        
//     );



// };
// export default RegistroUsuario; 