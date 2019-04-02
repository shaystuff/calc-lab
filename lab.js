var name = window.prompt("Please enter your name: ");
var greetingParagraph = document.getElementById("greeting");

greetingParagraph.innerHTML += ", " + name;

var operand1 = parseInt(window.prompt("Please enter the first operand: "));
var operand2 = parseInt(window.prompt("Please enter the second operand: "));

var oper1 = document.getElementById("operand1");
var oper2 = document.getElementById("operand2");

oper1.innerHTML += operand1;
oper2.innerHTML += operand2;

var sum = operand1 + operand2;
var difference = operand1 - operand2;
var product = operand1 * operand2;
var quotient = operand1 / operand2;
var modResult = operand1 % operand2;

document.getElementById("addition").innerHTML = "The sum of " + operand1 + " and " + operand2 + " equals " + sum + "."
document.getElementById("subtraction").innerHTML = "The difference of " + operand1 + " and " + operand2 + " equals " + difference + "."
document.getElementById("multiplication").innerHTML = "The product of " + operand1 + " and " + operand2 + " equals " + product + "."
document.getElementById("division").innerHTML = "The quotient of " + operand1 + " and " + operand2 + " equals " + quotient + "."
document.getElementById("modulus").innerHTML = "The modulus of " + operand1 + " and " + operand2 + " equals " + modResult + "."