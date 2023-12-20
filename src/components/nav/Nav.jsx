import { Link } from "react-router-dom";

const Nav = ()=>{
    return(
        <div>
            <div>
                <h1><Link to='/home'>Fernando Samayoa</Link></h1>
            </div>
            <div>
                <button>
                    <Link to='/acerca'>Sobre Mi</Link>
                </button>
                <button>
                    <Link to='/projectos'>Proyectos</Link>
                </button>
                <button>
                    <Link to='/contacto'>Contacto</Link>
                </button>
            </div>
        </div>
    )
}

export default Nav