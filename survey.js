const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)\n", (answer1) => {
  rl.question("What's an activity you like doing?\n", (answer2) => {
    rl.question("What do you listen to while doing that?\n", (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)\n", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal?\n", (answer5) => {
          rl.question("Which sport is your absolute favourite?\n", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!\n", (answer7) => {
              console.log(`\nThanks for your feedback ${answer1}!\nYou like ${answer2} while listening to ${answer3}?\nThat sounds fun.\nHaving ${answer5} for ${answer4} is delicious!\nYou like ${answer6}.\nAnd your superpower is: ${answer7}.\nDon't worry, your secret is safe with us!`);
              rl.close();
            });
          });
        });
      });
    });
  });
});