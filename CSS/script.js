// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array list of numbers
var numbers = [0,1,2,3,4,5,6,7,8,9];

// Array list of lowercase letters
var lowerCase = [];

// Array list of Uppercase letters
var upperCase = [];
// Array list of special characters
var specialCharacters = [];


// Generate password function
function writePassword() {
  // Password length
  const passwordLength = prompt("");
  )

  // Confirm use numbers

  // Confirm use lowerCase

  // Confirm use upperCase

  // Confrim use special characters
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button - writePassword is a call back function
generateBtn.addEventListener("click", writePassword);
