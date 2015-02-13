/*
 Alfredo Douglas
 February 12, 2015
 Expressions Worksheet_Average Shopping Bill
 */

//Creating variables for givens
var price = 175;
var disc = 25;
var item = "cell phone";
var tax = 9.5;

//Variables as results
var total = price - (price * disc / 100);
//console.log(taxNo);
var totalTax = price - (price * disc / 100) + (total * tax / 100);
//console.log(totalTax);

//Final language
console.log("Your " + item + " was originally $" + price + "," + " but after a " + disc + "% discount, it is now $" + total + " without tax, and $" + totalTax + " with tax.");
