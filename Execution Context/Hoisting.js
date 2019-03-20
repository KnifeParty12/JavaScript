/*------Function Hoisting-------*/
calculateAge(1990);

function calculateAge(year) {
    console.log(2018-year);
}

//retirement(1990); // Will result in error as Hoisting with functions only work with *function declaration* not function expression(retirement)


var retirement = function (year) {
    console.log(65-(2016-year));
}

/*------Variables Hoisting------*/

console.log(age); // Will result in Undefined
var age = 23;
console.log(age); // 23


function foo() {
    console.log(age); //will print undefined
    var age = 65;
    console.log(age); // 65
}
foo();
console.log(age); //23
