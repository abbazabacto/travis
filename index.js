var counter = new Counter();

function Counter(){}

Counter.prototype.add = function(){
	var sum = 0;
	for (var i = 0, len = arguments.length; i < len; i++){
		sum += arguments[i];
	}
	return sum;
};

Counter.prototype.substract = function(){
	var sum = 0;
	for (var i = 0, len = arguments.length; i < len; i++){
		sum -= arguments[i];
	}
	return sum;
};