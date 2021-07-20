import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Cadastro from './pages/Cadastro';
import CadastroMedico from './pages/CadastroMedico';
import CadastroColaborador from './pages/CadastroColaborador';
import CadastroMaster from './pages/CadastroMaster';
import Login from './pages/Login';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <div>
          <Header />
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/cadastro-medico" component={CadastroMedico}/>
          <Route path="/cadastro-colaborador" component={CadastroColaborador}/>
          <Route path="/cadastro-master" component={CadastroMaster}/>
        </div>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
