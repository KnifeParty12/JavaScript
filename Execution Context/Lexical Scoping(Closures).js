var a = 'Hello!';
first();

function first() {

    var b = 'Hi!';
    second();

    function second() {

        var c = "Hey!";
        console.log(a + b + c);
        third(); //We are able to call third func coz of scope chain
    }
}

function third() {
    var d ="John";
    console.log(a+b+c+d); //Error as third does not have access to b,c;
}
