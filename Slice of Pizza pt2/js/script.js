/*
 Alfredo Douglas
 February 12, 2015
 Expressions Worksheet_Slice of Pie pt2
 */

//List variables for number of people at party, how many slices per pizza, how many pizzas ordered
var peopleParty;
peopleParty = 10;
var pizzaSlice;
pizzaSlice = 8;
var pizzaOrdered;
pizzaOrdered =4;

//Adding extra slices for Sparky
var sparkySlices = pizzaOrdered * pizzaSlice % peopleParty;
console.log(sparkySlices);
