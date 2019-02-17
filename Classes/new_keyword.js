/*
function fruit(color, taste) {
    this.color = color;
    this.taste = taste;
}

let orange = new fruit("Orange", "sour");
let apple = new fruit("red", "sweet");

let mango = {
    color: "yellow", taste: "sweet"
}

console.log(orange);
console.log(apple);
console.log(mango);
*/

// console.log(this); // Will output an empty object

/*
function fun() {
    console.log(this)
    console.log(global==this) // True
}
fun(); // We get a very big object as output(Global), Global is a special object in JS
       // Global contains all the functions that we can call from global scope
        // However there isn't any global inside the Web Browser

*/

/*
function bun(){
    this.p = "Something";
    return 10;

}
let o1 = bun();
let o2 = new bun();

console.log(o1); // will print 10
console.log(o2); // will print the whole function structure
console.log(o1.p); // Undefined
console.log(o2.p); //Something

*/

function person(name, age) {
    this.firstname = name.split(" ")[0]
    this.lastname = name.split(" ")[1]
    // now 'age' is like a private variable
    this.isAdult = function () {
        return age> 18
    }
}

let p = new person("John Wick", 30);
let h = new person("Harry Potter", 12);
console.log(p.isAdult());
console.log(h.isAdult())
