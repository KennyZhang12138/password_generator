//Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var yesAnswer = ["yes", "y"];
var noAnswer = ["no", "n"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//functions to generate password: 
function determineLength() {
  var passwordLength = prompt(
    "Choose how many characters long you'd like your password to be (between 8-128 characters): "
  );

  if (passwordLength < 8) {
    alert("Password length must be a number between 8-128 characters");
    determineLength();
  } else if (passwordLength > 128) {
    alert("Password length must be a number between 8-128 characters");
    determineLength();
  } else if (isNaN(passwordLength)) {
    alert("Password length must be a number between 8-128 characters");
    determineLength();
  } else {
    alert(
      "The next three screens will ask you what types of characters you would like to be included in your password.\nIf you choose 'No' for all, your password will only contain numbers."
    );
  }
  return passwordLength;
}

//Function used to determine whether the user wants to include uppercase characters in the password
function determineUppercase() {
  var hasUppercase = prompt(
    "Do you want to include uppercase letters in your password? \n(Yes or No)"
  );
  hasUppercase = hasUppercase.toLowerCase();

  if (hasUppercase === null || hasUppercase === "") {
    alert("Please answer Yes or No");
    determineUppercase();
  } else if (yesAnswer.includes(hasUppercase)) {
    hasUppercase = true;
    return hasUppercase;
  } else if (noAnswer.includes(hasUppercase)) {
    hasUppercase = false;
    return hasUppercase;
  } else {
    alert("Please answer Yes or No");
    determineUppercase();
  }
  return hasUppercase;
}

//Function used to determine whether the user wants to include numbers in the password
function determineLowecase() {
  var hasLowercase = prompt(
    "Do you want to include lowercase letters in your password? \n(Yes or No)"
  );
  hasLowercase = hasLowercase.toLowerCase();

  if (hasLowercase === null || hasLowercase === "") {
    alert("Please answer Yes or No");
    determineLowecase();
  } else if (yesAnswer.includes(hasLowercase)) {
    hasLowercase = true;
    return hasLowercase;
  } else if (noAnswer.includes(hasLowercase)) {
    hasLowercase = false;
    return hasLowercase;
  } else {
    alert("Please answer Yes or No");
    determineLowecase();
  }
  return hasLowercase;
}

//Function used to determine whether the user wants to include special characters in the password
function determineSpecial() {
  var hasSpecialChar = prompt(
    "Do you want to include special characters in your password? \n(Yes or No)"
  );
  hasSpecialChar = hasSpecialChar.toLowerCase();

  if (hasSpecialChar === null || hasSpecialChar === "") {
    alert("Please answer Yes or No");
    determineSpecial();
  } else if (yesAnswer.includes(hasSpecialChar)) {
    hasSpecialChar = true;
    return hasSpecialChar;
  } else if (noAnswer.includes(hasSpecialChar)) {
    hasSpecialChar = false;
    return hasSpecialChar;
  } else {
    alert("Please answer Yes or No");
    determineSpecial();
  }
  return hasSpecialChar;
}

//Function used to take all the input from the previous functions and generate a password using a random number generator and
//the charAt method
function generatePassword() {
  var passwordLength = determineLength();
  console.log(passwordLength);
  var hasUppercase = determineUppercase();
  console.log(hasUppercase);
  var hasLowercase = determineLowecase();
  console.log(hasLowercase);
  var hasSpecialChar = determineSpecial();
  console.log(hasSpecialChar);

  var characters = numberChar;
  var password = "";
  if (hasUppercase && hasLowercase && hasSpecialChar) {
    characters += uppercaseChar + lowercaseChar + specialChar;
  } else if (hasUppercase && hasLowercase) {
    characters += uppercaseChar + lowercaseChar;
  } else if (hasLowercase && hasSpecialChar) {
    characters += lowercaseChar + specialChar;
  } else if (hasUppercase && hasSpecialChar) {
    characters += uppercaseChar + specialChar;
  } else if (hasUppercase) {
    characters += uppercaseChar;
  } else if (hasLowercase) {
    characters += lowercaseChar;
  } else if (hasSpecialChar) {
    characters += specialChar;
  } else {
    characters === numberChar;
  }

  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}
