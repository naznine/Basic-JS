var cgpa= 3.4;

if (cgpa>=3.5) {
    console.log("Shaadi mubarak");
} else {
    console.log("Wait");
}

var exploreDate=new Date();
console.log(exploreDate);

var exploreDate1=new Date(4-8-2021);
console.log(exploreDate1);

var friend=["ab","bc","cd"];
console.log(friend);
console.log(friend[0]);
console.log(friend.indexOf("bc"));
console.log(friend.length)
friend.push("fahim");
console.log(friend);
friend.unshift("mansura");
console.log(friend);
friend.pop();
console.log(friend);
friend.shift();
console.log(friend);

var num=[2,3,1,5,6,3,8];
console.log(num.sort());

var numA=[2,3,1,5,6,3,8];
var partNumA=numA.slice(2);
console.log(partNumA);
partNumA=numA.slice(2,6);
console.log(partNumA);

var age=23;
while(age<25)
{
    console.log("You are not eligible for covid vaccine");
    age++;
}