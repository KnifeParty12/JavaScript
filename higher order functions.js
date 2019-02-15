/*-------------Example---------------*/

function add( x ,y) {
    return(x+y);
}

/*let sum=add(4,5);*/ //Here add contains the value 9

let sum=add; //Here sum becomes the function 'add' itself
console.log(sum);
console.log(typeof(null));

let obj = {

  a: 1234,
  b: "nigga",
  c: true,
  d: {
      p: 123.42,
      q: [1,2,3,4,5,6,7,8],
  },
  e: false,
};

console.log(obj.d.q);

delete obj;
console.log(obj.a);

// function getfirstname(fullname) {
//     return fullname.split(" ")[0];
// }
//
// function greeter(findname,fullname){
//     let firstname=findname(fullname);
//     console.log("Hello " + firstname);
// }
//
// greeter(getfirstname,"Nikhil Kumar");

/*

function creategreeter(name){
    let firstname= name.split(" ")[0];
    function greeter (){
        console.log("Hello " + firstname)
    }

    return greeter;
}

let x = creategreeter("Nktyhdf dqwfdf");
x(); //Calling x

*/



//-----Closure_Via_Objects------

function createCounter(initVal, delta) {
    let val = initVal;

    let counter = {
        incr: function () {
            val+=delta;
        },
        decr: function () {
            val-=delta;
        },
        show: function () {
            console.log(val);
        }
    };
    return counter
}

let a = createCounter(50,5);
a.incr();
a.show();
console.log(typeof a); // Object
console.log(typeof a.show); //function
console.log(typeof a.show()); // Underfined(Coz it does'nt return anything)
