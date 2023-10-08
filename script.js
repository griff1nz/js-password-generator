// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");

// THEN I am presented with a series of prompts for password criteria
// variables for length, uppercase, lowercase, numbers, special characters;
var passLength; 
var upperCase;
var lowerCase;
var passNumbers;
var passSpecialCharacters;
var charSet; 

// Create character set based on prompts (uppercase, lowercase, etc.)


// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passLength = prompt("Enter password length from 8 to 128: ");
  while (passLength > 128 || passLength < 8) {
    passLength = prompt("Password not within defined parameters. Try again: ");
  }
  upperCase = confirm("Uppercase letters? ");
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  
  

  passwordText.value = password;

}

// Add event listener to generate button
// WHEN I click the button to generate a password
generateBtn.addEventListener("click", writePassword);
