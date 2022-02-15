// Varible gameState is used to organize steps through game
// 0 - initial state
// 1 - roll dice for player 1 and ask for dice order
// 2 - validate input for player 1 and calculate score
// 3 - roll dice for player 2 and ask for dice order
// 4 - validate input for player 2 and calculate score, also print out who won and statistics
// 5 - invite for another round
var gameState = 0;

// Variable for responding to user
var message = "";

// Dice order 1 - first dice is left number, 2 - second dice is left number
var player1DiceOrder = 0;
var player2DiceOrder = 0;

// Number of games played
var totalGames = 0;

// Number of players wins
var player1Won = 0;
var player2Won = 0;

// Dices values
var player1Dice = [0, 0];
var player2Dice = [0, 0];

// Score after deciding dice order
var player1Score = 0;
var player2Score = 0;

// Return random number from 1 to 6
var randomDice = function (){
  return Math.ceil(Math.random(6));
}

// Check, if player responded with allowed input for dice order
var validatePlayerInput = function (input){
  if (input == 1 || input == 2){
    return true;
  }
  else {
    return false;
  }
}

// Calculate score
var calculateScore = function (dice1, dice2, order){
  if (order == 1) {
    return dice1 * 10 + dice2;
  }
  else if (order == 2) {
    return dice2 * 10 + dice1;
  }
  return 0;
}

var main = function (input) {

  if (gameState == 0) {
    message = `Welcome to Beat That game! <br><br>`;
    message += `Press button to roll dice for player 1`;
    gameState += 1;
    return message;
  }

  if (gameState == 1) 
    player1Dice[0] = randomDice();
    player1Dice[1] = randomDice();
    message = `Welcome Player 1.<br>`;
    message += `You rolled ${player1Dice[0]} for Dice 1 and ${player1Dice[1]} for Dice 2.<br>`;
    message += `Choose the order for the dice.`
    gameState += 1;
    return message;
  }

  if (gameState == 2) {
    input = parseInt(input);
    if (!validatePlayerInput(input)){
      return `Please respond only with numer 1 or 2`;
    }
    player1DiceOrder = parseInt(input);
    player1Score = calculateScore(player1Dice[0], player1Dice[1], player1DiceOrder);
    message = `Player 1, you chose Dice ${player1DiceOrder} first.<br>`;
    message += `Your number is ${player1Score}.<br>`;
    message += `It is now Player 2's turn.`;
    gameState += 1;
    return message;
  }

  if (gameState == 3) {
    player2Dice[0] = randomDice();
    player2Dice[1] = randomDice();
    message = `Welcome Player 2.<br>`;
    message += `You rolled ${player2Dice[0]} for Dice 1 and ${player2Dice[1]} for Dice 2.<br>`;
    message += `Choose the order for the dice.`
    gameState += 1;
    return message;
  }

  if (gameState == 4) {
    input = parseInt(input);
    if (!validatePlayerInput(input)){
      return `Please respond only with numer 1 or 2`;
    }
    player2DiceOrder = input;
    player2Score = calculateScore(player2Dice[0], player2Dice[1], player2DiceOrder);
    message = `Player 2, you chose Dice ${player2DiceOrder} first.<br>`;
    message += `Your number is ${player2Score}.<br><br>`;

    if (player1Score == player2Score) {
      message += `It's a tie.`;
    } else if (player1Score > player2Score) {
      player1Won += 1;
      message += `Player 1 won this round with ${player1Score} vs ${player2Score}!<br><br>`;
      message += `Player 1 won ${player1Won} times.<br>`;
      message += `Player 2 won ${player2Won} times.<br>`;
      message += `Total`
    }
    totalGames += 1;

    gameState += 1;
  }

  if (gameState == 5) {
    gameState = 1;
  }
};
