let x = {
    aNumber: 123,
    aString: "sadfs",
    aFunction: function () {
        console.log(this.aNumber + this.aString)
    }

}

console.log(x.aFunction()); /*Will print 123sadfs along with undefined coz the function returns nothing*/
