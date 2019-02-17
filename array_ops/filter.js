/*
let arr = ['spray' , 'limit' , 'elite' , 'exuberant' , 'destruction']

const result = arr.filter(arr => arr.length > 6);

console.log(result);
*/


let menu = [
    "Paneer Tikka",
    "Onion Rings",
    "Garlic Naan",
    "Chicken Tandoori",
    "Egg Curry"
];
function isveg(food) {
    if(food.toLowerCase().indexOf("chicken")!== -1) return false;
    if(food.toLowerCase().indexOf("egg")!==-1) return false;
    return true;
}

function oninonGarlicfree(food) {
    if(food.toLowerCase().indexOf("onion")!== -1) return false
    if(food.toLowerCase().indexOf("garlic")!== -1) return false
    return true;
}

let vegmenu=menu.filter(isveg);
let jainmenu=menu.filter(isveg).filter(oninonGarlicfree);

console.log(vegmenu);
console.log(jainmenu);
