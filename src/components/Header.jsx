import { Dropdown } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../contexts/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
/*
  Comentário para fazer um teste de commit
*/
function Header() {
  const navigate = useNavigate();
  const { Logout } = useContext(AuthContext);

  function Sair(){
    Logout()
    navigate('/')
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 py-2 shadow-sm">
      <a className="navbar-brand fw-bold fs-4" href="/home">
        MinhaEmpresa
      </a>

      <div className="ms-auto d-flex align-items-center">
        <Dropdown align="end">
          <Dropdown.Toggle
            variant="light"
            className="d-flex align-items-center border-0"
            id="dropdown-user"
          >
            <FaUserCircle size={28} className="me-2" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={Sair}>
              Sair
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
    </>
  )
}

export default Header
