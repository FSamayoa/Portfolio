import { Link, useLocation } from "react-router-dom";
import "../nav/Nav.Module.css";

const Nav = () => {
  const location = useLocation();
  return (
    <div >
        <div className="nav-container">
      <div className="logo-container">
        <Link  to="/home">
          <img className="image" src="../src/assets/fanlogo.png"></img>
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
        <Link to='/projectos' className={`navigation ${location.pathname === '/projectos' ? 'selected' : ''}`}>
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
