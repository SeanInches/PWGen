// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperRandom = upperCase[Math.floor(Math.random()* upperCase.length)];
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var lowerRandom = lowerCase[Math.floor(math.random()* lowerCase.length)];
var numbers = "0123456789";
var numberRandom = numbers[math.floor(math.random()*numbers.length)];
var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var symbolsRandom = symbols[math.floor(math.random()*symbols.length)];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  prompt("How many characters would you like in your password?");
  if (confirm("Would you like to include lowercase?")) {
    alert("Including lowercase");
  } else {
     alert("Not including lowercase");
  } if (confirm("Would you like to include uppercase?")) {
    alert("Including uppercase");
  } else {
    alert("Not including uppercase");
  } if (confirm("Would you like to include numbers?")) {
    alert("Including numbers")
  } else {
    alert("Not including numbers");
  } if (confirm("Would you like to include special characters?")) {
    alert("Including special characters")
  } else {
    alert("Not including special characters");
  }
}
    


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
