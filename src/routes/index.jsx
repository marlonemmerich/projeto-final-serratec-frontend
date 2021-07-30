import React from 'react';

import { Switch } from "react-router-dom";

import CadastrarUsuario from "./../pages/CadastrarUsuario";
import CadastrarMedico from "./../pages/CadastrarMedico";
import CadastrarColaborador from "./../pages/CadastrarColaborador";
import CadastrarMaster from "./../pages/CadastrarMaster";
import CadastrarPaciente from "./../pages/CadastrarPaciente";
import Paciente from "./../pages/Paciente";
import CadastrarProcedimento from "./../pages/CadastrarProcedimento";
import Login from "./../pages/Login";
import Home from "./../pages/Home";

import PaginaErro from "./../pages/PaginaErro";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


const Routes = () => (




        <Switch>
            <PrivateRoute exact path="/home" requireAuth="true" component={Home} />


            <PublicRoute exact path="/" component={Login} />

            <PrivateRoute exact path="/cadastrar-usuario" component={CadastrarUsuario} requireAuth="true" />

            <PrivateRoute exact path="/cadastrar-usuario/medico" component={CadastrarMedico} requireAuth="true" />

        </Switch>


        /*
        <Route path="/cadastrar-usuario/medico">
        <CadastrarMedico />
        </Route>

        <Route path="/cadastrar-usuario/colaborador">
        <CadastrarColaborador />
        </Route>

        <Route path="/cadastrar-usuario/master">
        <CadastrarMaster />
        </Route>

        <Route path="/cadastrar-paciente">
        <CadastrarPaciente />
        </Route>

        <Route path="/paciente">
        <Paciente />
        </Route>

        <Route path="/cadastrar-procedimento">
        <CadastrarProcedimento />
        </Route>

        <Route>
        <PaginaErro />
        </Route> */



);

export default Routes;
