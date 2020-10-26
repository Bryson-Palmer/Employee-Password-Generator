// Assignment Code
// GET the `generate` id attached to the button from the HTML
var generateBtn = document.querySelector("#generate");

// creating an `availableCharacters` object with properties and values
var availableCharacters = {

  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  lowerCaseLetters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upperCaseLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  specialCharacters: [' ', '!', '"', '#', '$', '%', '&', "'", '(',')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "\\", "]", '^', "_", '`', '{', '|', '}', '~'],
};


// Generate password function
function generatePassword() {
    
  // PROMPT user for password length, parse the entry and store it in a new variable `passwordLength`
  var passwordLength = parseInt(prompt("Choose a password length between 8 and 128 characters."));

  
  // IF the `passwordLength` does not meet the conditions
  // alert user to make a valid entry and exit function
  if ( !( passwordLength >= 8 ) || !( passwordLength <= 128 ) ) {      
    alert("Please choose a valid password length between 8 and 128 characters.");
    return;
  } // end IF NOT condition
  
  var userCharacterList = []; // DECLARE a new userCharacterList
  
  var password = ""; // DECLARE a new `password` string

  // Confirm IF using numbers
  // THEN CONCAT `availableCharacters.numbers` into `userCharacterList`
  var numbersPrompt = confirm( "Click OK to include numbers in your password.\nOtherwise, click Cancel." );
  if( numbersPrompt == true ) {
    userCharacterList = userCharacterList.concat(availableCharacters.numbers);
  } // end of confirm if using numbers
  
  
  // Confirm IF using lowerCase
  // THEN CONCAT `availableCharacters.lowerCaseLetters` into `userCharacterList` array
  var lowerCasePrompt = confirm( "Click OK to include lower case letters in your password.\nOtherwise, click Cancel." );  
  if( lowerCasePrompt == true ) {
    userCharacterList = userCharacterList.concat(availableCharacters.lowerCaseLetters);
  } // end of confirm is using lowercase letters
 
     
  // Confirm IF using upperCase
  // THEN CONCAT `availableCharacters.upperCaseLetters` into `userCharacterList` array
  var uppperCasePrompt = confirm( "Click OK to include upper case letters in your password.\nOtherwise, click Cancel." );   
  if( uppperCasePrompt == true ) {
    userCharacterList = userCharacterList.concat(availableCharacters.upperCaseLetters);
  } // end of confirm if using upper case letters
  

  // Confrim IF using special characters
  // THEN CONCAT `availableCharacters.specialCharacters` into `userCharacterList` array
  var specialCasePrompt = confirm( "Click OK to include special characters in your password.\nOtherwise, click Cancel." );
  if( specialCasePrompt == true ) {
    userCharacterList = userCharacterList.concat(availableCharacters.specialCharacters);   
  } // end of confirm if using special characters


  // IF `userCharacterList.length` === 0
  // THEN ALERT user to select character options to include in password AND exit function
  if ( userCharacterList.length === 0 ) {    
    alert("Please select character options to include in your secure password.")
    return;
  } // end of condition if user selects no character options
  
  
  // WHILE `password` length is <= user picked `passwordLength` keep adding random characters to `password` variable
  // SELECT `randomCharacter` a character from `userCharacterList`
  // APPEND `randomCharacter` to `password` string
  while ( password.length <= passwordLength - 1 ) {
    var randomCharacter = userCharacterList[ Math.floor ( Math.random() * userCharacterList.length ) ];
    password += randomCharacter;
      
  } // end of while loop
  
  return password; // RETURN `password`
} // end of generate password


// Write password to the #password id
function writePassword() {
  // calling generatePassword function and assigning it to local var password
 var password = generatePassword();
 // assigning passwordText to the element id password from the HTML
 var passwordText = document.querySelector("#password");
 // setting the value of passwordText to be the same value stored in password
 passwordText.value = password;
}

// Add event listener to generate button - writePassword is a call back function
generateBtn.addEventListener("click", writePassword);