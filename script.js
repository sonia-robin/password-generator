// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  //Length of password prompt, between 8 and 128 characters
  var userInput = prompt("How many characters should you password have? Please enter a number between 8 and 128.")
    //Validate if the user has entered any value. If not, alert the user
    if(!userInput){
      alert("No value was entered. Please enter a number between 8 and 128.")
    }
    //Validate for the chosen length
    //If a number is less than 8, alert the user
    else if(userInput < 8){
      alert(userInput + " is less than 8. Please enter a number between 8 and 128.")
    }
    //If a number is more than 128, alert the user
    else if(userInput > 128){
      alert(userInput + " is greater than 128. Please enter a number between 8 and 128.")
    }
    //Validate if the user input a number. If not, alert the user
    else if(isNaN(userInput)){
      alert(userInput + " is not a number. Please enter a number between 8 and 128.")
    }
    //if number between 8 and 128 entered, use confirm methods, so the user chooses from character types
    else{
      var containLowerCase = confirm("Should your password contain a lowercase?");
      var containUpperCase = confirm("Should your password contain an uppercase?");
      var containNumber = confirm("Should your password contain a number?");
      var containSpecialChar =  confirm("Should your password contain a special character?"); 
    }
    if(!containLowerCase && !containUpperCase && !containNumber && !containSpecialChar){
        alert("Your password must contain at least one character type")
    }
    else{
      alert("Thank you")
    }
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);