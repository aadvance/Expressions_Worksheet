//Alfredo Douglas
//February 12, 2015
//Expressions Worksheet_Slice of Pie pt1

//List variables for number of people at party, how many slices per pizza, how many pizzas ordered
var peopleParty;
peopleParty = 30;
var pizzaSlice;
pizzaSlice = 12;
var pizzaOrdered;
pizzaOrdered =8;

//List resulting variable determining how many slices per person
var pizzaSlicePerson;
pizzaSlicePerson = pizzaSlice * pizzaOrdered / peopleParty;
console.log("Each person ate " + pizzaSlicePerson + " slices of pizza at the party")