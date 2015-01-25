
var Person = require('./tw/com/ux/module_demo/Person.js');
var BmiCalculator = require('./tw/com/ux/module_demo/BmiCalculator.js');

(function(){
    var person = new Person(1.8, 70);
    console.log(person);
    console.log(BmiCalculator.calculate(person.height, person.weight));
    console.log(BmiCalculator.calculateFromPerson(person));
})();
