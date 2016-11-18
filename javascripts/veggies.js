var SandwichMaker = (function(maker) {
	var VeggiePrices = {
		"Lettuce": 0.05,
		"Tomato": 0.10,
		"Onion": 0.10,
		"Spinach": 0.15,
		"Cucumber": 0.05
	};
maker.addVeggies = function(veggie) {
	return VeggiePrices[veggie];
};
return maker;
})(SandwichMaker || {});