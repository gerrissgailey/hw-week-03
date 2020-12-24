// Assignment Code
var generateBtn = document.querySelector("#generate");


// User inputs
var passLength = [];
var criteriaArr = [];

// Password criteria
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar = ["!", "(", ")", "?", "[", "]", "`", ";", ":", "@", "#", "$", "%", "^", "&"];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Initialize password generation - how many characters?
function generatePassword() {
  passLength = prompt("How long do you want your password to be? (Enter between 8 and 128 characters)");
  // If user clicks cancel, then abort the generatePassword function
  if (passLength === null) {
    return alert("Password Generator Cancelled");
  }
  // If user enters incorrect length...
  else if (!(passLength >= 8 && passLength <= 128)) {
    alert("You didn't enter a number between 8 and 128.");
    return generatePassword();
  }

  // Choose password character type.
    var incLower = confirm("Should this password include lower case letters");
    var incUpper = confirm("Should this password include upper case letters?");
    var incNumber = confirm("Should this password include numbers?");
    var incSpecial = confirm("Should this password include special characters?");
  

  // Only run password generator if user selects options from below criteria to use.
  if (incLower) {
    criteriaArr=criteriaArr.concat(lowerChar);
  }
  if (incUpper) {
    criteriaArr=criteriaArr.concat(upperChar);
  }
  if (incNumber) {
    criteriaArr=criteriaArr.concat(numberChar);
  }
  if (incSpecial) {
    criteriaArr=criteriaArr.concat(specialChar);
  }
  if (!incLower && !incUpper && !incNumber && !incSpecial) {
    alert("You must choose at least one criteria!");
    return generatePassword();
  };

  var collectPass = "";
  console.log(criteriaArr);

  //Randomly choose password characters based on the criteria selected.
  for (var i = 0; i < passLength; i++) {
    var randomChars = criteriaArr[Math.floor(Math.random() * criteriaArr.length)];
    collectPass+=randomChars;
  }
  
  return collectPass
}





