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

var passwordLength = 0;

// Function to prompt user for password options
function getPasswordOptions() {
  const charTypes = ['Lowercase','Uppercase','Numeric','Special'];
  const characters = [lowerCasedCharacters,upperCasedCharacters,numericCharacters,specialCharacters];

  let yourpassword = [];
  let criteria = 0;

  for (let i = 0; i < charTypes.length; i++) {
    let charType = charTypes[i];
    let confirmPasswordOption = confirm(`Click OK to confirm including ${charType} characters.`);

    if(confirmPasswordOption){
      yourpassword = yourpassword.concat(characters[i]);
      criteria++;
    }
  }

  if(criteria > 0){
    return getRandom(yourpassword);
  }else{
    alert('You have not selected password criteria. At least one character type should be selected.');
    return '';
  }
  
}

// Function for getting a random element from an array
function getRandom(arr) {
  let password = '';
  for (let x = 0; x < passwordLength; x++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    password += arr[randomIndex];
  }
  return password;
}

// Function to generate password with user input
function generatePassword() {
  passwordLength = parseInt(prompt('How many characters would you like your password to contain?'));

  if(passwordLength >= 8 && passwordLength <= 128){
    return getPasswordOptions();
  }
  else{
    alert('Password length must be at least 8 characters.');
    return '';
  }

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