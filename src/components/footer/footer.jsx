import '../footer/footer.Module.css'

const Footer = () => {
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = "../src/assets/CV.pdf";
    link.download = "CV Fernando Samayoa.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const estiloFuente = {
    fontFamily: 'Audiowide',
    fontSize: '16px',
    color: '#282A36'
  };

  return (
    <div className="contenedorF">

      <div>
        <a
          href="https://www.linkedin.com/in/fernando-samayoa-01116964/"
          target="blank"
        >
          <img
            align="center"
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="logo linkedin"
            height="40"
            width="40"
          />
        </a>
        <a href="https://github.com/FSamayoa" target="blank">
          <img
            align="center"
            src="https://i.imgur.com/E1VcJze.png"
            alt="logo github"
            height="40"
            width="40"
          />
        </a>
        <a href="mailto:fsamayoal@gmail.com" target="blank">
          <img
            align="center"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
            alt=" logo Gmail"
            height="40"
            width="40"
          />
        </a>
      </div>
      <div>
        <button onClick={handleClick} style={estiloFuente}><strong>Descargar CV</strong></button>
      </div>
    </div>
  );
};

export default Footer;
