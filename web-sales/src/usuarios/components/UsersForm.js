import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
const UsersForm = ({ handleChange, handleClick, rol, estado, formValue}) => {
    return (
        <Form>
        <Row className="mb-3">
       
        <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="text" 
                name = "email"
                placeholder="Correo"
                onChange ={handleChange}
                value = {formValue.email}
                />
            </Form.Group>
            
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Nombres</Form.Label>
              <Form.Control
                type="text" 
                name = "nombres"
                placeholder="Nombres"
                onChange={handleChange}
                value = {formValue.nombres}
                />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control 
              type="text"
              placeholder="Apellidos"
              name = "apellidos"
              onChange={handleChange} 
              value = {formValue.apellidos}/>
            </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Telefono</Form.Label>
            <Form.Control 
             type ="phone"
             placeholder="Ej: 305776..."
             name = "telefono"
             onChange={handleChange}
             value = {formValue.telefono} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Direccion</Form.Label>
            <Form.Control 
            type= "text"
            placeholder="Ej: Calle 16 ..."
            name = "direccion" 
            onChange={handleChange}
            value = {formValue.direccion}/>
        </Form.Group>

        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control
                   type= "text"   
                   name = "ciudad" 
                   onChange={handleChange} 
                   value = {formValue.ciudad}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Barrio</Form.Label>
            <Form.Control
                   type= "text"   
                   name = "barrio" 
                   onChange={handleChange}
                   value = {formValue.barrio} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Codigo Postal</Form.Label>
            <Form.Control
            type= "text"   
            name = "codpostal" 
            onChange={handleChange}
            value = {formValue.codpostal}  />
            </Form.Group>

            <Form.Group className = "mb-3"
            controlId = "formBasicEmail" >
            <Form.Label > Rol </Form.Label> 
            <Form.Select ariaLabel = "Default select example" 
            name = "rol"
            onChange={handleChange} 
            value = {formValue.rol}>
            
    </Form.Select> 
    
    </Form.Group>
    <Form.Group className = "mb-3"
            controlId = "formBasicEmail" >
            <Form.Label > Estado </Form.Label> 
            <Form.Select ariaLabel = "Default select example" 
            name = "estado"
            onChange = {handleChange}
            value = {formValue.estado}>
          
    </Form.Select> 
    
    </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Acepto terminos y condiciones" />
        </Form.Group>

     

        <Button
         variant="primary" 
         type="button"
         className = "float-end"
         onClick= {handleClick}>
            Registrar
        </Button>

        <Link to = "/ListadoUsuarios"  >
    <Button variant = "primary"
    className = "me-3" > Ver usuarios 
    </Button>  
    </Link>
        </Form>

    );


};

export default UsersForm;