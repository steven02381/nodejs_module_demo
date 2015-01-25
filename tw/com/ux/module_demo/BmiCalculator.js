
var Person = require('./Person.js');

function BmiCalculator(){}

BmiCalculator.calculate = function(height, weight){
    return weight/(height*height);
};

BmiCalculator.calculateFromPerson = function(person) {
    return this.calculate(person.height, person.weight);
};

module.exports = BmiCalculator;