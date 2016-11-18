var SandwichMaker = (function(maker) {
	
	var breadPrices = {
		"Wheat": .75,
		"White": .50,
		"Rye": .50,
		"French": .60,
		"Multigrain": .75 
	};
 maker.addBread = function (bread) {
    return breadPrices[bread];
  };
return maker;
})(SandwichMaker || {});