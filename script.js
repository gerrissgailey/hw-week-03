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

  // Clear the criteria array from any characters concatinated to it from the previous run of the password generator. (Only necessary if browser page hasn't been reloaded).
  criteriaArr.length = 0;
}

// Function for shuffling the final collection of password characters
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
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
  
  // Collection of guaranteed characters based on user input. Ensures at least one of each selected character type makes it into the randomized password.
  var guaranteedChars = [];
  console.log(guaranteedChars);
  // Only run password generator if user selects options from below criteria to use.
  if (incLower) {
    criteriaArr=criteriaArr.concat(lowerChar);
    guaranteedChars.push(lowerChar[Math.floor(Math.random() * lowerChar.length)])
  }
  if (incUpper) {
    criteriaArr=criteriaArr.concat(upperChar);
    guaranteedChars.push(upperChar[Math.floor(Math.random() * upperChar.length)])
  }
  if (incNumber) {
    criteriaArr=criteriaArr.concat(numberChar);
    guaranteedChars.push(numberChar[Math.floor(Math.random() * numberChar.length)])
  }
  if (incSpecial) {
    criteriaArr=criteriaArr.concat(specialChar);
    guaranteedChars.push(specialChar[Math.floor(Math.random() * specialChar.length)])
  }
  if (!incLower && !incUpper && !incNumber && !incSpecial) {
    alert("You must choose at least one criteria!");
    return generatePassword();
  };

  var collectPass = "";
  console.log(criteriaArr);
  // Randomly choose password characters based on the criteria selected.
  for (var i = 0; i < passLength; i++) {
    var randomChars = criteriaArr[Math.floor(Math.random() * criteriaArr.length)];
    collectPass+=randomChars;
  }

  var blendPass = collectPass.split("")
  console.log(blendPass);
  // Blend guaranteed characters with random characters
  for (var i = 0; i < guaranteedChars.length; i++) {
    blendPass[i] = guaranteedChars[i]
  }
  
  console.log(blendPass);
  
  shuffle(blendPass);
  console.log(blendPass);

  // Checking where characters are going...
  // console.log(collectPass);
  // console.log(collectPass.split);
  // console.log(blendPass[i]);
  // console.log(guaranteedChars[i]);
  
  return blendPass.join("");
}



