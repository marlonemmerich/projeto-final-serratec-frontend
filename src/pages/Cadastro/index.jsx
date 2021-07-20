import { Link } from 'react-router-dom';
 
import './style.css';

function Cadastro() {
  return (
      <div className="box">
          <h5 className="bg-primary text-white">Cadastrar usuário</h5>
          <div className="box-btn">
              <Link to="/cadastro-medico" class="btn btn-primary">Médico</Link>
              <Link to="/cadastro-colaborador" class="btn btn-primary">Colaborador</Link>
              <Link to="/cadastro-master" class="btn btn-primary">Master</Link>
          </div>
      </div>
  )
}

export default Cadastro;