import { fun } from "./main.mjs";
fun(2,4);

let [a,b]=[2,4];
console.log(a);
console.log(b);

let f={
    name:"ritista",
    age:"23"
}
console.log(f.name, f.age);

let {name,age}={name:"ritista", age:"23"};
console.log(name);
console.log(age);


setTimeout(() => {
    console.log("momo");
}, 2000);
console.log("i");
console.log("love");


// asyncronous programming
// callback

function z(name, callback) {
    console.log(name);
    callback();
}
function bye() {
    console.log("bye");
}
z("ritista", bye)


// try and catch

let first= 2;
try{
    fun();
}
catch(e){
    console.log("error");
    console.log(e);
    console.log(e.message);
}
