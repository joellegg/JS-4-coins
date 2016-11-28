/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/


// function for coin counting
function coinCounter() {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;
  // convert coins * 100 to get rid of decimals  
  // divide coins by 25 for quarters
  // divide remainder coins by 10 for dimes
  // divide remainder coins by 5 for nickels
  // divide remainder coins by 1 for pennies
  return coinPurse;
}
// get coinInput value from user
var coinInput = document.getElementById("coinInput").value;
console.log(coinInput);
coinCounter();