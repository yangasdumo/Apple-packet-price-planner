const calculate_button = document.querySelector(".calculate-button");
const inputCostPriceForBox = document.querySelector(".inputCostPriceForBox");
const inputNumberApples = document.querySelector(".inputNumberApples");
const inputPacketSize = document.querySelector(".inputPacketSize");
const inputRequiredProfit = document.querySelector(".inputRequiredProfit");


const displayNumberOfPakets = document.querySelector("#displayNumberOfPakets");
const displayCostPerApple = document.querySelector("#displayCostPerApple");
const displayCostPricePerPacket = document.querySelector("#displayCostPricePerPacket");
const displayRecommendPacketPrice = document.querySelector("#displayRecommendPacketPrice");





const applePrice = ApplePrice();

function calculate() {
    numberOfPackets()
}


function costPricerPerApple() {
    
}

function costPricePerPacket() {
    
}

function numberOfPackets() {
    var numberOfPackets = 0;
    var numberOfPackets = inputNumberApples.value / inputPacketSize.value; 


    console.log('inputPacketSize.value', inputPacketSize.value)

    console.log('inputNumberApples.value', inputNumberApples.value)
    console.log('numberOfPackets', numberOfPackets)

    displayNumberOfPakets.innerHTML = numberOfPackets;

    
    
}

function  requiredProfitPercentage() {

    var profit = 0;
    displayRecommendPacketPrice.innerHTML = profit;
    
}



calculate_button.addEventListener('click', function () {
    applePrice.calculate();
});




calculate_button.addEventListener('click', calculate);



