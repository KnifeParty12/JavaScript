let arr = [1,2,3,4,5,6,7,8]

let arr2 = arr.map(function (value) {
    return value*value
})

console.log(arr2);

let arr3 = arr2.map(Math.sqrt);

console.log(arr3);
