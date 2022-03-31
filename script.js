// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  // get the length of the password and send errors for bad input
  var len = getLength();
  if (len == 0 || isNaN(len)) {
    alert("invalid length chosen, try again!");
    return generatePassword();
  }

  // booleans for things to confirm
  var lowerCase = confirm("Include lower case characters?");
  var upperCase = confirm("Include upper case characters?");
  var numeric = confirm("include numbers?");
  var special = confirm("include special characters such as \",.!@\"?");

  // lists of valid characters
  var upperCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseList = "abcdefghijklmnopqrstuvwxyz";
  var numericList = "1234567890";
  var specialList = "!@#$%^&*()-_=+,<.>/?";

  // list of characters the user decided on
  var pickList = "";

  // add in the lists as appropriate
  if (lowerCase){
    pickList = pickList + lowerCaseList;
  }
  if (upperCase) {
    pickList = pickList + upperCaseList;
  }
  if (numeric){
    pickList = pickList + numericList;
  }
  if (special) {
    pickList = pickList + specialList;
  }

  // check to see if any were chosen
  if (pickList.length == 0) {
    alert("no characters are chosen! Try again!");
    return generatePassword();
  }

  // password string to return
  var ret = "";

  // adds a number of characters to ret equal to len
  for (var i = 0; i < len; i++){
    // gets a random character from pickList
    var randChar = randomChar(pickList);
    // adds it to ret
    ret = ret + randChar;
  }

  return ret;
};

/**
 * Gets the length of the password and returns it.
 * Returns 0 if input is invalid or if there's no input
 * @returns {number}
 */
function getLength(){
  var input = prompt("Give me a length from 5 to 128!");
  if (!input){
    alert("no input detected");
    return 0;
  }

  inputInt = parseInt(input);

  if (input < 5) {
    alert("input too small!");
    return 0;
  }

  if (input > 128){
    alert ("input too big");
    return 0;
  }

  return inputInt;
}

/**
 * Takes a list of characters and returns a random one from it
 * @param {string} charList 
 * @returns {char}
 */
function randomChar(charList){
  rand = Math.random() * charList.length;
  rand = Math.floor(rand);
  return charList.charAt(rand);
}

