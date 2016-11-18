// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

// Private variable to store the different meat prices
  var MeatPrices = {
  	"Ham": 1.00,
  	"Turkey": 1.00,
  	"Chicken": 1.25,
  	"Salami": 1.50,
  	"Bacon": .75
  };

// Augment the original object with another method
   maker.addMeat = function (meat) {
    return MeatPrices[meat];
  };  

// Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});