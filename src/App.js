import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CadastrarUsuario from './pages/CadastrarUsuario';
import CadastrarMedico from './pages/CadastrarMedico';
import CadastrarColaborador from './pages/CadastrarColaborador';
import CadastrarMaster from './pages/CadastrarMaster';
import Login from './pages/Login';
import Home from './pages/Home';
import Consulta from './pages/Consulta';
import ResultadoConsulta from './pages/ResultadoConsulta';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <>
          <Header />
          <Route path="/home" component={Home} />
          <Route path="/cadastrar-usuario" component={CadastrarUsuario} />
          <Route path="/cadastrar-medico" component={CadastrarMedico} />
          <Route path="/cadastrar-colaborador" component={CadastrarColaborador} />
          <Route path="/cadastrar-master" component={CadastrarMaster} />
          <Route path="/consulta" component={Consulta} />
          <Route path="/resultado-consulta" component={ResultadoConsulta} />
        </>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
