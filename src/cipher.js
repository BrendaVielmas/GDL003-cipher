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
      
      if (currentLetter >= 65 && currentLetter <= 90) {
        offset %= 26;
        numberWithCipher = currentLetter + offset;
        if (numberWithCipher < 65) {
          numberWithCipher += 26;
        }
        if (numberWithCipher > 90) {
          numberWithCipher -= 26;
        }
      }
      if (currentLetter >= 97 && currentLetter <= 122) {
         offset %= 26;
        numberWithCipher = currentLetter + offset;
        if (numberWithCipher < 97) { 
          numberWithCipher += 26;
        }
        if (numberWithCipher > 122) {
          numberWithCipher -= 26;
        }
      }
      if (currentLetter >= 48 && currentLetter <= 57) {
        offset %= 10;
       numberWithCipher = currentLetter + offset;
       if (numberWithCipher < 48) { 
         numberWithCipher += 10;
       }
       if (numberWithCipher > 57) {
         numberWithCipher -= 10;
       }
     }
      if (currentLetter < 48 || currentLetter > 57 && currentLetter < 65 || currentLetter > 90 && currentLetter < 97 || currentLetter > 122) {
        numberWithCipher = currentLetter;
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
      if (currentLetter >= 65 && currentLetter <= 90) {
        offset %= 26;
        numberWithCipher = currentLetter + offset;
        if (numberWithCipher < 65) {
          numberWithCipher += 26;
        }
        if (numberWithCipher > 90) {
          numberWithCipher -= 26;
        }
      }
      if (currentLetter >= 97 && currentLetter <= 122) {
         offset %= 26;
        numberWithCipher = currentLetter + offset;
        if (numberWithCipher < 97) { 
        numberWithCipher += 26;
        }
        if (numberWithCipher > 122) {
          numberWithCipher -= 26;
        }
      }
      if (currentLetter >= 48 && currentLetter <= 57) {
        offset %= 10;
       numberWithCipher = currentLetter + offset;
       if (numberWithCipher < 48) { 
       numberWithCipher += 26;
       }
       if (numberWithCipher > 57) {
         numberWithCipher -= 10;
       }
     }
      if (currentLetter < 48 || currentLetter > 57 && currentLetter < 65 || currentLetter > 90 && currentLetter < 97 || currentLetter > 122) {
        numberWithCipher = currentLetter;
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