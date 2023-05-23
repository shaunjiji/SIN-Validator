const helpers = require("./helpers");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Please enter a SIN number: `, (sin) => {
  sinValidator(sin);
  readline.close();
});

function sinValidator(sin) {
  let validatedInput = helpers.validateInput(sin); //validated input is stored in this variable

  if (helpers.validateSINInput(validatedInput)) {
    console.log("SIN is valid");
  } else {
    console.log("SIN is invalid");
  }
}
