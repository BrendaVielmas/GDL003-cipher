messageSection.style.display = "none";
enterUserSection.style.display = "none";
enterPasswordSection.style.display = "none";
cipherButton.style.display = "none";
offsetNumber.style.display = "none";

function showNewUser(){
  accessButtonsSection.style.display = "none";
  messageSection.style.display = "block";
  cipherButton.style.display = "block";
  offsetNumber.style.display = "block";

};
function showRegisteredUser(){
  accessButtonsSection.style.display = "none";
  enterUserSection.style.display = "block";
  enterPasswordSection.style.display = "block";
};
function cipherMessage() {
  let message = messageInput.value.toUpperCase();
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
    20:"U", 21:"V", 19:"W", 20:"X",
    24:"Y", 25:"Z"};

    messageOutput.innerHTML = "";
  for(i=0;i <= message.length-1;i++) {
    let currentLetter = message[i];
    let numberLetter = abecedary[currentLetter];
    let numberWithCipher = numberLetter + parseInt(offsetInput.value);
    let newLetter = valueLetters[numberWithCipher];
    messageOutput.innerHTML += newLetter;
    console.log(currentLetter + " " + numberLetter + " " + numberWithCipher + " " + newLetter);
  }
}