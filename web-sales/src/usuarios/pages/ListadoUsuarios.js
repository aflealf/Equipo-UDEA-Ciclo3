import { Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'


const ListadoUsuarios = () => {
    const rol = [
        { id: 1, nombre: "Vendedor" },
        { id: 2, nombre: "Administrador" },
];
const estado = [
    { id: 1, nombre: "Activo" },
    { id: 2, nombre: "Inactivo" },
];

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div>
        <h1 className="text-center mt-5 mb-5">Mis Usuarios </h1>
        <Container> 
<Table striped bordered hover>
  <thead>
    <tr>
      <th>Id</th>
      <th>Nombres</th>
      <th>Apellidos</th>
      <th>Rol</th>
      <th>Estado</th>
      <th>Editar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Santiago Felipe</td>
      <td>Perdomo Solano</td>
      <td>Administrador</td>
      <td>Activo</td>
      <td> 
      <Button variant="primary" onClick={handleShow}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edicion datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>Selecciona los cambios a editar</Modal.Body>
        <Container >
        <Form.Group className = "mb-3"
                controlId = "formBasicEmail" >
                <Form.Label > Rol </Form.Label> 
                <Form.Select ariaLabel = "Default select example" >
                <option > Seleccione una rol </option> {
                    rol.map((categoria) => ( 
                    <option value = { categoria.id } > { categoria.nombre } </option>  
                    ))
                } 
                </Form.Select> 
                
                </Form.Group>

                <Form.Group className = "mb-3"
                controlId = "formBasicEmail" >
                <Form.Label > Estado </Form.Label> 
                <Form.Select ariaLabel = "Default select example" >
                <option > Seleccione un estado </option> {
                    estado.map((categoria) => ( 
                    <option value = { categoria.id } > { categoria.nombre } </option>  
                    ))
                
                    
        } 
        </Form.Select> 
        
        </Form.Group>
        </Container>
  
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
   


      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>Andrés Felipe</td>
      <td> Leal Forero </td>
      <td>Vendedor</td>
      <td>Activo</td>
      <td> 
      <Button variant="primary" onClick={handleShow}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edicion datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>Selecciona los cambios a editar</Modal.Body>
        <Container >
        <Form.Group className = "mb-3"
                controlId = "formBasicEmail" >
                <Form.Label > Rol </Form.Label> 
                <Form.Select ariaLabel = "Default select example" >
                <option > Seleccione una rol </option> {
                    rol.map((categoria) => ( 
                    <option value = { categoria.id } > { categoria.nombre } </option>  
                    ))
                } 
                </Form.Select> 
                
                </Form.Group>

                <Form.Group className = "mb-3"
                controlId = "formBasicEmail" >
                <Form.Label > Estado </Form.Label> 
                <Form.Select ariaLabel = "Default select example" >
                <option > Seleccione un estado </option> {
                    estado.map((categoria) => ( 
                    <option value = { categoria.id } > { categoria.nombre } </option>  
                    ))
                
                    
        } 
        </Form.Select> 
        
        </Form.Group>
        </Container>
  
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
   


      </td>
    </tr>
    <tr>
    <td>2</td>
      <td>   Erik Darío</td>
      <td>  Hernandez Vasquez  </td>
      <td>Administrador</td>
      <td>Inactivo</td>
      <td> 
      <Button variant="primary" onClick={handleShow}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edicion datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>Selecciona los cambios a editar</Modal.Body>
        <Container >
        <Form.Group className = "mb-3"
                controlId = "formBasicEmail" >
                <Form.Label > Rol </Form.Label> 
                <Form.Select ariaLabel = "Default select example" >
                <option > Seleccione una rol </option> {
                    rol.map((categoria) => ( 
                    <option value = { categoria.id } > { categoria.nombre } </option>  
                    ))
                } 
                </Form.Select> 
                
                </Form.Group>

                <Form.Group className = "mb-3"
                controlId = "formBasicEmail" >
                <Form.Label > Estado </Form.Label> 
                <Form.Select ariaLabel = "Default select example" >
                <option > Seleccione un estado </option> {
                    estado.map((categoria) => ( 
                    <option value = { categoria.id } > { categoria.nombre } </option>  
                    ))
                
                    
        } 
        </Form.Select> 
        
        </Form.Group>
        </Container>
  
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
   


      </td>
    </tr>
  </tbody>
</Table>
       </Container> 
       </div>
    )
}

export default ListadoUsuarios;