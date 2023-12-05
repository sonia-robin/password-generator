//Global variables
var userInput;
var containLowerCase;
var containUpperCase;
var containNumber;
var containSpecialChar;

// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Length of password prompt, between 8 and 128 characters
  userInput = prompt(
    "How many characters should you password have? Please enter a number between 8 and 128."
  );
  // Validate if the user has entered any value. If not, alert the user
  if (!userInput) {
    alert("No value was entered. Please enter a number between 8 and 128.");
  }
  // Validate for the chosen length
  // If a number is less than 8, alert the user
  else if (userInput < 8) {
    alert(
      userInput + " is less than 8. Please enter a number between 8 and 128."
    );
  }
  // Else if a number is more than 128, alert the user
  else if (userInput > 128) {
    alert(
      userInput +
        " is greater than 128. Please enter a number between 8 and 128."
    );
  }
  // Validate if the user input a number. If not, alert the user
  else if (isNaN(userInput)) {
    alert(
      userInput + " is not a number. Please enter a number between 8 and 128."
    );
  }
  // If number between 8 and 128 entered, confirm methods are used, so the user chooses from character types
  else {
    containLowerCase = confirm("Should your password contain a lowercase?");
    containUpperCase = confirm("Should your password contain an uppercase?");
    containNumber = confirm("Should your password contain a number?");
    containSpecialChar = confirm("Should your password contain a special character?");

    // At least one character type has to be chosen. If no character type is chosen, alert the user
    if (
      !containLowerCase &&
      !containUpperCase &&
      !containNumber &&
      !containSpecialChar
    ) {
      alert("Your password must contain at least one character type");
    }
  }
}

// Function for getting a random element from an array
function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Function to check, if an item in an array contains an item from another array.
function isCharInArray(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    var char = arr1[i];
    if (arr2.includes(char)) {
      return true;
    }
  }
  return false;
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  // Create a variable and assign an empty array
  var newArray = [];
  // Check all the confirm methods used for char types and each time, when it is true, add the relevant array to the variable.
  if (containLowerCase) {
    newArray = lowerCasedCharacters;
  }
  if (containUpperCase) {
    newArray = newArray.concat(upperCasedCharacters);
  }
  if (containNumber) {
    newArray = newArray.concat(numericCharacters);
  }
  if (containSpecialChar) {
    newArray = newArray.concat(specialCharacters);
  }

  // Create a variable pass and assign an emtpy array
  var pass = [];
  // For loop, number of iterations is based on the user input.
  for (var i = 0; i < userInput; i++) {
    // For each i, a random character is generated and pushed in the pass array.
    var char = getRandom(newArray);
    pass.push(char);
    // If statement to check, if the password contains the chosen char types. Function isCharInArray is used and if it returns false, the relevant character is added to the pass array
    if (pass.length == userInput - 3) {
      if (containLowerCase) {
        if (!isCharInArray(pass, lowerCasedCharacters)) {
          pass.push(getRandom(lowerCasedCharacters));
          i++;
        }
      }
      if (containUpperCase) {
        if (!isCharInArray(pass, upperCasedCharacters)) {
          pass.push(getRandom(upperCasedCharacters));
          i++;
        }
      }
      if (containNumber) {
        if (!isCharInArray(pass, numericCharacters)) {
          pass.push(getRandom(numericCharacters));
          i++;
        }
      }
      if (containSpecialChar) {
        if (!isCharInArray(pass, specialCharacters)) {
          pass.push(getRandom(specialCharacters));
          i++;
        }
      }
    }
  }
  return pass.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
