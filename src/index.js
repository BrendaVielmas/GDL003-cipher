//oculta elementos
document.getElementById("messageSection").style.display = "none";
document.getElementById("cipherButton2").style.display = "none";
document.getElementById("decipherButton2").style.display = "none";
document.getElementById("offsetNumber").style.display = "none";
document.getElementById("offsetNumber2").style.display = "none";
document.getElementById("messageSection2").style.display = "none";
document.getElementById("messageOutArea2").style.display = "none";
document.getElementById("messageOutArea").style.display = "none";


//Funciones de ventana de Cifrado
//Transforma el mensaje de un string a un número para poder realizar las fórmulas y lo regresa a ser letra
let encode = () => {
  document.getElementById("messageOutArea").style.display ="block";
  let message = document.getElementById("messageInput").value;
  let offset = parseInt(document.getElementById("offsetInput").value);
  let encodedMessage = window.cipher.encode(offset, message);
  //Arroja el mensaje 
   document.getElementById("messageOutput").innerHTML = encodedMessage;
};
//Muestra la primer ventana donde está la opción de cifrar o descifrar
let showCipherWindow = () => {
  document.getElementById("accessButtonsSection").style.display = "none";
  document.getElementById("messageSection").style.display = "block";
  document.getElementById("cipherButton").style.display = "block";
  document.getElementById("offsetNumber").style.display = "block";
  document.getElementById("cipherButton2").style.display = "block";
};


//Funciones de ventana de Descifrado
let decode = () => {
  document.getElementById("messageOutArea2").style.display ="block";
  let message = document.getElementById("messageInput2").value;
  let offset = parseInt(document.getElementById("offsetInput2").value);
  let decodedMessage = window.cipher.decode(offset, message);
  //Arroja el mensaje 
  document.getElementById("messageOutput2").innerHTML = decodedMessage;
};
//Muestra la primer ventana donde está la opción de cifrar o descifrar
let showDecipherWindow = () => {
  document.getElementById("accessButtonsSection").style.display = "none";
  document.getElementById("decipherButton").style.display = "block";
  document.getElementById("decipherButton2").style.display = "block";
  document.getElementById("offsetNumber2").style.display = "block";
  document.getElementById("messageSection2").style.display = "block";
};

document.getElementById("cipherButton").addEventListener("click",showCipherWindow);
document.getElementById("decipherButton2").addEventListener("click",decode);
document.getElementById("cipherButton2").addEventListener("click",encode);
/*document.getElementById("cipherButton2").addEventListener("click",() => {
  innerHTML = window.cipher.encode();
})); */
document.getElementById("decipherButton").addEventListener("click",showDecipherWindow);
