import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cadastro from './pages/Cadastro';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Cadastro />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
