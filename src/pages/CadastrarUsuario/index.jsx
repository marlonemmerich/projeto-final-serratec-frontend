import { Link } from 'react-router-dom';
 
import './style.css';

function Cadastro() {
  return (
      <div className="box-cadastro-usuario">
          <h5 className="bg-primary text-white">Cadastrar usuário</h5>
          <div className="botoes-cadastro-usuario">
              <Link to="/cadastrar-usuario/medico" className="btn btn-primary">Médico</Link>
              <Link to="/cadastrar-usuario/colaborador" className="btn btn-primary">Colaborador</Link>
              <Link to="/cadastrar-usuario/master" className="btn btn-primary">Master</Link>
          </div>
      </div>
  )
}

export default Cadastro;