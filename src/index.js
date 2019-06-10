document.getElementById("messageSection").style.display = "none";
document.getElementById("cipherButton2").style.display = "none";
document.getElementById("decipherButton2").style.display = "none";
document.getElementById("offsetNumber").style.display = "none";
document.getElementById("offsetNumber2").style.display = "none";
document.getElementById("messageSection2").style.display = "none";
document.getElementById("messageOutArea2").style.display = "none";
document.getElementById("messageOutArea").style.display = "none";





//Funciones de ventana de Cifrado
//Muestra la primer ventana donde está la opción de cifrar o descifrar

//function showCipherWindow(){
let decipherMessage2 = () => {
  window.cipher.decipherMessage2();
};
let cipherMessage = () => {
  window.cipher.cipherMessage();
};

let showCipherWindow = () => {
  document.getElementById("accessButtonsSection").style.display = "none";
  document.getElementById("messageSection").style.display = "block";
  document.getElementById("cipherButton").style.display = "block";
  document.getElementById("offsetNumber").style.display = "block";
  document.getElementById("cipherButton2").style.display = "block";

};

/*Funciones de ventana de Descifrado
Muestra la primer ventana donde está la opción de cifrar o descifrar*/
//function showDecipherWindow(){
let showDecipherWindow = () => {
  document.getElementById("accessButtonsSection").style.display = "none";
  document.getElementById("decipherButton").style.display = "block";
  document.getElementById("decipherButton2").style.display = "block";
  document.getElementById("offsetNumber2").style.display = "block";
  document.getElementById("messageSection2").style.display = "block";
};

document.getElementById("cipherButton").addEventListener("click",showCipherWindow);
document.getElementById("decipherButton2").addEventListener("click",decipherMessage2);
document.getElementById("cipherButton2").addEventListener("click",cipherMessage);
/*document.getElementById("cipherButton2").addEventListener("click",() => {
  innerHTML = window.cipher.cipherMessage();
})); */
document.getElementById("decipherButton").addEventListener("click",showDecipherWindow);
