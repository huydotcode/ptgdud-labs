/**
 * JavaScript Fundamentals – Part 2
 */
// Coding Challenge #1
console.log(`
    JavaScript Fundamentals – Part 1
 `);
/**
 * JavaScript Fundamentals – Part 1 - Coding Challenge #1
 */
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = parseInt(markWeight / markHeight ** 2);
let johnBMI = parseInt(johnWeight / johnHeight ** 2);

let markHigherBMI = markBMI > johnBMI;

// Data 2
markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markBMI = parseInt(markWeight / markHeight ** 2);
johnBMI = parseInt(johnWeight / johnHeight ** 2);

markHigherBMI2 = markBMI > johnBMI;
console.log("markHigherBMI2", markHigherBMI2);

/**
 * JavaScript Fundamentals – Part 1 - Coding Challenge #2
 */
console.log("Coding Challenge #2");
if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
}

if (markHigherBMI2) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
}

/**
 * JavaScript Fundamentals – Part 1 - Coding Challenge #3
 */
// Data 1
let dophinsScores = [96, 108, 89];
let koalasScores = [88, 91, 110];

// Data Bonus 1
let dophinsScores1 = [97, 112, 101];
let koalasScores1 = [109, 95, 123];

// Data Bonus 2
let dophinsScores2 = [97, 112, 101];
let koalasScores2 = [109, 95, 106];

function getWinner(dophinsScores, koalasScores) {
  let dophinsAvgScore =
    dophinsScores.reduce((acc, score) => acc + score, 0) / dophinsScores.length;
  let koalasAvgScore =
    koalasScores.reduce((acc, score) => acc + score, 0) / koalasScores.length;

  if (dophinsAvgScore > koalasAvgScore && dophinsAvgScore >= 100) {
    console.log(`Dolphins win with an average score of ${dophinsAvgScore}`);
  } else if (koalasAvgScore > dophinsAvgScore && koalasAvgScore >= 100) {
    console.log(`Koalas win with an average score of ${koalasAvgScore}`);
  } else if (dophinsAvgScore === koalasAvgScore && dophinsAvgScore >= 100) {
    console.log(`It's a draw with an average score of ${dophinsAvgScore}`);
  } else {
    console.log(`No team wins the trophy`);
  }
}

getWinner(dophinsScores, koalasScores);
getWinner(dophinsScores1, koalasScores1);
getWinner(dophinsScores2, koalasScores2);

/**
 * JavaScript Fundamentals – Part 1 - Coding Challenge #4
 */
console.log("Coding Challenge #4");
let tip;

function calculatorTip(billValue) {
  tip =
    billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
  return `The bill was ${billValue}, the tip was ${tip}, and the total value ${
    billValue + tip
  }`;
}

console.log(calculatorTip(275));

/**
 * JavaScript Fundamentals – Part 2 - Coding Challenge #1
 */
console.log(`
   JavaScript Fundamentals – Part 2 
`);
console.log("Coding Challenge #1");

const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

// Data 1
let dophinsScore1 = [44, 23, 71];
let avgDophinsScore1 = calcAverage(...dophinsScore1);

let koalasScore1 = [65, 54, 49];
let avgKoalasScore1 = calcAverage(...koalasScore1);

// Data 2
let dophinsScore2 = [85, 54, 41];
let avgDophinsScore2 = calcAverage(...dophinsScore2);

let koalasScore2 = [23, 34, 27];
let avgKoalasScore2 = calcAverage(...koalasScore2);

const checkWinner = (avgDophinsScore, avgKoalasScore) => {
  if (avgDophinsScore >= 2 * avgKoalasScore) {
    console.log(`Dolphins win (${avgDophinsScore} vs. ${avgKoalasScore})`);
  } else if (avgKoalasScore >= 2 * avgDophinsScore) {
    console.log(`Koalas win (${avgKoalasScore} vs. ${avgDophinsScore})`);
  }
};

checkWinner(avgDophinsScore1, avgKoalasScore1);
checkWinner(avgDophinsScore2, avgKoalasScore2);

/**
 * JavaScript Fundamentals – Part 2 - Coding Challenge #2
 */
console.log("Coding Challenge #2");

const calcTip = (billValue) => {
  return billValue >= 50 && billValue <= 300
    ? billValue * 0.15
    : billValue * 0.2;
};

const bills = [125, 555, 44];
const tips = bills.map((bill) => calcTip(bill));
const total = bills.map((bill, index) => bill + tips[index]);

console.log("bills", bills);
console.log("tips", tips);
console.log("total", total);

/**
 * JavaScript Fundamentals – Part 2 - Coding Challenge #3
 */
console.log("Coding Challenge #3");

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.BMI > john.BMI) {
  console.log(
    `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})`
  );
}

/**
 * JavaScript Fundamentals – Part 2 - Coding Challenge #4
 */
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays �
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
console.log("Coding Challenge #4");
const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];

for (let i = 0; i < bills2.length; i++) {
  tips2.push(calcTip(bills2[i]));
}

console.log("bills2", bills2);
console.log("tips2", tips2);

const totals = [];
for (let i = 0; i < bills2.length; i++) {
  totals.push(bills2[i] + tips2[i]);
}

console.log("totals", totals);

const calcAverage2 = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};

console.log("calcAverage2", calcAverage2(totals));

/**
 * Developer Skills & Editor Setup
 */

/** Coding Challenge #1 */
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1
// days ... 21oC in 2 days ... 23oC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]
console.log(`
    Developer Skills & Editor Setup
`);
console.log("Coding Challenge #1");

const printForecast = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}oC in ${i + 1} days `;
  }
  console.log(str);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);

/**
 * JavaScript in the Browser: DOM and Events
 */
console.log(`
    JavaScript in the Browser: DOM and Events
`);
/** Coding Challenge #1 */
console.log("Coding challenge #1");
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
