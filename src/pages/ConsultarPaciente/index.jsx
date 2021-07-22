import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./style.css";

function ConsultarPaciente() {
  const [nome, setNome] = useState("");
 
  const consultar = (evento) => { 
    evento.preventDefault()
    axios
    .get(`http://localhost:8090/api/usuarios/nomes/${nome}`)
    .then((response) => {
      console.log(response);
    })
    .catch((erro) => {
      console.log("Algo deu erro");
      console.log(erro);
    });
  };


  return (
    <div className="container">
      <form className="form-consultar-paciente" onSubmit={consultar}>
        <div className="header-consultar-paciente mb-3 bg-primary text-white">
          <h5 className="mb-0">Consulta de paciente</h5>
        </div>
        <div className=" d-flex flex-row flex-wrap justify-content-around mb-5">
          <div className="corpo-consultar-paciente">
            <div>
              <label className="mb-2">Nome</label>
              <input
                className="form-control py-1 px-4"
                required
                type="text"
                value={nome}
                onChange={(evento) => setNome(evento.target.value)}
                placeholder="Digite seu nome completo"
              />
            </div>
          </div>
          <div className="botoes-consultar-paciente">
            <button className="btn btn-primary">Consultar</button>
            <Link to="/home" className="btn btn-danger">
              Cancelar
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ConsultarPaciente;
