import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import Header from "../components/Header";
import MenuLateral from "../components/MenuLateral";


import { useAuth } from '../hooks/auth';


const PrivateRoute = ({component: Component, requireAuth, ...rest}) => {
    const { usuario } = useAuth();
    console.log('usuario1', usuario);
    console.log('requireAuth', requireAuth);
    console.log('É TRUE?', (!usuario && !!requireAuth));

    return (

        <Route {...rest} render={props => (
            ((!usuario && !!requireAuth)) ?
                <Redirect to="/" />
            : <>
                <Header />
                <MenuLateral />
                <Component {...props} />
              </>
        )} />
    );
};

export default PrivateRoute;
