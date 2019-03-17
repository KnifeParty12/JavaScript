let obj={


};
console.log(obj.b);

obj.d= 1231;
console.log(obj);

/*---------Functions---------*/

function incr(x){

    return(x++);
}

console.log("11" - 1 == 10);
console.log([] == ""); //Empty array can be typecast to a empty string
console.log([]== 0);   //Empty array can be typecast to 0
console.log(""== 0);   //Empty string can be typecast to 0

console.log(+"1"); // unary '+' operator tries converting input to number o/p: 1
console.log(+false); // 0

let k = {};

console.log(k.toString()); // "[object, Object]" the one with 'O' is the class
console.log([] + {});
console.log(+k); //displays "NaN" signifying "Not A Number"


/*
const x=10;

function fun(){
    const x=22;

    console.log("line 37 " + x);
    if(true){
        const x=30;

        console.log("line 41 " + x);
    }
    console.log("line 43 " + x);
}

fun();
console.log("line 47 " + x);
*/


