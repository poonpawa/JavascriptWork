//the constructor
function Greeter(name) {
    this.name = name || "John Doe";
}

Greeter.prototype.hello = function hello() {
    return "Hello, my name is " + this.name;
};
console.log(new Greeter().hello()); // Hello, my name is John Doe

var george = new Greeter("George");

var msg = george.hello();

console.log(msg); //Hello, my name is George
