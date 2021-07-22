import { useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";

import "./style.css"

function CadastroProcedimento() {
    const [codigo, setCodigo] = useState("");
    const [procedimento, setProcedimento] = useState("");
    const [honorario, setHonorario] = useState("");

    axios
        .get(url)
        .then((response) => {
            if (!response.data.erro) {
                setCodigo(response.data.codigo);
                setProcedimento(response.data.procedimento);
                setHonorario(response.data.honorario);
            }
        })
        .catch();

        const efetuarCadastro = (evento) => {
            evento.preventDefault();
            const procedimento = {
                codigo: codigo,
                procedimento: procedimento,
                honorario: honorario,
            },
        };

    axios
        .post("procedimento", procedimento)
        .then((response) => {
            alert(`Procedimento ${procedimento} cadastrado com sucesso!`);
            setCodigo("");
            setProcedimento("");
            setHonorario("");
        })
        .catch((erro) => {
            console.log("Hmmm.. Tem algo errado");
            console.log(erro);
        });

    return (
        <div className="container">
            <form className="formCadastro" onSubmit={efetuarCadastro}>
                <div className="header mb-3 bg-primary text-white">
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
                        value={procedimento}
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
                <div className="px-4 ms-4 mb-3">
                    <button className="btn btn-primary">Cadastrar</button>
                    <Link to="/" className="btn btn-danger">Cancelar</Link>
                </div>
            </div>
            </form>
        </div>
    );
}

export default CadastroProcedimento;

