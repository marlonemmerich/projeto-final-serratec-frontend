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
import Master from './pages/Master';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <>
            <Header />
            <MenuLateral />
            <Route exact path="/home" component={Home} />
            <Route
              exact
              path="/cadastrar-usuario"
              component={CadastrarUsuario}
            />
            <Route
              path="/cadastrar-usuario/medico"
              component={CadastrarMedico}
            />
            <Route
              path="/cadastrar-usuario/colaborador"
              component={CadastrarColaborador}
            />
            <Route
              path="/cadastrar-usuario/master"
              component={CadastrarMaster}
            />
            <Route path="/cadastrar-paciente" component={CadastrarPaciente} />
            <Route exact path="/buscar-usuario" component={BuscarUsuario} />
            <Route
              exact
              path="/buscar-usuario/buscar-colaborador"
              component={BuscarColaborador}
            />
            <Route
              path="/buscar-usuario/buscar-colaborador/colaborador"
              component={Colaborador}
            />
            <Route exact path="/buscar-usuario/buscar-master" component={BuscarMaster} />
            <Route path="/buscar-usuario/buscar-master/master" component={Master} />
            <Route path="/buscar-paciente" component={BuscarPaciente} />
            <Route path="/paciente" component={Paciente} />
            <Route
              path="/cadastrar-procedimento"
              component={CadastrarProcedimento}
            />
            <Route component={PaginaErro} />
          </>
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
