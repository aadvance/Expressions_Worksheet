/*
 Alfredo Douglas
 February 12, 2015
 Expressions Worksheet_Average Shopping Bill
 */

//Create array of different values for shopping totals over 5 weeks
var shoppingBills = [84, 75, 120, 95, 104];

//Total amount spent over those 5 weeks
var totalShopping = shoppingBills[0] + shoppingBills[1] + shoppingBills[2] + shoppingBills[3] + shoppingBills[4];
//console.log(totalShopping);

//Find average spent weekly of the total amount
var averageWeekly = totalShopping / 5;
//console.log(averageWeekly);

//Final language for console
console.log("You have spent a total of $" + totalShopping + " on groceries over 5 weeks. \nThat is an average of $" + averageWeekly + " per week.")