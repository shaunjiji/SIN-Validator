const validateInput = (sin) => {
  sin = sin.replace(/\s+/g, ""); //use regex to remove whitespace if any

  //ensure input is 9 digits long
  if (sin.length !== 9) {
    console.log("SIN must only be 9 digits long");
    return false;
  }
  //ensure input only contains numbers
  if (sin.match(/^[0-9]+$/) === null) {
    console.log("SIN must only contain numbers");
  }
  return sin;
};

const validateSINInput = (sin) => {
  let sum = 0; //create variable called sum to keep track of total sum

  //iterate through string
  for (let i = 0; i < 9; i++) {
    const digit = parseInt(sin[i]); //convert current element to a number

    //multiply every 2nd digit by 2
    if (i % 2 === 1) {
      let multipliedDigit = digit * 2;

      //if multiplied value is over 9, seperate its individual values when added up
      if (multipliedDigit > 9) {
        //value will be between 10 and 18
        multipliedDigit =
          Math.floor(multipliedDigit / 10) + (multipliedDigit % 10);
        //multipliedDigit / 10 will always be 1, multipliedDigit % 10 will be the second digit
      }
      //add multipliedDigit to the total sum
      sum += multipliedDigit;
    } else {
      sum += digit; //every odd element can be added to total sum
    }
  }

  //SIN is valid if sum is divisible by 10
  return sum % 10 === 0 ? true : false;
};

module.exports = {
  validateInput,
  validateSINInput,
};
