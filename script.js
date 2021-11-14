// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperRandom = upperCase[Math.floor(Math.random() * upperCase.length)];
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var lowerRandom = lowerCase[Math.floor(math.random() * upperCase.length)];
var numbers = "1234567890";
var numberRandom = numbers[math.floor(math.random() * numbers.length)];
var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var symbolsRandom = symbols[math.floor(math.random() * symbols.length)];

// Write password to the #password input
function randomCharacter() {
  return character[Math.floor(Math.random() * character.length)];
}

function generatePassword() {
  var length = 0;
  while (length < 8|| length > 128) {
  length = prompt("How many characters would you like in your password?");
  if (length < 8 || length > 128) {
  alert("Enter a password between 8 and 128 characters");
  }}
    
  var finalPassword = "";
  var allPossibleChar = "";
  var uppercaseConfirm = confirm("Would you like to include uppercase?")
  if (uppercaseConfirm === true) {
    finalPassword += upperRandom
    allPossibleChar = allPossibleChar+upperCase;
  };
  var lowercaseConfirm = confirm("Would you like to include lowercase?")
  if (lowercaseConfirm === true) {
    finalPassword += lowerRandom
    allPossibleChar = allPossibleChar+lowerCase;
  };
  var numberConfirm = confirm("Would you like to include numbers?")
  if (numberConfirm === true){
    finalPassword += numberRandom
    allPossibleChar = allPossibleChar+numbers;
  };
  var symbolConfirm = confirm("Would you like to include special characters?")
  if (symbolConfirm === true) {
    finalPassword += symbolsRandom
    allPossibleChar = allPossibleChar+symbols;
  };
  if (allPossibleChar.length == 0){
    alert("Select one character type");
    return;
  }
  else {
    for (var i = finalPassword; i < length; i++) {
      var newLetter = allPossibleChar[Math.floor(Math.random() * allPossibleChar.length)]
      finalPassword = finalPassword + newLetter;
    }
    return finalPassword;
  }}
    


// Add event listener to generate button


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);