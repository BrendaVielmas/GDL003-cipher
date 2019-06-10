document.getElementById("cipherButton").addEventListener("click",showCipherWindow);
document.getElementById("decipherButton2").addEventListener("click",decipherMessage2);
document.getElementById("cipherButton2").addEventListener("click",cipherMessage);
document.getElementById("decipherButton").addEventListener("click",showDecipherWindow);

messageSection.style.display = "none";
cipherButton2.style.display = "none";
decipherButton2.style.display = "none";
offsetNumber.style.display = "none";
offsetNumber2.style.display ="none";
messageSection2.style.display ="none";
messageOutArea2.style.display ="none";
messageOutArea.style.display ="none";
//Funciones de ventana de Cifrado
//Muestra la primer ventana donde está la opción de cifrar o descifrar

function showCipherWindow(){
  accessButtonsSection.style.display = "none";
  messageSection.style.display = "block";
  cipherButton.style.display = "block";
  offsetNumber.style.display = "block";
  cipherButton2.style.display = "block";
};

/*Funciones de ventana de Descifrado
Muestra la primer ventana donde está la opción de cifrar o descifrar*/
function showDecipherWindow(){
  accessButtonsSection.style.display = "none";
  decipherButton.style.display = "block";
  decipherButton2.style.display = "block";
  offsetNumber2.style.display = "block";
  messageSection2.style.display ="block";


};