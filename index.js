// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *    counter 1 defines variable within the fucntion scope conter two defines variable before the function
 * 2. Which of the two uses a closure? How can you tell?
 * The first one has a closure, because it has a function within a function.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *   1 is preferable when you want to have several different counts. In scenario 2 might be prefered if you want to later change the definition of count.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

   return Math.floor(Math.random()*3);

}

console.log(inning())
console.log(inning())
console.log(inning())

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, num){
    let home = 0;
    let away = 0;
     
    for (let i=0; i<num; i++){
      home += callback();
      away += callback();

    }
   
   return {
     'Home': home,
     'Away': away
   }
}

console.log(finalScore(inning, 8))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(cb,ni) {

  let home = 0;
  let away = 0;
  let message = [];
  let awayFinal = [];
  let homeFinal = [];

  for (let i=1; i<=ni; i++){
    
    if (i === 1) {
      message.push(`${[i]}st inning: ${away = cb()} - ${home = cb() }`);
      awayFinal.push(away);
      homeFinal.push(home);
    } else if (i === 2){ 
      message.push(`${[i]}nd inning: ${away = cb()} - ${home = cb() }`);
      awayFinal.push(away);
      homeFinal.push(home);
    } else if (i === 3){ 
      message.push(`${[i]}rd inning: ${away = cb()} - ${home = cb() }`);
      awayFinal.push(away);
      homeFinal.push(home);
    } else {
      message.push(`${[i]}th inning: ${away = cb()} - ${home = cb() }`);
      awayFinal.push(away);
      homeFinal.push(home);
    }
    
  }
  let awayFScore = awayFinal.reduce(function(rt, cv){
    return cv + rt;
  });
  let homeFScore = homeFinal.reduce(function(rt, cv){
    return cv + rt;
  });
  
  message.push(`Final Score: ${awayFScore} - ${homeFScore}`);
  return message;

}

console.log(scoreboard(inning, 9))