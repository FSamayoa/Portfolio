import '../footer/footer.Module.css'

const Footer = () => {
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
            src="../src/assets/github-mark-white.svg"
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
        <button><strong>Descargar CV</strong></button>
      </div>
    </div>
  );
};

export default Footer;
