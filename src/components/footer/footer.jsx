import '../footer/footer.Module.css'

const Footer = () => {
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = "https://file.notion.so/f/f/0bd13d26-c382-4bed-9ae9-7e21d3d56dee/21844ffe-f417-42f3-b1f1-95b3e29a574f/CV.pdf?id=f99cac8f-a021-4f9c-ae37-d71b7e1d5b80&table=block&spaceId=0bd13d26-c382-4bed-9ae9-7e21d3d56dee&expirationTimestamp=1703980800000&signature=dntcK9Rivnbs-_B-wiltf0bwxyaFxQI_HCija6vcaJg&downloadName=CV.pdf";
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
