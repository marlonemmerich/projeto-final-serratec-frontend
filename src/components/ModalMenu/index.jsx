import { useHistory } from "react-router-dom";
import "./style.css";

function ModalMenu({ id, titulo, rotaCadastrar, rotaConsultar }) {
  const history = useHistory();

  return (
    <div className="modal fade" id={`${id}`} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content ">
          <div className="modal-header btn-primary">
            <h5 className="modal-title">{titulo}</h5>
          </div>
          <div className="modal-body modal-menu">
            <button
              onClick={() => history.push(`/${rotaCadastrar}`)}
              className="btn btn-primary btn-card-home fs-6"
              data-bs-dismiss="modal"
            >
              Cadastrar
            </button>
            <button
              onClick={() => history.push(`/${rotaConsultar}`)}
              className="btn btn-primary btn-card-home fs-6"
              data-bs-dismiss="modal"
            >
              Consultar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalMenu;
