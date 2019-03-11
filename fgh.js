//-------Ternary Opertator + Switch Statements-----
/*

var age =18;

age>= 18 ? console.log("Drinks Beer") : console.log("Drinks Water");

var job = 'Teacher';

switch(job){
    case 'teacher' :
        console.log("wdfgfdbbfgef");
        break;
    case 'driver' :
        console.log("qwqwqqwwqwq");
        break;
    default:
        console.log(qfefefefefefef);
}
*/


/* --------Coding Challenge 3------------

var bill1,bill2,bill3;
bill1 = 124;
bill2 = 48;
bill3 = 268;

var tip = function (billamount) {
  switch (billamount) {
      case billamount < 50 :
          return 0.2 * billamount;

      case billamount >= 50 && billamount < 200 :
          return 0.15 * billamount;

      default :
          return 0.1 * billamount;
  }
};

var tiparr = [tip(bill1), tip(bill2), tip(bill3)];
console.log(tiparr);
var finalamount = [bill1 + tip(bill1),bill2 + tip(bill2), bill3 + tip(bill3)];
console.log(finalamount);

*/


/*-----Objects-------*/

/*
var john ={
  firstname: 'John',
  lastname: 'Smith',
  birthyear: 1992,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'Teacher',
  isMarried: false,
  calcage: function () {
      this.age = 2018 - this.birthyear;
  }

};

john.calcage();
console.log(john);

*/

/*

var john = {
    fullname: "John Smith",
    mass: 120,
    height: 8,
    calcBMI: function () {
        this.BMI = this.mass /Math.imul(this.height,this.height);
    }
};

john.calcBMI();

var  mark = {
    fullname: "Mark Walberg",
    mass: 250,
    height: 12,
    calcBMI: function () {
        this.BMI = this.mass/Math.imul(this.height,this.height);
    }
};

mark.calcBMI();

john.BMI > mark.BMI ? console.log(john): console.log(mark);

*/


var tips = [];
var final = [];
var billing = {
  bill: [124,48,268,180,48],

   tip: function () {
       for(var i=0; i<this.bill.length;i++){
           switch (this.bill[i]) {
               case this.bill[i] < 50 :
                   tips.push(this.bill[i]*0.2);
                   break;
               case this.bill[i] >=50 && this.bill[i] <200 :
                   tips.push(this.bill[i]*0.15);
                   break;
               default :
                   tips.push(this.bill[i]*0.10);
           }
       }
   },

   finalpay: function () {

       for(var k =0; k<this.bill.length;k++){
           final[k] = this.bill[k] + tips[k];
       }
   }
};

billing.tip();
billing.finalpay();
console.log(tips,final);
