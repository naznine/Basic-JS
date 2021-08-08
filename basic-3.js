var num=100

switch(num)
{
    case 100: 
        console.log("I am A+.");
    case 90:
        console.log("I am A!.");
    case 80:
        console.log("I am A-.");
    case 70:
    case 60:
        console.log("I am B.");
    default:
        console.log("Unidentified.");
}

var num1=100

switch(num1)
{
    case 100: 
        console.log("I am A+.");
        break;
    case 90:
        console.log("I am A!.");
        break;
    case 80:
        console.log("I am A-.");
        break;
    case 70:
    case 60:
        console.log("I am B.");
        break;
    default:
        console.log("Unidentified.");
}

function add(num1,num2)
{
    return num1+num2;
}

var resultFromFunction= add(5.6,7)
console.log(resultFromFunction);

function add1(num1,num2)
{
    return num1+num2+num3;
}
var num3=100
var resultFromFunction1= add1(5.6,7)
console.log(resultFromFunction1);

function blockScope()
{
    let a=5;
    var b=7;
}
//console.log(a);
//console.log(b);

{
    let a=1;
    var b=2;
}
//console.log(a);
console.log(b);

const pi=3.1416
console.log(pi)
//pi=3.141556677
//console.log(pi)

var car={name:"BMW",price:"5000$",model:"21",color:"Black"}  //js object
console.log(car);
console.log(car.price)
console.log(car["price"])
var carModel="model";
console.log(car[carModel])

var car1={name:"BMW",price:"5000$",model:"21",color:"Black"}
car1.model=50
console.log(car1);
car1["color"]="white";
console.log(car1)