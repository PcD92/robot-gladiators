// this creates a function named "fight" 
//function fight() {
//  window.alert("The fight has begun!");
//console.log(fight);
//}
// created variable to prompt robot's "name"
//var playerAge = 50;
//var playerName = window.prompt("what is your robot's name?"); {
//console.log(playerName);
//console.log("This logs a string, good for leaving yourself a message");
//this will do math and log 20
//console.log(20 + 20);
// what is this?
//console.log("Our robot's name is " + playerName + " and is " + playerAge);
//}

//var playerName = "Tony the Robot"; {
//  console.log(playerName);
// Tony the Robot is ready for battle
//console.log(playerName + " is ready for battle!");
//Tony the Robot is ready for battle!
// console.log(playerName + " ready for battle!");
//"Your robot, Tony the Robot, has won!"
//console.log("Your robot, " + playerName + ", has won!");
//}

//var name = "your name";
//console.log(name);

////////////////////////////
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );


    // check to see if the value of the playerHealth variable is greater than 0
    if (playerHealth > 0) {
        console.log("Your player is still alive!");
    }
};

fight();