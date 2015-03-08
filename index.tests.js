'use strict';

//http://kwilson.me.uk/blog/use-karma-and-grunt-to-run-your-jasmine-tests-in-real-time/
describe("Counter tests", function(){
	it("Adds some value", function(){
		var num1 = 1;
		var num2 = 2;
		var expected = 3;

		var result = counter.add(num1, num2);
		expect(result).toBe(expected);
	});

	it("Adds all the arguments together", function(){
		var num1 = 1;
		var num2 = 2;
		var num3 = 3;
		var expected = 6;

		var result = counter.add(num1, num2, num3);
		expect(result).toBe(expected);
	});
});