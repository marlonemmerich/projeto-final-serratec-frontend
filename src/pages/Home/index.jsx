import { Link } from "react-router-dom";
import "./style.css";

function Home() {
  return (
    <div className="container">
      <div className="cardHome">
        <div className="bg-primary background">
          <div className="cardHeader">
            <i className="fas fa-id-badge mx-3 fs-2 text-white"></i>
            <h4 className="text-white">PACIENTES</h4>
          </div>
          <div className="cardBody">
            <Link to="/cadastrar-paciente" className="btn btn-primary btnCard">
              Cadastrar
            </Link>
            <Link to="/editar-paciente" className="btn btn-primary btnCard">
              Editar
            </Link>
            <Link to="/consultar-paciente" className="btn btn-primary btnCard">
              Consultar
            </Link>
          </div>
        </div>
      </div>

      {/* PROCEDIMENTOS */}

      <div className="cardHome">
        <div className="bg-primary background">
          <div className="cardHeader">
            <i className="fas fa-syringe mx-3 fs-2 text-white"></i>
            <h4 className="text-white">PROCEDIMENTOS</h4>
          </div>
          <div className="cardBody">
            <Link
              to="/cadastrar-procedimento"
              className="btn btn-primary btnCard"
            >
              Cadastrar
            </Link>
            <Link to="/editar-procedimento" className="btn btn-primary btnCard">
              Editar
            </Link>
            <Link
              to="/consultar-procedimento"
              className="btn btn-primary btnCard"
            >
              Consultar
            </Link>
          </div>
        </div>
      </div>

      {/* FINANCEIRO */}

      <div className="cardHome">
        <div className="bg-primary background">
          <div className="cardHeader">
            <i className="fas fa-receipt mx-3 fs-2 text-white"></i>
            <h4 className="text-white">FINANCEIRO</h4>
          </div>
          <div className="cardBody">
            <Link
              to="/cadastrar-procedimento"
              className="btn btn-primary btnCard"
            >
              Cadastrar
            </Link>
            <Link to="/editar-procedimento" className="btn btn-primary btnCard">
              Editar
            </Link>
            <Link
              to="/consultar-procedimento"
              className="btn btn-primary btnCard"
            >
              Consultar
            </Link>
          </div>
        </div>
      </div>

      {/* USUARIOS */}

      <div className="cardHome">
        <div className="bg-primary background">
          <div className="cardHeader">
            <i className="fas fa-users mx-3 fs-2 text-white"></i>
            <h4 className="text-white">USUARIOS</h4>
          </div>
          <div className="cardBody">
            <Link to="/cadastrar-usuario" className="btn btn-primary btnCard">
              Cadastrar
            </Link>
            <Link to="/editar-usuario" className="btn btn-primary btnCard">
              Editar
            </Link>
            <Link to="/consultar-usuario" className="btn btn-primary btnCard">
              Consultar
            </Link>
          </div>
        </div>
      </div>

      {/* EMPRESA */}

      <div className="cardHome">
        <div className="bg-primary background">
          <div className="cardHeader">
            <i className="fas fa-building mx-3 fs-2 text-white"></i>
            <h4 className="text-white">EMPRESA</h4>
          </div>
          <div className="cardBody">
            <Link
              to="/cadastrar-procedimento"
              className="btn btn-primary btnCard"
            >
              Cadastrar
            </Link>
            <Link to="/editar-procedimento" className="btn btn-primary btnCard">
              Editar
            </Link>
            <Link
              to="/consultar-procedimento"
              className="btn btn-primary btnCard"
            >
              Consultar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
