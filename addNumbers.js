const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  
  if (numsLeft > 0) {
    reader.question("Give me a number ", answer => {
      sum += parseInt(answer);
      console.log(`partial sum = ${sum}`);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  }
  
  if (numsLeft === 0) {
    completionCallback(sum);
    reader.close();
  }

  console.log("hello");
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
