/* (2) create 4 variables(int, float, string, boolean)  using the camel case method and assign them some 
values and print them.*/

var interegerTypeVariable = 100;
console.log(interegerTypeVariable);  //Integer
var floatTypeVariable = 100.112;
console.log(floatTypeVariable);      //Float
var stringTypeVariable = "Hello World";
console.log(stringTypeVariable);     //String
var booleanTypeVariable = true;
console.log(booleanTypeVariable);    //Boolean

/* (3) parse the variable which holds string data to the integer and add with the variable that holds 
integer data and print them. */

var number1=20;
var number2="500000";
var stringToNumber= parseInt(number2);   //parsing to integer from string
console.log(number1+stringToNumber);

// (4) Generate a random value from 10 to 20 and print them

var randomNumber= Math.random() * (20-10) + 10;   //random value generate
changeRandomNumber=Math.round(randomNumber);      //round
console.log(changeRandomNumber);
