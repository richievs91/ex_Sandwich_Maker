var SandwichMaker = (function(maker) {
	var CondimentPrices = {
		"Mayo": 0.10,
		"Mustard": 0.10,
		"Relish": 0.15,
		"Banana Peppers": 0.20,
		"Vinaigrette": 20
	};
maker.addCondiments = function(condiment) {
	return CondimentPrices[condiment];
};
return maker;
})(SandwichMaker || {});