// Assignment Code
var generateBtn = document.querySelector("#generate");

// THEN I am presented with a series of prompts for password criteria
// variables for length, uppercase, lowercase, numbers, special characters;

//Initialize all variables
var passLength; 
var upperCase;
var lowerCase;
var passNumbers;
var passSpecialCharacters;
var charSet; 
var lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
var upperCaseSet = lowerCaseSet.toUpperCase();
var numbers = "1234567890";
var specials = "!@#$%^&*()-+=[]{},.<>?/;:_'";


function generatePassword() {
  var tempPassword = "";
  for (var i = 0; i < passLength; i++) { 
    tempPassword += charSet[Math.floor(Math.random() * charSet.length)]; //Chooses random character from charSet and adds it to tempPassword
  }
  return tempPassword;
}

// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");
  charSet = ""; //Re-initializes charSet when a new password is generated
  // THEN I select which criteria to include in the password
  //Prompts user for inputs
  passLength = prompt("Enter password length from 8 to 128: "); 
  while (passLength > 128 || passLength < 8) { //Runs prompt again if passLength is greater than 128 or less than 8
    passLength = prompt("Password not within listed parameters. Try again: ");
  }
  while (charSet === "") { //While loop makes the user redo prompts if all boolean variables are false
    upperCase = confirm("Include uppercase letters?");
    lowerCase = confirm("Include lowercase letters?");
    passNumbers = confirm("Include numbers?");
    passSpecialCharacters = confirm("Include special characters?");
    // Create character set based on prompts (uppercase, lowercase, etc.)
    if (lowerCase) {
      charSet += lowerCaseSet;
    }
    if (upperCase) {
      charSet += upperCaseSet;
    }
    if (passNumbers) {
      charSet += numbers;
    }
    if (passSpecialCharacters) {
      charSet += specials;
    }
    if (charSet === "") { //If all variables are false, then nothing will have been added to charSet
      alert("Please select at least one.");
    }
  }
  var password = generatePassword();

  passwordText.value = password;

}

// Add event listener to generate button
// WHEN I click the button to generate a password
generateBtn.addEventListener("click", writePassword);
