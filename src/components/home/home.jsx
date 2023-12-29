import React from "react";
import '../home/home.Module.css'

const Home = () => {
  return (
    <div className="contenedor">
      <p>
        Soy Fernando Samayoa, un ingeniero en transporte con más de una década
        de experiencia que ha emprendido un emocionante cambio hacia el
        desarrollo web full stack.
      </p>
      <p>
        Mi transición no es solo una búsqueda de conocimientos, sino un salto
        hacia un terreno donde la curiosidad y el aprendizaje constante son mi
        brújula.
      </p>
      <p>
        ¡Te invito a explorar conmigo y descubrir cómo la experiencia se
        encuentra con la innovación en mi nueva travesía!
      </p>
      <div className="iconos">
      <img width="75" height="75" src="https://img.icons8.com/officel/80/engineer.png" alt="engineer"/>
      <img width="85" height="85" src="https://img.icons8.com/officel/80/mexico--v1.png" alt="mexico--v1"/>
      <img width="80" height="80" src="https://img.icons8.com/external-beshi-flat-kerismaker/96/external-Developer-coding-and-programing-beshi-flat-kerismaker.png" alt="external-Developer-coding-and-programing-beshi-flat-kerismaker"/>
      </div>

    </div>
  );
};

export default Home;
