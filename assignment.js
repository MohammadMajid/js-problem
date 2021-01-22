// 1. Kilometer to Meter conversion

function kilometerToMeter(kilometer) {
  let meter = kilometer * 1000;
  let kilometerFix = meter.toFixed(4);

  if (kilometer < 0) {
    return "Input can't be less than zero for distance";
  } else {
    return kilometerFix;
  }
}

console.log(kilometerToMeter(1000));
/************************************************************************************/

// 2. Calculate budget for watch, phone and laptop

function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop) {
  let eachWatchPrice = numberOfWatch * 50;
  let eachPhonePrice = numberOfPhone * 100;
  let eachlaptopPrice = numberOfLaptop * 500;
  let totalPrice = eachWatchPrice + eachPhonePrice + eachlaptopPrice;

  if (numberOfWatch < 0 || numberOfPhone < 0 || numberOfLaptop < 0) {
    return "Input can't be less than zero";
  } else {
    return totalPrice;
  }
}

console.log(budgetCalculator(2, 2, 5));
console.log(budgetCalculator(0, 2, 0));
console.log(budgetCalculator(-1, 2, 5));
/************************************************************************************/

// 3. Hotel Cost
function hotelCost(numberOfDays) {
  if (numberOfDays < 1) {
    return "Please enter a valid number of day";
  } else if (numberOfDays >= 1 && numberOfDays <= 10) {
    return numberOfDays * 100;
  } else if (numberOfDays >= 11 && numberOfDays <= 20) {
    return 80 * (numberOfDays - 10) + 10 * 100;
  } else {
    return 50 * (numberOfDays - 20) + 80 * 10 + 10 * 100;
  }
}

console.log(hotelCost(5));
console.log(hotelCost(15));
console.log(hotelCost(21));
console.log(hotelCost(-1));
/************************************************************************************/

// 4. Mega Friend:
// Return friend with largest name

var friendName = [
  "Nafiul",
  "Mohammad Majid",
  "Drew",
  "Kait",
  "Kelley",
  "Marie",
  "Steve Jobs",
];

function megaFriend(nameArray) {
  let largest = nameArray[0];

  if (nameArray.length > 0) {
    for (let i = 0; i < nameArray.length; i++) {
      let element = nameArray[i];
      if (typeof element === "string" && element.length > largest.length) {
        largest = element;
      }
    }
    return largest;
  } else {
    return "Please enter names in array";
  }
}

console.log(megaFriend(friendName));
/************************************************************************************/
