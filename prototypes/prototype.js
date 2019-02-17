let p = {
    a: 10
}

let q = Object.create(p)
    q.b = 20;

let r = Object.create(q);
    r.c = 30;

console.log(p);

console.log(r.a);
