// write your DOM code here.
const calculate_button = document.querySelector(".calculate-button");
const inputCostPriceForBox = document.querySelector(".inputCostPriceForBox");
const inputNumberApples = document.querySelector(".inputNumberApples");
const inputPacketSize = document.querySelector(".inputPacketSize");
const inputRequiredProfit = document.querySelector(".inputRequiredProfit");

// DOM element references
// create Factory Function instance
const applePrice = ApplePrice();
// DOM events
function calculate() {
    console.log('inputCostPriceForBox', inputCostPriceForBox.value)
}


calculate_button.addEventListener('click', function () {
    applePrice.calculate();
});




calculate_button.addEventListener('click', calculate);



