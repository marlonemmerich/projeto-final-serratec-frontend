import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Cadastro />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
