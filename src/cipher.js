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
        numberWithCipher = (65)+((currentLetter + offset)-65) % 26;
      } else {
        numberWithCipher = (97)+((currentLetter + offset)-97) % 26;
      }
      /*Si numero de la letra con desplazamiento es mayor o igual a 0, la nueva letra  es igual a devolver el 
      numero a caracter; Si no, la nueva letra  es igual a devolver el 
      numero a caracter, PERO el numero de la letra con desplazamiento  es igual a 256 -(letra actual - desplazamiento) % 256
      El "256-" hace que cifre en número negativo*/
     /*if (numberWithCipher >= 0) {
        newLetter = String.fromCharCode(numberWithCipher);
      } else {
        numberWithCipher = 256 - (currentLetter - offset) % 256;*/
        newLetter = String.fromCharCode(numberWithCipher);
      //}
      //Arroja el mensaje 
      encodedMessage += newLetter;
      //Esto es sólo para ver qué arroja la consola
      console.log (currentLetter + " " + numberWithCipher + " " + newLetter);
    }
    return encodedMessage;
  },


  //Pedazo de Decifrado
  decode : (offset, message) => {
    let newLetter2 = "";
    /*Inicio: iteración en 0, condición(se cumple o no), codigo(resultado) si cumple->incremento, 
    se realiza de nuevo la condición, codigo(resultado) si cumple->incremento, etc.*/
    let decodedMessage ="";
    for(let i=0;i <= message.length-1;i++) {
      //Letra actual es igual al mensaje iterado
      let currentLetter2 = message.charCodeAt(i);
      /*El numero de la letra con cipher es igual al numero de la letra más el desplazamiento 
      agregado. Si es mayor a 256 el desplazamiento, se suma el residuo de 256*/

      let numberWithCipher2 ="";
      if (currentLetter2 >= 65 && currentLetter2 <= 90) {
        numberWithCipher2 = (65)+((currentLetter2 - offset)+65) % -26;
      } else {
        numberWithCipher2 = (97)+((currentLetter2 + offset)+97) % -26;
      }

       /*Si numero de la letra con desplazamiento es mayor o igual a 0, la nueva letra  es igual a devolver el 
      numero a caracter; Si no, la nueva letra  es igual a devolver el 
      numero a caracter, PERO el numero de la letra con desplazamiento  es igual a 256 +(letra actual - desplazamiento) % 256
      El "256+" hace que cifre en número negativo*/
      /*if (numberWithCipher2 >= 0) {
        newLetter2 = String.fromCharCode(numberWithCipher2);
      } else {
        numberWithCipher2 = 256 + (currentLetter2 - offset) % 256;*/
        newLetter2 = String.fromCharCode(numberWithCipher2);
      //}
      //Arroja el mensaje 
      decodedMessage += newLetter2;
      //Esto es sólo para ver qué arroja la consola
      console.log (currentLetter2 + " " + numberWithCipher2 + " " + newLetter2);
    }
    return decodedMessage;
  }
};