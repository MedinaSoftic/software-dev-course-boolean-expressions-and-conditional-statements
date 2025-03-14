/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

let hasTorch = true;
let hasMap = false;
let hasSword = true;
const hasArmor = false;
const hasCompass = true;

let playerName = readline.question("Welcome traveler, What is your name? ");
console.log(playerName + ", Seems you have passed out. You may have some tools in your satchel.");
console.log("You see two paths: one leads to the mountains, the other to the village.");
let choice = readline.question("Do you go to the 'mountains' or the 'village'? ").toLowerCase();

//Moutain Path
if (choice === 'mountains') {
    if (hasTorch) {
    console.log("You safely navigate through the dark mountains. You hear footsteps follow. Do you attack or let them approach? ");
    const mountainStranger = readline.question("'attack' or 'approach'? Please choose: ").toLowerCase();
    if (mountainStranger === 'attack' && (hasSword || hasArmor)) {
      console.log("You have attacked the stranger, They were a friend now turned enemy! Get ready to fight!\nThe stranger swings a sword at your arm! Luckily you state 'Tis but a scratch! The stranger swings the swordoun at the other arm!\nNow you have lost both arms!\nThe stranger tells you you've lost. You then say 'Tis but a flesh wound!'\nYOU HAVE LOST YOUR SWORD AND TORCH!\nYou ran away.");
      //Player loses items
      hasSword = false;
      hasTorch = false;

      choice = readline.question("Do you keep going in the 'mountains' or try to find the 'village'? ").toLowerCase();
    } else if (mountainStranger === "approach") {
      console.log("It\'s your friend! They will guide you to safety! You have WON!");
    }
  }
}
if (!hasTorch) {
  console.log("It's too dark to proceed. Lets find a torch!");
  const findTorch = readline.question("Do you look for the torch? ' Yes or No '").toLowerCase();
  if (findTorch === 'yes') {
    console.log("You look around and see an old torch! You light it up! You also found a Map!");
    hasTorch = true;
    hasMap = true;
  } else if (findTorch === 'no') {
    console.log(playerName + ", You have decided to stay in the dark...");
  }
}
    if (hasTorch && hasMap) {
    const goToVillage = readline.question("Should we go to the village? Yes or No? ").toLowerCase();
    if (goToVillage === 'yes') {
      choice = 'village';
    } else if (goToVillage === "no") {
      console.log(playerName + ", You have decided not to go...your fate has been sealed.");
    }
  }
//Village Path
if (choice === 'village' && hasTorch && hasMap) {
  console.log("You find your way to the village. " + playerName + ", You see the tavern. Let's get a drink?");
  const letsDrink = readline.question(" Yes or No? ").toLowerCase()
    if (letsDrink === 'yes') {
  console.log("After " + playerName + " enters the tavern, they drink all night! " + playerName + " wakes up so drunk that they notice the locals have robbed them blind.\n YOU LOST! Try again!");
    } else if (letsDrink === 'no') {
      console.log("Instead " + playerName + " goes back home and is able to see another day.\nGet some rest traveler. Welcome home!\nYOU WIN!");
    }
  } else if (choice === 'village' && hasSword) {
    console.log("You get lost and wander aimlessly till you fall ill of exhaustion. ");
}
console.log("Till Next time " + playerName + ".");


/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/