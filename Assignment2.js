/*1) To find the largest of five numbers, create a JavaScript conditional statement. Print the result. 
( only use conditional statement)*/

console.log("Program-1\n");

var num1=-5,num2=-2,num3=-6,num4=-1,num5=0;
if(num1>num2 && num1>num3 && num1>num4 && num1>num5)
{
    console.log(num1);
}
else if(num2>num1 && num2>num3 && num2>num4 && num2>num5)
{
    console.log(num2);
}
else if(num3>num1 && num3>num2 && num3>num4 && num3>num5)
{
    console.log(num3);
}
else if(num4>num1 && num4>num2 && num4>num3 && num4>num5)
{
    console.log(num4);
}
else
{
    console.log(num5);
}

/*2) Create a JavaScript program that iterates through the integers 1 through 100. However, for multiples 
of three, write "Ami" instead of the number, and for multiples of five, write "Tumi." Print "AmiTumi" for 
numbers that are multiples of three and five.*/

console.log("\nProgram-2\n");


for(var i=1;i<=100;i++)
{
    if(i%3==0 && i%5==0)
        console.log("AmiTumi");
    else if(i%3==0)
        console.log("Ami");
    else if(i%5==0)
        console.log("Tumi");
    else
        console.log(i);
}

/*3) Write a javascript program to add items to the beginning and delete from the beginning item of an array 
without using shift/unshift*/

console.log("\nProgram-3\n");

var arr=[1,2,3,4,5,6];
console.log("Before adding item at the beginning:");
console.log(arr);
for(var i=5;i>=0;i--)
{
    arr[i+1]=arr[i];
}
arr[0]=0;
console.log("After adding a zero at the beginning:");
console.log(arr);
for(var i=1;i<=6;i++)
{
    arr[i-1]=arr[i];
}
arr.pop();
console.log("After deleting an element from the beginning:");
console.log(arr);

/*4) Write a simple JavaScript program to join all elements of the following array into a string.Sample 
array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"RedGreenWhiteBlack"
"Red+Green+White+Black" */

console.log("\nProgram-4\n");

var myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
var str="";
for(var i=0;i<myColor.length;i++)
{
    str+=myColor[i];
}
console.log(str);
console.log(myColor.join('+'));

/*5) Write a JavaScript program to construct the following pattern, using a nested for loop. 
* 
* *
* * * 
* * * * 
* * * * *          */

console.log("\nProgram-5\n");

var star="";
for(var i=1;i<=5;i++)
{
    for(var j=1;j<=i;j++)
    {
        star+="* ";
    }
    star+="\n";
}
console.log(star);

/*6) Write a JavaScript function to find the first non-repeated character. Go to the editorSample 
arguments : 'abacddbec'
Expected output: 'e'*/

console.log("\nProgram-6\n");

var input="abacddbec";
var arr1 = input.split('');
for(var i=0;i<arr1.length;i++)
{
    var flag=0;
    for(var j=0;j<arr1.length;j++)
    {
        if(i!=j)
        {
            if(arr1[i]==arr1[j])
            {
                flag=1;
                break;
            }
        }
    }
    if(flag==0)
        console.log(arr1[i]);
}
console.log("\n");