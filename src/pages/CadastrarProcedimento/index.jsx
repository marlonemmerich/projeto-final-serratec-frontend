import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./style.css";

function CadastroProcedimento() {
  const [codigo, setCodigo] = useState("");
  const [tipoProcedimento, setProcedimento] = useState("");
  const [honorario, setHonorario] = useState("");

  const efetuarCadastro = (evento) => {
    evento.preventDefault();
    const procedimento = {
      codigo: codigo,
      procedimento: tipoProcedimento,
      honorario: honorario,
    };
    axios
      .post("http://localhost:8080/api/procedimentos/", procedimento)
      .then(response => {
        alert(`Procedimento ${procedimento} cadastrado com sucesso!`);
        setCodigo("");
        setProcedimento("");
        setHonorario("");
      })
      .catch((erro) => {
        console.log("Hmmm.. Tem algo errado");
        console.log(erro);
      });
  };

  return (
    <div className="container">
      <form className="formCadastro" onSubmit={efetuarCadastro}>
        <div className="header bg-primary text-white m-0">
          <h5 className="mb-0">Cadastro de Procedimentos</h5>
        </div>
        <div className=" d-flex flex-row flex-wrap justify-content-around">
          <div className="cadastro1">
            <div>
              <label className="mb-2">Código</label>
              <input
                className="form-control py-1 px-4"
                required
                type="number"
                value={codigo}
                onChange={(evento) => setCodigo(evento.target.value)}
                placeholder="Código Interno"
              />
            </div>
            <div>
              <label className="mb-2">Procedimento</label>
              <input
                className="form-control py-1 px-4"
                required
                type="text"
                value={tipoProcedimento}
                onChange={(evento) => setProcedimento(evento.target.value)}
              />
            </div>
            <div>
              <label className="mb-2">Honorários</label>
              <input
                className="form-control py-1 px-4"
                required
                type="double"
                value={honorario}
                onChange={(evento) => setHonorario(evento.target.value)}
              />
            </div>
          </div>
          <div className="px-4 mb-3 d-flex justify-content-center">
            <button className="btn btn-primary">Cadastrar</button>
            <Link to="/" className="btn btn-danger">
              Cancelar
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CadastroProcedimento;
