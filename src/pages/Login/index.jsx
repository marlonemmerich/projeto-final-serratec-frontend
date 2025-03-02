import { useState } from "react";
import { useHistory } from "react-router-dom";
import MensagemErro from "./MensagemErro";
import logo from '../../assets/images/logoLogin.png';
import http from "../../services/http";

import "./style.css";

function Login() {
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const history = useHistory();

  const manipularUsername = (ev) => setUsername(ev.target.value)
  const manipularSenha = (ev) => setSenha(ev.target.value)

  const logar = (ev) => {
    ev.preventDefault()
    const usuario = {
        username: username,
        senha: senha
    }

    http.post('login', usuario)
        .then((response) => {
            const { token, usuario } = response.data
            localStorage.setItem("id", usuario.id);
            localStorage.setItem("token", token);
            localStorage.setItem(
                "userName", usuario.username
            );
            history.push("/home");
        })
        .catch(error => { 
            console.error(error)
            setMensagem("Usuário ou senha incorretos");
            setTimeout(() => {
                setMensagem("");
            }, 4000);
        })
  }  

  return (
    <div className="main">
      <form className="boxLogin" onSubmit={logar}>
        <img src={logo} alt="Logo SerraMed" />
        <h3>Login</h3>
        <input
          type="text"
          placeholder="Usuário"
          className="form-control py-1 px-4"
          value={username}
          onChange={manipularUsername}
        />
        <input
          type="password"
          placeholder="Senha"
          className="form-control py-1 px-4"
          value={senha}
          onChange={manipularSenha}
        />
        {mensagem && <MensagemErro msg={mensagem} />}
        <button className="btn btn-primary">Logar</button>
      </form>
    </div>
  );
}

export default Login;
