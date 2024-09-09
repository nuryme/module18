//practice 1
/*
var burgerPrice;
burgerPrice = 300;
if(burgerPrice > 500) {
    var cokePrice = 0;
    console.log("you've got a free coke and for coke, you have to pay: " + cokePrice + " tk");
}
else {
    var cokePrice = 30;
    console.log("for coke, you have to pay: " + cokePrice + " tk");
}   */

//practice 2
//----------------------------  HOMEWORK(BMI)  ------------------------------------
/*
var wight;
var height;
wight = 43;
height = 1.44;
var bmi = wight/height ** 2;
if(bmi < 18.5) {
    console.log("Underweight");
}
else if(bmi >= 18.5 && bmi < 25) {
    console.log("Normal weight");
}
else if(bmi >= 25 && bmi < 30) {
    console.log("Overweight");
}
else {
    console.log("Obese");
} */

//practice 3
//----------------------------  HOMEWORK(grading)  ------------------------------------
/*
var totalmark;
totalmark = 90;
if(totalmark <= 100 && totalmark >= 80) {
    console.log("Grade: A");
}
else if(totalmark < 80 && totalmark >= 70) {
    console.log("Grade: B");
}
else if(totalmark < 70 && totalmark >= 60) {
    console.log("Grade: C");
}
else if(totalmark < 60 && totalmark >= 50) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}
    */

//practice 4
/*
var mark;
mark = 70
if(mark >= 80) {
    var frnMark;
    frnMark = 30
    if(frnMark >= 80) {
        console.log("let's go for lunch")
    }
    else if(frnMark < 80 && frnMark >= 60) {
        console.log("good luck friend");
    }
    else if(frnMark < 60 && frnMark >= 40) {
        console.log("unseen message");
    }
    else {
        console.log("I'm blocking you");
    }
}
else {
    if(mark < 80) {
        console.log("I'm going home and gonna sleep");
    }
}   */

//practice 5
/*
var num1 = 30;
var num2 = 20;
var result;
result = num1 > num2 ? num1*2 : num1 + num2;
console.log(result);
*/

//practice 6
var age;
age = 70;
var ticket = 800;
var student = true;
if(age <= 10) {
    //free
    var ticket = 0;
    console.log("Free Ticket: " + ticket + " tk");
}
else if(student) {
    //50% discount
    var ticket = ticket/8;
    console.log("50% Discount Price: " + ticket + " tk");
}
else if(age >= 60) {
    //15% discount
    var ticket = ticket * 15/100;
    console.log("15% Discount Price: " + ticket + " tk");
}
else {
    //no discount
    console.log("Regular Price: " + ticket + " tk");
}