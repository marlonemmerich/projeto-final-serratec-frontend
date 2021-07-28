import { Link } from 'react-router-dom';
 
import './style.css';

function BuscarUsuario() {
  return (
      <div className="box-cadastro-usuario">
          <h5 className="bg-primary text-white">Buscar usuário</h5>
          <div className="botoes-cadastro-usuario">
              <Link to="/buscar-usuario/buscar-medico" className="btn btn-primary">Médico</Link>
              <Link to="/buscar-usuario/buscar-colaborador" className="btn btn-primary">Colaborador</Link>
              <Link to="/buscar-usuario/buscar-master" className="btn btn-primary">Master</Link>
          </div>
      </div>
  )
}

export default BuscarUsuario;