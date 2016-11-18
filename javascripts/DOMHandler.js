// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var breadChooser = document.getElementById("bread");
var meatChooser = document.getElementById("meat");
var cheeseChooser = document.getElementById("cheese");
var vegetableChooser = document.getElementById("vegetables");
var condimentsChooser = document.getElementById("condiments");
var sandwichPrice = document.getElementById("sandwichPrice");
var totalBtn = document.getElementById("totalBtn");

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/

breadChooser.addEventListener("change", function(event){
  // Get the value chosen from the DOM
	selectedTopping = event.target.value;
  // Add the topping to the SandwichMaker to increase the total price
	finalSandwichPrice = SandwichMaker.addTopping(SandwichMaker.addBread(selectedTopping));
});

meatChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  finalSandwichPrice = SandwichMaker.addTopping(SandwichMaker.addMeat(selectedTopping));

});

cheeseChooser.addEventListener("change", function(event) {
	selectedTopping = event.target.value;
	finalSandwichPrice = SandwichMaker.addTopping(SandwichMaker.addCheese(selectedTopping));
});

vegetableChooser.addEventListener("change", function(event) {
    selectedTopping = event.target.value;
    finalSandwichPrice = SandwichMaker.addTopping(SandwichMaker.addVeggies(selectedTopping));
});

condimentsChooser.addEventListener("change", function(event) {
	selectedTopping = event.target.value;
	finalSandwichPrice = SandwichMaker.addTopping(SandwichMaker.addCondiments(selectedTopping));
});

totalBtn.addEventListener("click", function(event) {
    sandwichPrice.innerHTML += "$" + finalSandwichPrice.toFixed(2);
 });















































