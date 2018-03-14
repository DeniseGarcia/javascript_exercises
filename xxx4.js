function total(a,b)
	{
		result = a + b;
		return result;
	}

var num1 = parseInt(prompt("Enter a number"));
var num2 = parseInt(prompt("Enter another number"));

document.write("The answer to " + num1 + " plus " + num2 + " is " + total(num1,num2) + "<br>");