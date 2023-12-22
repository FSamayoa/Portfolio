export function validateName(name) {
    if (name.trim() === "") {
      return "El nombre es requerido";
    } else if (name.length < 3) {
      return "Parece que el nombre es demasiado corto";
    } else if (!/^[a-zA-Z\s]+(\s[a-zA-Z]+)*$/.test(name)) {
      return "El nombre debe contener solo letras";
    } else if (name.length > 40) {
      return "El maximo es de 40 caracteres";
    }
    return "";
  }
    
       
    export function validateMail(mail) {
      const mailPattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
      if (!mailPattern.test(mail)) {
          return "Debes colocar un email valido.";
      } else if (mail.length > 40) {
        return "El maximo es de 40 caracteres";
      }
      return "";
    }
    
    export function validateMessage(message) {
      if (message.length < 2) {
          return "Dejame un mensaje.";
      } else if (message.length > 500) {
        return "El mensaje es demasiado largo, por que no nos contactamos por telefono, acorta un poco tu mensaje, deja tu número y me comunico.";
      }
      return "";
    }
   