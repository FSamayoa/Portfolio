import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "../Contact/contact.Module.css";
import {
  validateName,
  validateMail,
  validateMessage,
} from "./validationContact";

const Email = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateNameOnChange = (value) => {
    const error = validateName(value);
    setNameError(error);
  };

  const validateEmailOnChange = (value) => {
    const error = validateMail(value);
    setEmailError(error);
  };

  const validateMessageOnChange = (value) => {
    const error = validateMessage(value);
    setMessageError(error);
  };

  const sendEmail = (event) => {
    event.preventDefault();

    if (
      nameError ||
      emailError ||
      messageError ||
      !name ||
      !email ||
      !message
    ) {
      console.log("Formulario inválido");
      return;
    }

    if (nameError || emailError || messageError) {
      console.log("Formulario inválido");
      return;
    }

    emailjs
      .sendForm(
        "service_n2flao7",
        "template_z3z0fip",
        event.target,
        "fpKrN9OxpAI2I60z3"
      )
      .then((response) => {
        console.log(response);
        setName("");
        setEmail("");
        setMessage("");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "¡Mensaje enviado!",
          showConfirmButton: false,
          timer: 1500,
          background: "#282A36",
        });
      })
      .catch((error) => { 
        console.error("Error", error);

        Swal.fire({
        position: "center",
        icon: "error",
        title: "inténtalo más tarde",
        showConfirmButton: false,
        timer: 1500,
        background: "#282A36",
      })
    })
  };

  const desabilitar =
    !name ||
    !email ||
    !message ||
    !!nameError ||
    !!emailError ||
    !!messageError;

  return (
    <div className="contenedor">
      <h3>Contáctame</h3>
      <div>
        <form onSubmit={sendEmail}>
          <div>
            <input
              className="entrada"
              placeholder="Nombre"
              type="text"
              name="user_name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                validateNameOnChange(e.target.value);
              }}
            />
            <br></br>
            <span style={{ color: "red", fontSize:13 }}>{nameError}</span>

            <br></br>
            <br></br>
            <input
              className="entrada"
              placeholder="Email"
              type="email"
              name="user_email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmailOnChange(e.target.value);
              }}
            />
            <br></br>
            <span style={{ color: "red", fontSize:13 }}>{emailError}</span>
            <br></br>
            <br></br>
            <textarea
              className="entrada2"
              placeholder="Tu mensaje"
              name="user_message"
              cols="30"
              value={message}
              rows="10"
              onChange={(e) => {
                setMessage(e.target.value);
                validateMessageOnChange(e.target.value);
              }}
            />
            <br></br>
            <span style={{ color: "red" ,fontSize:13}}>{messageError}</span>
            <br></br>
            <button className="send" type="submit" disabled={desabilitar}>
              <strong>Enviar</strong>
            </button>
            <br></br>
            <br></br>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Email;
