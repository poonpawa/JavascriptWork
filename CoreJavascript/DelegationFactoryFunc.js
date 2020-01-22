const proto = {
    hello() {
        return `Hello, my name is ${this.name}`;
    }
};
//Factory function using object.create()
const greeter = name =>
    Object.assign(Object.create(proto), {
        name
    });

const george = greeter("george");

const msg = george.hello();

console.log(msg); //Hello, my name is George
