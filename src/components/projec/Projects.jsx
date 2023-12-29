import React, { useState } from "react";
import "../projec/projects.Module.css";
import { projectsData } from "../projec/ProjectsBase";

const Projects = () => {
  const [proyectSelect, setProyectSelect] = useState(null);

  const handleMouseEnter = (id) => {
    setProyectSelect(id);
  };

  const handleMouseLeave = () => {
    setProyectSelect(null);
  };

  const ProjectCard = ({ proyecto }) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleProjectClick = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
      <div
        className={`logo-project ${proyectSelect === proyecto.id ? 'selectod' : ''} ${isFlipped ? 'clicked' : ''}`}
        onMouseEnter={() => handleMouseEnter(proyecto.id)}
        onMouseLeave={handleMouseLeave}
        onClick={handleProjectClick}
      >
        <img
          src={proyecto.imagenSrc}
          alt={proyecto.tituloProy}
        />
        <div className={`back ${isFlipped ? 'flipped' : ''}`}>
          <p>{proyecto.tituloProy}</p>
          <p>{proyecto.descripcion}</p>
          
          <div>
          <a href={proyecto.repoLink} target="_blank" rel="noopener noreferrer">
          <img 
          src="https://i.imgur.com/Yh5dd7S.png" 
          alt="logo github"
          target="blank"
          height="40"
          width="40"
          />
          </a>
          <a href={proyecto.proyectoLink} target="_blank" rel="noopener noreferrer">
          <img 
          src="https://i.imgur.com/ivhAPEN.png" 
          alt="internet"
          target="blank"
          height="40"
          width="40"
          />
          </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="contenedor">
      <p>Estos son mis últimos proyectos.</p>
      <div className="logos">
        {projectsData.map((proyecto) => (
          <ProjectCard key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </div>
  );
};

export default Projects;