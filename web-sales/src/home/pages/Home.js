import React from "react";


import Form from 'react-bootstrap/Form'
import { Container } from "react-bootstrap";
import ListaProductos from "../components/ListaProductos";



const Home = ({ isLoggedIn, ventas, setVentas, login, cantVentas }) => {
    if (isLoggedIn) {
        return ( 
            <Container>
            <ListaProductos isLoggedIn = { isLoggedIn }
            ventas = { ventas }
            setVentas = { setVentas }
            />  
            </Container>
        );
    } else {
        return (

            <div className="vh-100 row justify-content-center align-items-center BackColor">
            <div className="col-md-4 col-10">
              <Form>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted text-white">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              
                <Form.Group className="mb-3 " controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicCheckbox">
                  {/*<Form.Check type="checkbox" label="Check me out" />*/}
                </Form.Group>
                {/*<Button variant="primary" type="submit" className="center" size="lg">
                  Submit
                </Button>*/}
              </Form>
                <br>
                </br>
            {/* 
             *    Inicio de sesión con google
            */}
            <div className="container" align="center">
            <div  className="justify-content-center" >OR</div>
          
            </div>
            </div>
          </div>

        )


    };
}

export default Home;