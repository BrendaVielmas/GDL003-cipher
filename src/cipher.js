window.cipher = {
  //Pedazo de Cifrado
  encode : (offset, message) => {
    let newLetter = "";
    /*Inicio: iteración en 0, condición(se cumple o no), codigo(resultado) si cumple->incremento, 
    se realiza de nuevo la condición, codigo(resultado) si cumple->incremento, etc.*/
    let encodedMessage ="";
    for(let i=0;i <= message.length-1; i++) {
      //Letra actual es igual al mensaje iterado
      let currentLetter = message.charCodeAt(i);
      /*El numero de la letra con cipher es igual al numero de la letra más el desplazamiento 
      agregado. Si es mayor a 256 el desplazamiento, se suma el residuo de 256*/
      let numberWithCipher ="";
      //sección de mayúsculas
      let longitudMayusculas = 90 - 65 + 1;
      if (currentLetter >= 65 && currentLetter <= 90) {
        offset %= longitudMayusculas;
        numberWithCipher = currentLetter + offset;
        if (numberWithCipher < 65) {
          numberWithCipher += longitudMayusculas;
        }
        if (numberWithCipher > 90) {
          numberWithCipher -= longitudMayusculas;
        }
      }
      //sección de minúsculas
      let longitudMinusculas = 122 - 97 + 1;
      if (currentLetter >= 97 && currentLetter <= 122) {
         offset %= longitudMinusculas;
        numberWithCipher = currentLetter + offset;
        if (numberWithCipher < 97) { 
          numberWithCipher += longitudMinusculas;
        }
        if (numberWithCipher > 122) {
          numberWithCipher -= longitudMinusculas;
        }
      }
      //sección de simbolos parte 1
      let longitudSimbolos = 64 - 32 + 1;
      if (currentLetter >= 32 && currentLetter <= 64) {
        offset %= longitudSimbolos;
       numberWithCipher = currentLetter + offset;
       if (numberWithCipher < 32) { 
         numberWithCipher += longitudSimbolos;
       }
       if (numberWithCipher > 64) {
         numberWithCipher -= longitudSimbolos;
       }
     }
     //sección de simbolos parte 2
      let longitudSimbolos2 = 126 - 123 + 1;
     if (currentLetter >= 123 && currentLetter <= 126) {
        offset %= longitudSimbolos2;
       numberWithCipher = currentLetter + offset;
       if (numberWithCipher < 123) { 
         numberWithCipher += longitudSimbolos2;
       }
       if (numberWithCipher > 126) {
         numberWithCipher -= longitudSimbolos2;
       }
     }
      //sección de simbolos parte 3
      let longitudSimbolos3 = 254 - 128 + 1;
      if (currentLetter >= 128 && currentLetter <= 254) {
        offset %= longitudSimbolos3;
       numberWithCipher = currentLetter + offset;
       if (numberWithCipher < 128) { 
         numberWithCipher += longitudSimbolos3;
       }
       if (numberWithCipher > 254) {
         numberWithCipher -= longitudSimbolos3;
       }
     }
      //la nueva letra  es igual a devolver el numero a caracter
      newLetter = String.fromCharCode(numberWithCipher);
      //Arroja el mensaje 
      encodedMessage += newLetter;
      //Esto es sólo para ver qué arroja la consola
      console.log (currentLetter + " " + numberWithCipher + " " + newLetter);
    }
    return encodedMessage;
  },


  //Pedazo de Decifrado
  decode : (offset, message) => {
    let newLetter = "";
    offset= -offset;
    /*Inicio: iteración en 0, condición(se cumple o no), codigo(resultado) si cumple->incremento, 
    se realiza de nuevo la condición, codigo(resultado) si cumple->incremento, etc.*/
    let decodedMessage ="";
    for(let i=0;i <= message.length-1;i++) {
      //Letra actual es igual al mensaje iterado
      let currentLetter = message.charCodeAt(i);
      /*El numero de la letra con cipher es igual al numero de la letra más el desplazamiento 
      agregado. Si es mayor a 256 el desplazamiento, se suma el residuo de 256*/

      let numberWithCipher ="";
       //sección de mayúsculas
      let longitudMayusculas = 90 - 65 + 1;
      if (currentLetter >= 65 && currentLetter <= 90) {
        offset %= longitudMayusculas;
        numberWithCipher = currentLetter + offset;
        if (numberWithCipher < 65) {
          numberWithCipher += longitudMayusculas;
        }
        if (numberWithCipher > 90) {
          numberWithCipher -= longitudMayusculas;
        }
      }
      //sección de minúsculas
      let longitudMinusculas = 122 - 97 + 1;
      if (currentLetter >= 97 && currentLetter <= 122) {
         offset %= longitudMinusculas;
        numberWithCipher = currentLetter + offset;
        if (numberWithCipher < 97) { 
          numberWithCipher += longitudMinusculas;
        }
        if (numberWithCipher > 122) {
          numberWithCipher -= longitudMinusculas;
        }
      }
      //sección de simbolos parte 1
      let longitudSimbolos = 64 - 32 + 1;
      if (currentLetter >= 32 && currentLetter <= 64) {
        offset %= longitudSimbolos;
       numberWithCipher = currentLetter + offset;
       if (numberWithCipher < 32) { 
         numberWithCipher += longitudSimbolos;
       }
       if (numberWithCipher > 64) {
         numberWithCipher -= longitudSimbolos;
       }
     }
     //sección de simbolos parte 2
      let longitudSimbolos2 = 126 - 123 + 1;
     if (currentLetter >= 123 && currentLetter <= 126) {
        offset %= longitudSimbolos2;
       numberWithCipher = currentLetter + offset;
       if (numberWithCipher < 123) { 
         numberWithCipher += longitudSimbolos2;
       }
       if (numberWithCipher > 126) {
         numberWithCipher -= longitudSimbolos2;
       }
     }
      //sección de simbolos parte 3
      let longitudSimbolos3 = 254 - 128 + 1;
      if (currentLetter >= 128 && currentLetter <= 254) {
        offset %= longitudSimbolos3;
       numberWithCipher = currentLetter + offset;
       if (numberWithCipher < 128) { 
         numberWithCipher += longitudSimbolos3;
       }
       if (numberWithCipher > 254) {
         numberWithCipher -= longitudSimbolos3;
       }
     }
      //la nueva letra  es igual a devolver el numero a caracter
      newLetter = String.fromCharCode(numberWithCipher);
      //Arroja el mensaje 
      decodedMessage += newLetter;
      //Esto es sólo para ver qué arroja la consola
      console.log (currentLetter + " " + numberWithCipher + " " + newLetter);
    }
    return decodedMessage;
  }
};