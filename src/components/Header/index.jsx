import './style.css';

function Header() {
  return (
    <header className="p-3 mb-2 bg-primary text-white">
      <p><em>Bem vindo,</em> Fulano</p>
      <i className="fas fa-user-circle iconeUsuario"></i>
    </header>

  )
}

export default Header;