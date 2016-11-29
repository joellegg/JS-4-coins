// function for coin counting
function coinCounter() {
  // set the result of coinPurse to the HTML
  var unorderedList = document.getElementById("results");
  unorderedList.innerHTML = "";
  // Initialize a JavaScript object to hold the coins
  coinPurse = {};
    coinPurse.quarters = 0;
    coinPurse.dimes = 0;
    coinPurse.nickels = 0;
    coinPurse.pennies = 0;
  // get coinInput value from user and run function
  var coinInput = document.getElementById("coinInput").value;
  // print to console the value of the coinInput (in function at beginning so it gets the value)
  // console.log(coinInput);
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
  // set the result of coinPurse to the HTML
  unorderedList = document.getElementById("results");
  // loop through the coinPurse to get each key/property (in function)
  for (var prop in coinPurse) {
    // create list item
    var listItem = document.createElement("li");
    // add result to list item
    listItem.innerHTML = prop + ': ' + coinPurse[prop];
    // add list item to unordered list
    unorderedList.appendChild(listItem);
  }
  return coinPurse;
}

// add event handler to run the function 
var buttonChange = document.getElementById("buttonChange");
// execute function on click
buttonChange.addEventListener("click", coinCounter);





