let name1, personMass, personHeight;

name1 = prompt("Enter your name");
personMass = prompt(`Hello ${name1}, Enter your Mass`);
personHeight = prompt(`Hello ${name1}, Enter your Height`);

calcBMI = personMass / Math.pow(personHeight, 2);
console.log(calcBMI);
