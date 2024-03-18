//DATA TYPES / VARIABLES / Comparison and Logical Operators / 

//      JavaScript has 8 Datatypes
// 1. String - "text" or 'text'
// 2. Number - 1, 2, 3, -1, -2, -3, 4.95, 0.99
// 3. Bigint - "123456789012345678901234567890"
// 4. Boolean - true or false / 1 or 0
// 5. Undefined - a variable without a value
// 6. Null - an empty or unknown value
// 7. Symbol - represents a unique identifier (e.g.: && )
// 8. Object - containers for named values called properties. (e.g.: const car = {type:"Fiat", model:"500", color:"white"};)

//      JS Variables, can hold any type of data, can be declared in 4 ways:
// Automatically
// var - if you MUST support old browsers.
// let - if you can't use const
// const - if the value should not be changed or if the type should not be changed (Arrays and Objects)

//      JS Comparison and Logical Operators
// ==	equal to
// ===	equal value and equal type
// !=	not equal
// !==	not equal value or not equal type
// >	greater than	            (e.g.: x > 8	false)
// <	less than	                (e.g.: x < 8	true)
// >=	greater than or equal to	(e.g.: x >= 8	false)
// <=	less than or equal to	    (e.g.: x <= 8	true)
// ||	or                          (e.g.: x=6 y=3 (x == 5 || y == 5) is false) повертає true, якщо хоча б один є true, і false, якщо обидва є false.
// &&	and	                        (e.g.: (x < 10 && y > 1) is true),   //false = 0 or null, true = anything else, повертає перше ложне значення або останнє значення, якщо всі вони істинні.
// !	not	                        (e.g.: !(x == y) is true)
// !!   double not, makes operator Not twice (e.g.: !!true is false and again is true)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// CONDITIONAL STATEMENTS 

///n JavaScript we have the following conditional statements:
// if - to specify a block of code to be executed, if a specified condition is true
// else - to specify a block of code to be executed, if the same condition is false
// else if - to specify a new condition to test, if the first condition is false
// switch - to specify many alternative blocks of code to be executed

//SWITCH Syntax
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}


// Ternary Operator
// Syntax
 variablename = (condition) ? value1:value2 

