import { Link } from "react-router-dom";
import "./style.css";

function Home() {
  return (
    <div className="container">
      <div className="card-home">
        <div className="bg-primary background">
          <div className="titulo-card-home">
            <i className="fas fa-id-badge mx-3 fs-2 text-white"></i>
            <h4 className="text-white">PACIENTES</h4>
          </div>
          <div className="corpo-card-home">
            <Link
              to="/cadastrar-paciente"
              className="btn btn-primary btn-card-home"
            >
              Cadastrar
            </Link>
            <Link
              to="/consultar-paciente"
              className="btn btn-primary btn-card-home"
            >
              Consultar
            </Link>
          </div>
        </div>
      </div>

      {/* PROCEDIMENTOS */}

      <div className="card-home">
        <div className="bg-primary background">
          <div className="titulo-card-home">
            <i className="fas fa-syringe mx-3 fs-2 text-white"></i>
            <h4 className="text-white">PROCEDIMENTOS</h4>
          </div>
          <div className="corpo-card-home">
            <Link
              to="/cadastrar-procedimento"
              className="btn btn-primary btn-card-home"
            >
              Cadastrar
            </Link>
            <Link to="/procedimento" className="btn btn-primary btn-card-home">
              Consultar
            </Link>
          </div>
        </div>
      </div>

      {/* RECIBOS */}

      <div className="card-home">
        <div className="bg-primary background">
          <div className="titulo-card-home">
            <i className="fas fa-receipt mx-3 fs-2 text-white"></i>
            <h4 className="text-white">RECIBOS</h4>
          </div>
          <div className="corpo-card-home">
            <Link
              to="/cadastrar-procedimento"
              className="btn btn-primary btn-card-home"
            >
              Gerar
            </Link>
            <Link
              to="/editar-procedimento"
              className="btn btn-primary btn-card-home"
            >
              Editar
            </Link>
            <Link
              to="/consultar-procedimento"
              className="btn btn-primary btn-card-home"
            >
              Histórico
            </Link>
          </div>
        </div>
      </div>

      {/* USUARIOS */}

      <div className="card-home">
        <div className="bg-primary background">
          <div className="titulo-card-home">
            <i className="fas fa-users mx-3 fs-2 text-white"></i>
            <h4 className="text-white">USUARIOS</h4>
          </div>
          <div className="corpo-card-home">
            <Link
              to="/cadastrar-usuario"
              className="btn btn-primary btn-card-home"
            >
              Cadastrar
            </Link>
            <Link
              to="/consultar-usuario"
              className="btn btn-primary btn-card-home"
            >
              Consultar
            </Link>
          </div>
        </div>
      </div>

      {/* CONFIGURAÇÃO */}

      <div className="card-home">
        <div className="bg-primary background">
          <div className="titulo-card-home">
            <i className="fas fa-cogs mx-3 fs-2 text-white"></i>
            <h4 className="text-white">CONFIGURAÇÃO</h4>
          </div>
          <div className="corpo-card-home">
            <Link
              to="/cadastrar-paciente"
              className="btn btn-primary btn-card-home"
            >
              Cadastrar
            </Link>
            <Link
              to="/editar-paciente"
              className="btn btn-primary btn-card-home"
            >
              Editar
            </Link>
            <Link
              to="/consultar-paciente"
              className="btn btn-primary btn-card-home"
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