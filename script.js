// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password criteria

var criteriaArr = [];
var specialChar = "!()?[]`;:@#$%^&";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = lowerChar.toUpperCase();
var numberChar = "1234567890";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Initialize password generation - how many characters?
function generatePassword() {
  var passLength = prompt("How long do you want your password to be? (Enter between 8 and 128 characters)");
  if (passLength === null) {
    alert("FAILED");
    // clearTimeout;
  }
  else if (passLength >= 8 && passLength <= 128) {
    criteriaArr.push(passLength);
    criteriaSelect();
  }
  else if (!(passLength >= 8 && passLength <= 128)) {
    alert("You didn't enter a number between 8 and 128.");
    generatePassword();
  }
  // How do I get the alert window's "Cancel" to trigger the else?
}

// Choose password character types
function criteriaSelect() {
  var incSpecial = confirm("Should this password include special characters?");
  var incUpper = confirm("Should this password include upper case letters?");
  var incNumber = confirm("Should this password include numbers?");
  // Why don't the below "if" statements push "false" data from the above variables into criteriaArr??
  if (incSpecial) {
    criteriaArr.push(true);
  }
  if (!(incSpecial)) {
    criteriaArr.push(false);
  }
  if (incUpper) {
    criteriaArr.push(true);
  }
  if (!(incUpper)) {
    criteriaArr.push(false);
  }
  if (incNumber) {
    criteriaArr.push(true);
  }
  if (!(incNumber)) {
    criteriaArr.push(false);
  }
  verifyCriteria();
}

  
// Veryfy password criteria selections
function verifyCriteria() {
  var ver = criteriaArr.includes(true);
  if (ver) {
    // Figure out steps to take if true... Run randomizer function??
  }
  else if (!(ver)) {
  var warn = confirm("WARNING! You did not include any special, upper case, or numerical characters. Excluding these will produce a weak password using only lower case letters. Click OK to proceed or click Cancel to start over.")
  // Nest another if else Here...
    if (warn) {
      alert("ok clicked");
    }
    else {
      alert("cancel clicked");
      criteriaArr = [];
    }
  }
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}







