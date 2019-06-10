window.cipher = {
//Transforma el mensaje de un string a un número para poder realizar las fórmulas y lo regresa a ser letra
//function cipherMessage() {
cipherMessage : () => {
  messageOutArea.style.display ="block";
  let message = messageInput.value;
  messageOutput.innerHTML = "";
  let newLetter = "";
    /*Inicio: iteración en 0, condición(se cumple o no), codigo(resultado) si cumple->incremento, 
    se realiza de nuevo la condición, codigo(resultado) si cumple->incremento, etc.*/
  for(i=0;i <= message.length-1; i++) {
     //Letra actual es igual al mensaje iterado
     let currentLetter = message.charCodeAt(i);
      /*El numero de la letra con cipher es igual al numero de la letra más el desplazamiento 
     agregado. Si es mayor a 256 el desplazamiento, se suma el residuo de 256*/
     let numberWithCipher = (currentLetter + parseInt(offsetInput.value)) % 256;
     /*La nueva letra... 1. Si el numero de la letra con cipher es mayor o igual a 0, es igual a valor de la letra
     por el numero de la letra con cipher.
     2. Si no se cumple 1., la nueva letra es igual a valor de la letra por el numero de la letra con cipher. 
     PERO el numero de la letra con cipher es igual a 256 menos (el numero de la letra menos
      el desplazamiento) si es mayor a 256 se resta el residuo de 256.
     El "256-" hace que cifre en número negativo*/
    if (numberWithCipher >= 0) {
    newLetter += String.fromCharCode(numberWithCipher);
    } else {
    numberWithCipher = 256 - (currentLetter - parseInt(offsetInput.value)) % 256;
    newLetter += String.fromCharCode(numberWithCipher);
    }
    //Arroja el mensaje 
    messageOutput.innerHTML = newLetter;
    //Esto es sólo para ver qué arroja la consola
    console.log (currentLetter + " " + numberWithCipher + " " + newLetter);
  }
},

//Transforma el mensaje de un string a un número para poder realizar las fórmulas y lo regresa a ser letra
//function decipherMessage2() {
decipherMessage2 : () => {
  messageOutArea2.style.display ="block";
  let message2 = messageInput2.value;
  messageOutput2.innerHTML = "";
  let newLetter2 = "";
    /*Inicio: iteración en 0, condición(se cumple o no), codigo(resultado) si cumple->incremento, 
    se realiza de nuevo la condición, codigo(resultado) si cumple->incremento, etc.*/
    for(i=0;i <= message2.length-1;i++) {
      //Letra actual es igual al mensaje iterado
      let currentLetter2 = message2[i].charCodeAt(0);
      /*El numero de la letra con cipher es igual al numero de la letra más el desplazamiento 
      agregado. Si es mayor a 256 el desplazamiento, se suma el residuo de 256*/
      let numberWithCipher2 = (currentLetter2 - parseInt(offsetInput2.value)) % -256;
       /*La nueva letra... 1. Si el numero de la letra con cipher es mayor o igual a 0, es igual a valor de la letra
       por el numero de la letra con cipher.
       2. Si no se cumple 1., la nueva letra es igual a valor de la letra por el numero de la letra con cipher. 
      PERO el numero de la letra con cipher es igual a 256 menos (el numero de la letra menos
      el desplazamiento) si es mayor a 256 se resta el residuo de 256. 
      El "256-" hace que cifre en número negativo*/
      if (numberWithCipher2 >= 0) {
      newLetter2 += String.fromCharCode(numberWithCipher2);
      } else {
      numberWithCipher2 = 256 + (currentLetter2 - parseInt(offsetInput2.value)) % 256;
      newLetter2 += String.fromCharCode(numberWithCipher2);
      }
   
    //Arroja el mensaje 
    messageOutput2.innerHTML = newLetter2;
    //Esto es sólo para ver qué arroja la consola
    console.log (currentLetter2 + " " + numberWithCipher2 + " " + newLetter2);
  }
  }
};