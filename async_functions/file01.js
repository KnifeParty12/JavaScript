/*-------Asynchronous Programning-----*/

/*
function f(number) {
    number = 12;
    return number*number
}
let number=43;
console.log(f(number));
console.log(number);
*/

/*-----------No Global Change In Number------*/

function myfun(theObject) {
    theObject.m='Toyota';
}

let mycar = {
    m: 'Honda',
    model: 'Accord',
    year: 1997
};

let x = mycar.m; // x gets the value Honda
myfun(mycar);
y = mycar.m; // y gets the value Toyota

console.log(x);
console.log(y);

/*-----Hence on passing Object as parameter the FUNCTION changes the object properties,and the change is visible outside the function */

function map(f, a) {
    let result = [],i;
    for(i=0; i!=a.length;i++)
        result[i] = f(a[i]);
        return result;
}

    let f = function (x) {
        return x*x*x;
    };

    var numbers = [0, 1, 2, 5, 10];
    var cube = map(f,numbers);
    console.log(cube);


    /*---------Calling Function---------*/

    function factorial(n) {
        if((n === 0) || (n === 1))
        return 1;
        else
            return(n * factorial(n-1));
    }

    var c = factorial(100);
    console.log(c);

    /*-----Function Scope--------*/

    var num1 = 12,
        num2 = 3,  /*Global Scope Variables*/
        name = 'Chammu';

        function multiply() {
            return num1 * num2; //Able to Use global variables
        }

        multiply(); //Returns 36



    var foo = function bar () {
        //statements go here

    };

    // ways to call above function
    /*--- 1. bar(_)----- */
    /*--- 2. foo()--- */

    /*------- Closure --------*/

    function addSquares(a, b){
        function square(x) {
            return x*x;
        }
        return square(a) + square(b);
    }
    a = addSquares(2,3);
    b = addSquares(12,32);
    c = addSquares(421,352);


    function outside(x){
        function inside(y) {
            return x + y; //Able to access variables of parent argument
        }
        return inside;
    }

    fn_inside = outside(3); //Think of it like: give me a function that adds 3 to whatever you give it

    result = fn_inside(5); // returns 8

    result1 = outside(3)(5);


    /*-----ClosuresSection-----------
Closures are one of the most powerful features of JavaScript.
 JavaScript allows for the nesting of functions and grants the inner function full access to all the variables and functions defined inside the outer function (and all other variables and functions that the outer function has access to).
  However, the outer function does not have access to the variables and functions defined inside the inner function. This provides a sort of encapsulation for the variables of the inner function.
   Also, since the inner function has access to the scope of the outer function, the variables and functions defined in the outer function will live longer than the duration of the outer function execution, if the inner function manages to survive beyond the life of the outer function.
    A closure is created when the inner function is somehow made available to any scope outside the outer function.*/

    
