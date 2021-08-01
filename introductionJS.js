var number=20;
console.log(number);
var age=14;
console.log(typeof(age));
var age1=14.5;
console.log(typeof(age1));
var st="hello"
console.log(typeof(st));
var isHot=true
console.log(typeof(isHot));
console.log(st.toLowerCase());
console.log(st.toUpperCase());

var number1=30;
var number2=20.5;
console.log(number1+number2);

var number3="30";
var number4=20.5;
console.log(number3+number4);

var number5=30;
var number6="20.5";

var newNumber6=parseInt(number6);
console.log(newNumber6+number5);
console.log(typeof(newNumber6+number5));

newNumber6=parseFloat(number6);
console.log(newNumber6+number5);
console.log(typeof(newNumber6+number5));

var number7=205.8;
num2String=''+number7;
console.log(typeof(num2String));

var num1=0.4;
var num2=0.2;
console.log(num1+num2);
total=num1+num2;
console.log(total.toFixed(3));

var st1="Good";
var st2="Morning";
console.log(st1+" "+st2);

var a=-5.67;
console.log(a);
console.log(Math.abs(a));

var a1=5.4;
var a2=5.6;
console.log(Math.round(a1));
console.log(Math.round(a2));
console.log(Math.floor(a2));
console.log(Math.ceil(a1));

var b=Math.random();
console.log(b);
b=Math.random()*100;
console.log(b);
b=Math.random()*1000;
changeB=Math.round(b);
console.log(changeB);