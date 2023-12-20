import "../Contact/contact.Module.css";
import { Formik } from "formik";

const Contact = () => {
  return (
    <div className="contenedor">
      <Formik>
        <form>
          <input placeholder="Nombre"></input>
          <input placeholder="E-mail"></input>
          <textarea placeholder="Deja tu mensaje"></textarea>
          <button>Enviar</button>
        </form>
      </Formik>
    </div>
  );
};

export default Contact;
