import { Link, useLocation } from "react-router-dom";
import "../nav/Nav.Module.css";

const Nav = () => {
  const location = useLocation();
  return (
    <div >
        <div className="nav-container">
      <div className="logo-container">
        <Link  to="/home">
          <img className="image" src="https://i.imgur.com/UDVADoU.jpeg"></img>
          </Link>
      </div>
      <div className="title-container">
          <Link className="title" to="/home">Fernando Samayoa</Link>
      </div>
      </div>
      <div className="links-container">
        <Link to='/acerca' className={`navigation ${location.pathname === '/acerca' ? 'selected' : ''}`}>
          Sobre Mi
        </Link>
        <Link to='/proyectos' className={`navigation ${location.pathname === '/proyectos' ? 'selected' : ''}`}>
          Proyectos
        </Link>
        <Link to='/contacto' className={`navigation ${location.pathname === '/contacto' ? 'selected' : ''}`}>
          Contacto
        </Link>
      </div>
    </div>
  );
};

export default Nav;
