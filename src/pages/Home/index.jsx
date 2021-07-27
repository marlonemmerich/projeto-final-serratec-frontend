import { Link } from "react-router-dom";
import "./style.css";

function Home() {
  return (
<<<<<<< HEAD
    <>
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
              <button
               
                className="btn btn-primary btn-card-home novaclasse"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"

              >
                Editar
              </button>
              <Link
                to="/consultar-paciente"
                className="btn btn-primary btn-card-home"
              >
                Consultar
              </Link>
            </div>
=======
    <div className="container">
      <div className="card-home">
        <div className="bg-primary background">
          <div className="titulo-card-home">
            <i className="fas fa-id-badge mx-3 fs-2 text-white"></i>
            <h4 className="text-white">PACIENTES</h4>
          </div>
          <div className="corpo-card-home">
            <Link to="/cadastrar-paciente" className="btn btn-primary btn-card-home">
              Cadastrar
            </Link>
            <Link to="/consultar-paciente" className="btn btn-primary btn-card-home">
              Consultar
            </Link>
>>>>>>> 1e7cea4242f9c102a65f79e48a3971fd47a9b559
          </div>
        </div>

        {/* PROCEDIMENTOS */}

<<<<<<< HEAD
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
                Consultar
              </Link>
            </div>
=======
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
            <Link
              to="/procedimento"
              className="btn btn-primary btn-card-home"
            >
              Consultar
            </Link>
>>>>>>> 1e7cea4242f9c102a65f79e48a3971fd47a9b559
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
                to="/editar-usuario"
                className="btn btn-primary btn-card-home"
              >
                Editar
              </Link>
              <Link
                to="/consultar-usuario"
                className="btn btn-primary btn-card-home"
              >
                Consultar
              </Link>
            </div>
          </div>
<<<<<<< HEAD
          
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
=======
          <div className="corpo-card-home">
            <Link to="/cadastrar-usuario" className="btn btn-primary btn-card-home">
              Cadastrar
            </Link>
            <Link to="/consultar-usuario" className="btn btn-primary btn-card-home">
              Consultar
            </Link>
>>>>>>> 1e7cea4242f9c102a65f79e48a3971fd47a9b559
          </div>
        </div>
      </div>

      <button
        type="button"
        className="btn btn-primary"
      >
       
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content " >
            <div className="modal-header btn-primary">
              <h5 className="modal-title" id="exampleModalLabel">
                Nome do Paciente:              
              </h5>
              
            </div>
            <div className="modal-body"><input className= "barra form-control" ></input></div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" className="btn btn-primary">
                Pesquisar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
