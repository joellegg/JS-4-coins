// function for coin counting
function coinCounter() {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;
  // convert coins * 100 to get rid of decimals 
  coinInput = coinInput * 100; 
  // divide coins by 25 for quarters
  if (coinInput >= 25) {
    coinPurse.quarters = Math.floor(coinInput / 25);
    coinInput -= (coinPurse.quarters * 25);
  }
  // divide remainder coins by 10 for dimes
  if (coinInput >= 10) {
    coinPurse.dimes = Math.floor(coinInput / 10)
    coinInput -= (coinPurse.dimes * 10)
  }
  // divide remainder coins by 5 for nickels
  if (coinInput >= 5) {
    coinPurse.nickels = Math.floor(coinInput / 5)
    coinInput -= (coinPurse.nickels * 5)
  }
  // coinInput should now equal number of pennies
  if (coinInput >= 1) {
    coinPurse.pennies = coinInput
  }
  return coinPurse;
}
// get coinInput value from user
var coinInput = document.getElementById("coinInput");
console.log(coinInput);
coinCounter();