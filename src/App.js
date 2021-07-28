import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CadastrarUsuario from "./pages/CadastrarUsuario";
import CadastrarMedico from "./pages/CadastrarMedico";
import CadastrarColaborador from "./pages/CadastrarColaborador";
import CadastrarMaster from "./pages/CadastrarMaster";
import CadastrarPaciente from "./pages/CadastrarPaciente";
import Paciente from "./pages/Paciente";
import CadastrarProcedimento from "./pages/CadastrarProcedimento";
import Login from "./pages/Login";
import Home from "./pages/Home";
import BuscarPaciente from "./pages/BuscarPaciente";
import MenuLateral from "./components/MenuLateral";
import { GlobalProvider } from "./providers/Context";
import PaginaErro from "./pages/PaginaErro";
import BuscarColaborador from "./pages/BuscarColaborador";
import BuscarUsuario from "./pages/BuscarUsuario";
import Colaborador from "./pages/Colaborador";
import BuscarMaster from "./pages/BuscarMaster";
import Master from "./pages/Master";
import BuscarMedico from "./pages/BuscarMedico";
import Medico from "./pages/Medico";
import BuscarProcedimento from "./pages/BuscarProcedimento";
import Procedimento from "./pages/Procedimento";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Header />
            <Home />
          </Route>
          <Route exact path="/cadastrar-usuario">
            <Header />
            <MenuLateral />
            <CadastrarUsuario />
          </Route>
          <Route path="/cadastrar-usuario/medico">
            <Header />
            <MenuLateral />
            <CadastrarMedico />
          </Route>
          <Route path="/cadastrar-usuario/colaborador">
            <Header />
            <MenuLateral />
            <CadastrarColaborador />
          </Route>
          <Route path="/cadastrar-usuario/master">
            <Header />
            <MenuLateral />
            <CadastrarMaster />
          </Route>
          <Route path="/cadastrar-paciente">
            <Header />
            <MenuLateral />
            <CadastrarPaciente />
          </Route>
          <Route exact path="/buscar-usuario">
            <Header />
            <MenuLateral />
            <BuscarUsuario />
          </Route>
          <Route exact path="/buscar-usuario/buscar-colaborador">
            <Header />
            <MenuLateral />
            <BuscarColaborador />
          </Route>
          <Route path="/buscar-usuario/buscar-colaborador/colaborador">
            <Header />
            <MenuLateral />
            <Colaborador />
          </Route>
          <Route exact path="/buscar-usuario/buscar-master">
            <Header />
            <MenuLateral />
            <BuscarMaster />
          </Route>
          <Route path="/buscar-usuario/buscar-master/master">
            <Header />
            <MenuLateral />
            <Master />
          </Route>
          <Route exact path="/buscar-usuario/buscar-medico">
            <Header />
            <MenuLateral />
            <BuscarMedico />
          </Route>
          <Route exact path="/buscar-usuario/buscar-medico/medico">
            <Header />
            <MenuLateral />
            <Medico />
          </Route>
          <Route path="/buscar-paciente">
            <Header />
            <MenuLateral />
            <BuscarPaciente />
          </Route>
          <Route path="/paciente">
            <Header />
            <MenuLateral />
            <Paciente />
          </Route>
          <Route path="/cadastrar-procedimento">
            <Header />
            <MenuLateral />
            <CadastrarProcedimento />
          </Route>
          <Route exact path="/buscar-procedimento">
            <Header />
            <MenuLateral />
            <BuscarProcedimento />
          </Route>
          <Route path="/buscar-procedimento/procedimento">
            <Header />
            <MenuLateral />
            <Procedimento />
          </Route>
          <Route>
            <PaginaErro />
          </Route>
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
