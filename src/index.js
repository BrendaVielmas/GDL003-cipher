messageSection.style.display = "none";
messageSection2.style.display = "none";
cipherButton2.style.display = "none";
decipherButton2.style.display = "none";
offsetNumber.style.display = "none";
offsetNumber2.style.display ="none";
//Funciones de ventana de Cifrado
function showCipherWindow(){
  accessButtonsSection.style.display = "none";
  messageSection.style.display = "block";
  cipherButton.style.display = "block";
  offsetNumber.style.display = "block";
  cipherButton2.style.display = "block";
};
function messageInUppercase() {
  let lettersInUppercase = document.getElementById("messageInput");
  lettersInUppercase.value = lettersInUppercase.value.toUpperCase();
};
function cipherMessage() {
  let message = messageInput.value;
  let abecedary = {
    "A":0,  "B":1,  "C":2,  "D":3,
    "E":4,  "F":5,  "G":6,  "H":7,
    "I":8,  "J":9,  "K":10, "L":11,
    "M":12, "N":13, "O":14, "P":15,
    "Q":16, "R":17, "S":18, "T":19,
    "U":20, "V":21, "W":22, "X":23,
    "Y":24, "Z":25};
  let valueLetters = {
    0:"A",  1:"B",  2:"C",  3:"D",
    4:"E",  5:"F",  6:"G",  7:"H",
    8:"I",  9:"J",  10:"K", 11:"L",
    12:"M", 13:"N", 14:"O", 15:"P",
    16:"Q", 17:"R", 18:"S", 19:"T",
    20:"U", 21:"V", 22:"W", 23:"X",
    24:"Y", 25:"Z"};

    messageOutput.innerHTML = "";
  for(i=0;i <= message.length-1;i++) {
    let currentLetter = message[i];
    let numberLetter = abecedary[currentLetter];
    let numberWithCipher = (numberLetter + parseInt(offsetInput.value)) % 26;
    //let newLetter = valueLetters[numberWithCipher];
    let newLetter; 
    if (numberWithCipher >= 0) {
      newLetter = valueLetters[numberWithCipher];
    } else {
      numberWithCipher = 26 - (numberLetter - parseInt(offsetInput.value)) % 26;
      newLetter = valueLetters[numberWithCipher];
    }



    messageOutput.innerHTML += newLetter;
    console.log(currentLetter + " " + numberLetter + " " + numberWithCipher + " " + newLetter);
  };
}
//Funciones de ventana de Descifrado
function showDecipherWindow(){
  accessButtonsSection.style.display = "none";
  messageSection2.style.display = "block";
  decipherButton.style.display = "block";
  decipherButton2.style.display = "block";
  offsetNumber2.style.display = "block";
};
function messageInUppercase2() {
  let lettersInUppercase2 = document.getElementById("messageInput2");
  lettersInUppercase2.value = lettersInUppercase2.value.toUpperCase();
};
function decipherMessage2() {
  let message2 = messageInput2.value;
  let abecedary2 = {
    "A":0,  "B":1,  "C":2,  "D":3,
    "E":4,  "F":5,  "G":6,  "H":7,
    "I":8,  "J":9,  "K":10, "L":11,
    "M":12, "N":13, "O":14, "P":15,
    "Q":16, "R":17, "S":18, "T":19,
    "U":20, "V":21, "W":22, "X":23,
    "Y":24, "Z":25};
  let valueLetters2 = {
    0:"A",  1:"B",  2:"C",  3:"D",
    4:"E",  5:"F",  6:"G",  7:"H",
    8:"I",  9:"J",  10:"K", 11:"L",
    12:"M", 13:"N", 14:"O", 15:"P",
    16:"Q", 17:"R", 18:"S", 19:"T",
    20:"U", 21:"V", 22:"W", 23:"X",
    24:"Y", 25:"Z"};

    messageOutput2.innerHTML = "";
  for(i=0;i <= message2.length-1;i++) {
    let currentLetter2 = message2[i];
    let numberLetter2 = abecedary2[currentLetter2];
    let numberWithCipher2 = (numberLetter2 - parseInt(offsetInput2.value)) % -26;
   
    let newLetter2; 
    if (numberWithCipher2 >= 0) {
      newLetter2 = valueLetters2[numberWithCipher2];
    } else {
      numberWithCipher2 = 26 + (numberLetter2 - parseInt(offsetInput2.value)) % 26;
      newLetter2 = valueLetters2[numberWithCipher2];
    }
    messageOutput2.innerHTML += newLetter2;
    console.log(currentLetter2 + " " + numberLetter2 + " " + numberWithCipher2 + " " + newLetter2);
  };
}
