// CHAPTER #1

// TASK#1
alert("Welcome To My Website");

// TASK#2
alert("Error! Please enter a valid Password.");

// TASK#3
alert("Welcome to JS Land... \rHappy codding!");

// TASK#4
alert("Welcome to JS Land...");
alert("Prevent this page from creating additional dialogs.");

// TASK#5
console.log("Hello... I can run JS through my web browser's consloe.")


// CHAPTER #2

// TASK #1
var username;

// TASK #2
var myName="Muhammad Zeeshan Ali";

// TASK #3
var message="Hello World";
alert(message);


// TASK #4
var name="Jhon Doe";
var age="15 Years Old";
var course="Certified Mobile Application Development";
alert(name);
alert(age);
alert(course);


// TASK #5
var p="PIZZA";
var q="PIZZ";
var r="PIZ";
var s="PI";
var t="P";
alert(p+"\r"+q+"\r"+r+"\r"+s+"\r"+t)


// TASK #6
var email="muhammadzeeshanali8@gmail.com";
alert("My email address is "+email);


// TASK #7
var book="A smarter way to learn JavaScript";
alert("I am trying to learn from the book "+book);


// TASK #8
document.write("Yah! I can write HTML content through JavaScript.")


// TASK #9
var design="▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
alert(design);


// CHAPTER #3
// TASK #1
var age=22;
alert("I am "+age+" years old");


// TASK #2
var number=5;
alert("You have visited this site "+number+" times");


// TASK #3
var birthYear=1998;
document.write("My birth Year is "+birthYear +"<br> Data type of my decleared variable is number")


// TASK #4
var visitorName="John Doe";
var productTitle="T-Shirt";
var quantity="1";
document.write(visitorName.bold()+" ordered "+quantity.bold()+" "+productTitle.bold()+" on XYZ Clothing store");



// CHAPTER #4

// TASK #1

var x,y,z;

// TASK #2

var _ali, $ali, ali, Ali_12ah, ali_123;
var .ali, #ali , 3ali, /Ali, &ali;

// TASK #3

document.write("<h1> Rules for naming JS variables </h1> <br>")
document.write("<br> Variable names can only contain, number , $ and _. For example $my_1stVariable <br>")
document.write("Variables must begin with a letter, $ or _. For example $name, _name or name <br>")
document.write("Variable names are case sensitive. <br>")
document.write("Variable names should not be JS keywird. <br>")



// CHAPTER #5


// TASK #1
var a=3;
var b=5;
var c=a+b;
document.write("Sum of ",a," and ",b," is ",c)

// TASK #2
var a=20;
var b=2;
var c=a-b;
var d=a*b;
var e=a/b;
var f=a%b;
document.write("<br>Difference of ",a," and ",b," is ",c)
document.write("<br>Product of ",a," and ",b," is ",d)
document.write("<br>Dividing  ",a," and ",b," we get ",e)
document.write("<br>Modulus of ",a," and ",b," is ",f)


// TASK #3
var one;
document.write("<br>Value after variable declaration is: ",one)
one=5;
document.write("<br>Initial value: ",one)
one++;
document.write("<br>Value after increment is: ",one)
one += 7;
document.write("<br>Value after addition is: ",one)
one--;
document.write("<br>Value after decrement is: ",one)
one %=3;
document.write("<br>The remainder is : ",one)


// TASK #4

var cost=600;
document.write("<br>Total cost to buy 5 tickets to a movie is ",cost*5,"PKR")


// TASK #5

var table=4;
document.write("<br>Table of ",table)
for(var i=1; i<=10;i++){
    document.write("<br>",table," x ",i," = ",i*table)
};



// TASK #6


var cel=25;
var cToF=(cel*9/5)+32;
document.write("<br>",cel,"<sup>o</sup>C is ",cToF,"<sup>o</sup>F")
var far=70;
var fToC=(far-32)*5/9;
document.write("<br>",far,"<sup>o</sup>F is ",fToC,"<sup>o</sup>C")



// TASK #7

var p1=650;
var q1=3;
var p2= 100;
var q2= 7;
var shippingCharges=100;
document.write("<h1>Shopping Cart </h1> <br>")
document.write("<br>Price of item 1 is ",p1)
document.write("<br>Ordered quantity of item 1 is ",q1)
document.write("<br>Price of item 2 is ",p2)
document.write("<br>Ordered quantity of item 2 is ",q2)
document.write("<br>Shipping charges",shippingCharges)
document.write("<br><br><br>Total cost of your order is ",p1*q1+p2*q2+shippingCharges)





// TASK #8
var total= 980;
var obtain=804;
document.write("<h1>Marks Sheet </h1> <br>")
document.write("<br>Total Marks: ",total)
document.write("<br>Marks Obtained: ",obtain)
document.write("<br>Percentage: ",obtain/total*100,"%")

// TASK #9
var usd = 10;
var sr= 25;
var ex=usd*104.80+sr*28;
document.write("<br>Total currency in PKR : ",ex)

// TASK #10
var no=10;
var cal=(no+5*10)/2
document.write("<br>Result : ",no)


// TASK #11

var cy= 2020;
var by= 1998;
var age1=cy-by;
var age2=cy-by+1;
document.write("<h1>Age Calculator</h1> <br>")
document.write("<br>current year: ",cy)
document.write("<br>birth year: ",by)
document.write("<br>You are either ",age1 ," or ", age2 ," years old")



// TASK #12


var radius= 20;
var pi= 3.142;
var cir= 2*pi*radius;
var area= pi*radius*radius;
document.write("<h1>The Geometrizer</h1> <br>")
document.write("<br>The radius is: ",radius)
document.write("<br>The circumference is:",cir)
document.write("<br>The area is: ",area)



// TASK #13


var fs= "Choclate";
var ca= 22;
var ea=65;
var pd= 2;
var eamount=(ea-ca)*pd*365
document.write("<h1>The Lifetime Supply Calculator</h1> <br>")
document.write("<br>Favorite snack: ",fs)
document.write("<br>Current age:",ca)
document.write("<br>Estimated maximum age: ",ea)
document.write("<br>Amount of snack per day: ",pd)
document.write("<br>You will need ",eamount, " to last you until the ripe old age of: ",ea)





// sir I was unable to download the files and I ask you and in comments too but no responce and after so much 
// strugle I found these files from my collegue so in 1 day I was agle to complete 5 chapters and I am submitting it 
// if u allow i can do all and submit it.