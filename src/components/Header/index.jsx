import logo from "../../assets/images/logo.png";

import "./style.css";

function Header() {
  return (
    <header className="py-3 px-5 mb-2 bg-primary text-white">
      <img src={logo} alt="Logo SerraMed" />
      <div className="usuario">
        <div className="dropdown usuario">
          <button
            className="dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <em>Bem vindo,</em>
            <span className="ms-2">Fulano</span>
            <i className="fas fa-user-circle iconeUsuario"></i>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <button className="dropdown-item d-flex justify-content-start">
                <i className="fas fa-sign-out-alt text-danger"></i>
                <span className="ms-2 text-danger">Sair</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
