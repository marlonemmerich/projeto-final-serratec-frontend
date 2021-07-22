import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

import "./style.css";

function ResultadoConsulta() {
  const [nome, setNome] = useState("");


  const buscarUsuario= (evento) => {
    evento.preventDefault();
    const usuario = {
      nome: nome,
  
    };

    axios
      .post("http://localhost:8090/api/usuarios", usuario)
      .then((response) => {
        //localStorage.setItem("token", response.data.access_token);
        alert(`Usuário ${nome} cadastrado com sucesso!`);
        setNome("");

      })
      .catch((erro) => {
        console.log("Algo deu erro");
        console.log(erro);
      });
  };

  return (<p>Preencher</p>
   
  );
}

export default ResultadoConsulta;