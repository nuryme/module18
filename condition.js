/*
* Comparison
* 1. bigger: >
* 2. less: <
* 3. equal: ===
* 4. greater than or equal: >=
* 5. less than or equal: <=
* 6. not equal:!=
*----------------------------------------------------------------
* 7. and &&
* 8. or ||
*/

/*
console.log(5>10);
console.log(5<10);
console.log(10==10);
console.log(10>=10);
console.log(15>=10);
*/

/*
--------------------------- structure ------------------------------------
if (condition) {
}
*/
/*
if(3<10) {
    console.log("I have a small value");  //condition true na hole kuno output dibe na
}
var biryaniPrice = 500;
if(biryaniPrice <= 300) {
    console.log("I will get biryani");
}
*/

/*
--------------------------- structure ------------------------------------
if (condition) {
    execute code if the condition is true
}
else {
    execute code if the condition is false
}
*/
/*
var weight = 20;
if(weight < 20) {
    console.log("I will carry the weight by myself.")
} else {
    console.log("I will ask for help.")
}
*/

//----------------------------  multiple condition  ------------------------------------
/*
var honesty = 10;
var sencerity = true;
var face = 10;
if(honesty = 10 && sencerity == true || face <= 8) {
    console.log("Yes")
} else {
    console.log("No");
}
*/

//----------------------------  COMPLEX CONDITION  ------------------------------------
/*
var salary = 10000000;
var isBCS = true;
var hasCar = false;
if((salary > 250000 && hasCar == true) || isBCS == true) {
    console.log("You are eligible for it");
}
if((salary > 250000 || hasCar == true) && isBCS == true) {
    console.log("You are eligible for it");
}
*/

//----------------------------  MULTI-LEVEL CONDITION  ------------------------------------
/*
var price = 6000;
if(price >= 5000) {
    //10% discount
    var discount = price * 10/100;
    var finalPrice = price - discount;
    console.log("Final price after 10% discount:", finalPrice);
}
else if(price > 2500) {
    //5% discount
    var discount = price * 5/100;
    var finalPrice = price - discount;
    console.log("Final price after 5% discount:", finalPrice);
}
else {
    console.log(price)
}
*/

//----------------------------  NESTED CONDITION  ------------------------------------
/*
var money = 20;
if(money > 300){
    console.log("bruh! you are rich!")
}
else {
    if(money > 100) {
        console.log("hmm.. not bad")
    }
    else {
        if(money > 0) {
            console.log("eat banana")
        }
        else {
            console.log("you are broke!")
        }
    }
}   */

//----------------------------  Ternary Operator  ------------------------------------
/* ---------------- Five parts --------------------------------
    // (condition) ? expression1(do when true) : expression2(do when false);
var age = 12;
// if(age >= 18) {
//     console.log("can vote");
// }
//  else {
//     console.log("go sleep");
// }
age >= 18? console.log("can vote") : console.log("go sleep")
let price = 1200;
const isLeader = false;
// if(isLeader === true) {
//     price = 0;
//     console.log(price);
// }
//  else {
//     price = price + 100;
//     console.log(price);
// }
console.log(price = isLeader === true ? 0 : price + 100);
//---------------------------- NESTED  Ternary Operator  ------------------------------------
// if(isLeader === true) {
//     if(price >= 1000) {
//         price = 1000/2;
//         console.log(price);
//     }
//     else {
//         price = 0;
//         console.log(price);
//     }
// }
// else {
//     price = price + 100;
//     console.log(price);
// }
price = isLeader === true ? price > 1000 ? price/2 : 0 : price+100;
console.log(price);
*/

//----------------------------  Logical Not Operator  ------------------------------------
/*
var isFailed = false;
// if(isLeader === false)
if(!isPassed) {
    console.log("keep trying");
}
else {
    console.log("you passed");
}
var isPassed = true;
 // if(isPassed === true)
if(isPassed) {
    console.log("good job");
}
 else {
    console.log("be aware of your works");
 }  */
