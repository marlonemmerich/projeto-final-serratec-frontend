import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Cadastro from './pages/Cadastro';
import CadastroMedico from './pages/CadastroMedico';
import CadastroColaborador from './pages/CadastroColaborador';
import CadastroMaster from './pages/CadastroMaster';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Cadastro />
        </Route>
        <Route path="/cadastro-medico">
          <CadastroMedico />
        </Route>
        <Route path="/cadastro-colaborador">
          <CadastroColaborador />
        </Route>
        <Route path="/cadastro-master">
          <CadastroMaster />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
