var digit=1234
var digit="abcd"
console.log(digit)
/*let a=1234
let a="abcd"
console.log(a)*/

var numArray=[]
for(var i=0;i<3;i++)
{
    numArray.push(i);
}
console.log(numArray)
console.log(i)

/*var Array2=[]
for(let j=0;j<3;j++)
{
    Array2.push(j);
}
console.log(Array2)
console.log(j)*/

const v=8;
//v+=1;
//console.log(v)

const s=[1,,3,4,5,6];
console.log(s)
s[1]="hi"
s[4]="hello"    //partially change possible
s.push(8)
console.log(s)
//s=['a','b','c']   //full change not possible
//console.log(s)

let obj={
    name:"Mansura",
    dept:"CSE"
};
Object.freeze(obj)
console.log(obj)
obj.name="Kanchon"
console.log(obj)

const myFunction = function(){
    const a="MN"
    console.log(a)
}
myFunction()

const myFunction2 = () => {
    const a2="MN2"
    console.log(a2);
}
myFunction2()

const myFunction3 = () => 6
console.log(myFunction3())

const doubler=(item)=> item*2
console.log(doubler(4))

const doubler2=(item,item1)=> (item*2)+item1
console.log(doubler2(4,10))

function add(item1,item2=0){
    return item1+item2;
}
console.log(add(2))
console.log(add(2,5))

const add2=(n1,n2=0)=>{
    return n1+n2
}
console.log(add2(2))
console.log(add2(2,5))

function howMany(...args){
    return "You have passed "+args.length+" arguments"
}
console.log(howMany(1,2,3,4,5,6,7,8))

var arr=[2,3,4,5,200]
var maximum=Math.max(arr) //object hisebe dhore...tai max asbe na
console.log(typeof(arr))
console.log(maximum)

var arr2=[2,3,4,5,200]
var maximum2=Math.max(...arr2) //object k split kore max anbe
console.log(maximum2)
console.log(typeof(maximum2))

const user={
    name:"Mansura",
    age:"21"
}
//const userName=user.name
//const userAge=user.age

//console.log(userName,userAge)     //type-1

//const{name,age}=user
//console.log(name,age)                //type-2 

const{name:userName,age:userAge}=user
console.log(userName,userAge)          //type-3

const person={
    name:"Mansura",
    age:"21"
}
//console.log("Hello "+person.name+",your age is "+person.age)
console.log(`Hello ${person.name}
your age is ${person.age}`)

const person1={
    name:"Mansura",
    age:"21",

    sayHello: function(){
        return `hello, my name is ${this.name}`
    }
}
console.log(person1.sayHello())