import { Link } from 'react-router-dom';
 
import './style.css';

function Cadastro() {
  return (
      <div className="box">
          <h5 className="bg-primary text-white">Cadastrar usuário</h5>
          <div className="box-btn">
              <Link to="/cadastrar-medico" className="btn btn-primary">Médico</Link>
              <Link to="/cadastrar-colaborador" className="btn btn-primary">Colaborador</Link>
              <Link to="/cadastrar-master" className="btn btn-primary">Master</Link>
          </div>
      </div>
  )
}

export default Cadastro;