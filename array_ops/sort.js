/*
let arr = [6,3,7,2,1,9]
console.log(arr.sort());
*/


//--------Js by default does a lexicographical sort--------



let arr = [6,3,9,1,7,2,14,26,35];
arr.sort(function(a, b){
  console.log(arr);
  console.log(a + " " + b);
  return a-b; 
});

console.log(arr)
