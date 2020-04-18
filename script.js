var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
character = ["!", "@,", "#", "$", "%", "^",  "&",  "*"];
alphaL = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
alphaU = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var choices;
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

function generatePassword() {
enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
if (!enter) {
    alert("This needs a value");
} 
else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You must choose between 8 and 128"));
} 
else {
      confirmNumber = confirm("Will this contain numbers?");
      confirmCharacter = confirm("Will this contain special characters?");
      confirmUppercase = confirm("Will this contain Uppercase letters?");
      confirmLowercase = confirm("Will this contain Lowercase letters?");
}
if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose a criteria!");
}

else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
  choices = character.concat(number, alphaL, alphaU);
}
else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, alphaU);
}
else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alphaL);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(alphaL, alphaU);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(alphaL, alphaU);
}
else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);
} 
else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(alphaL);
} 
else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(alphaU);
}
else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(number);
} 
else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(alphaU);
} 
else if (confirmNumber && confirmUppercase) {
    choices = number.concat(alphaU);
}
else if (confirmNumber) {
    choices = number;
}
else if (confirmCharacter) {
  choices = character;
}
else if (confirmLowercase) {
    choices = alpha;
}
else if (confirmUppercase) {
    choices = alphaU;
};

var password = [];
for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
}
var ps = password.join("");
UserInput(ps);
return ps;
}

function UserInput(ps) {
document.getElementById("password").textContent = ps;
}