import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import Header from "../components/Header";
import MenuLateral from "../components/MenuLateral";


import { useAuth } from '../hooks/auth';


const PublicRoute = ({component: Component, requireAuth, ...rest}) => {
    const { usuario } = useAuth();
    console.log('usuario2', usuario);
    console.log('requireAuth', requireAuth);

    return (

        <Route {...rest} render={props => (
            <Component {...props} />
        )} />
    );
};

export default PublicRoute;
