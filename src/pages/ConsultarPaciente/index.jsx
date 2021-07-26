import { useState } from 'react';
import './style.css';

function ConsultarPaciente() {

  const [nome, setNome] = useState("");

  const pesquisarPaciente = (ev) => {
    ev.preventDefault()
  }

  return (
    <form className="form-consultar-paciente" onSubmit={pesquisarPaciente}>
          <div className="header-consultar-paciente mb-3 bg-primary text-white">
            <h5 className="mb-0">Consulta de paciente</h5>
          </div>
          <div className="d-flex flex-row flex-wrap justify-content-between">
            <div className="corpo-consultar-paciente">
              <div>
                <label className="mb-2">Nome</label>
                <input
                  className="form-control py-1 px-4"
                  required
                  type="text"
                  value={nome}
                  onChange={(evento) => setNome(evento.target.value)}
                  placeholder="Digite o nome completo do paciente"
                />
              </div>
              <button className="btn btn-primary">Consultar</button>
            </div>
          </div>
    </form>
  )
}

export default ConsultarPaciente;