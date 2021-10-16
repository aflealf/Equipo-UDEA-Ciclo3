import CallApi from "../api";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import React, { useState } from "react";
import Header from "../shared/Header";
import { useEffect } from "react";
import Home from "../home/pages/Home";


function UserService() {
    const [logged, setLogged] = useState(false);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const response = await CallApi();
            setProductos(response);
        };

        fetchData();
    }, []);
    return ( 
        <Router>
            <Header isLoggedIn = { logged } login = { setLogged }/>
            <Switch>
                <Route path = "/" exact>
                    <Home isLoggedIn = { logged } productos = { productos }/>
                </Route>

                <Redirect to = "/" />
            </Switch>
        </Router>
    );
};

export default UserService;