window.cipher = {
  // ... 
};
messageSection.style.display = "none";
messageSection2.style.display = "none";
cipherButton2.style.display = "none";
decipherButton2.style.display = "none";
offsetNumber.style.display = "none";
offsetNumber2.style.display ="none";

//Funciones de ventana de Cifrado
//Muestra la primer ventana donde está la opción de cifrar o descifrar

function showCipherWindow(){
  accessButtonsSection.style.display = "none";
  messageSection.style.display = "block";
  cipherButton.style.display = "block";
  offsetNumber.style.display = "block";
  cipherButton2.style.display = "block";
};
document.getElementById("cipherButton").addEventListener("click",showCipherWindow);

//Transforma el mensaje de un string a un número para poder realizar las fórmulas y lo regresa a ser letra
function cipherMessage() {
  let message = messageInput.value;
  messageOutput.innerHTML = "";
  let newLetter = "";
    /*Inicio: iteración en 0, condición(se cumple o no), codigo(resultado) si cumple->incremento, 
    se realiza de nuevo la condición, codigo(resultado) si cumple->incremento, etc.*/
   for(i=0;i <= message.length-1;i++) {
     //Letra actual es igual al mensaje iterado
     let currentLetter = message[i].charCodeAt(0);
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
  };
}
document.getElementById("cipherButton2").addEventListener("click",cipherMessage);
/*Funciones de ventana de Descifrado
Muestra la primer ventana donde está la opción de cifrar o descifrar*/
function showDecipherWindow(){
  accessButtonsSection.style.display = "none";
  messageSection2.style.display = "block";
  decipherButton.style.display = "block";
  decipherButton2.style.display = "block";
  offsetNumber2.style.display = "block";
};
document.getElementById("decipherButton").addEventListener("click",showDecipherWindow);
//Transforma el mensaje de un string a un número para poder realizar las fórmulas y lo regresa a ser letra
function decipherMessage2() {
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
  };
}
document.getElementById("decipherButton2").addEventListener("click",decipherMessage2);