var SandwichMaker = (function(maker) {
	var CheesePrices = {
		"American": 1.00,
		"Mozzarella": 1.25,
		"Swiss": 1.00,
		"Provolone": 1.00,
		"Pepperjack": 1.00,
	};
maker.addCheese = function(cheese) {
	return CheesePrices[cheese];
};
return maker;
})(SandwichMaker || {});