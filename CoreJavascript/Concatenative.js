const proto = {
    hello() {
        return `Hello, my name is ${this.name}`;
    }
};
//Coping one object into another one
const george = Object.assign({}, proto, { name: "George" });

const msg = george.hello();

console.log(msg);
