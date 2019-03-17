var p = {
        a:10
};

q = Object.create(p);
q.b = 20;

r = Object.create(q);
r.c = 30;
p.a++;
console.log(q.a);
console.log(r.a);
