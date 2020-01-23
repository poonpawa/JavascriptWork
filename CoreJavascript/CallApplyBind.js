/* 
They all attach this into function (or object) and the difference is in the function invocation (see below).

call attaches this into function and executes the function immediately:
bind attaches this into function and it needs to be invoked separately like this:
apply is similar to call except that it takes an array-like object instead of listing the arguments out one at a time:
*/

//Code for Call
var person1 = { firstName: "Poonam", lastName: "Pawar" };
var person2 = { firstName: "Prasad", lastName: "Pawar" };

function greet(word) {
    console.log(word + ` ${this.firstName} ${this.lastName}`);
}

function makeEntry(word, isPresent) {
    if (isPresent) {
        console.log(word + `!! ${this.firstName} ${this.lastName} is Present`);
    } else {
        console.log(`${this.firstName} ${this.lastName} is not Present`);
    }
}

greet.call(person1, "Hello");
greet.call(person2, "Welcome");

//Code For Apply

makeEntry.apply(person1, ["Hello", true]);
makeEntry.apply(person2, [null, false]);

//Code for bind

var Person1bindRef = greet.bind(person1, "hello");
var Person2bindRef = greet.bind(person2, "Welcome");

Person1bindRef();
Person2bindRef();

//When to Use them

/* 
Call and apply are pretty interchangeable. Just decide whether it’s easier to send in an array or a comma separated list of arguments.
I always remember which one is which by remembering that Call is for comma (separated list) and Apply is for Array.

Bind is a bit different. It returns a new function. Call and Apply execute the current function immediately.
Bind is great for a lot of things. We can use it to curry functions like in the above example. 

We can take a simple hello function and turn it into a helloJon or helloKelly.
 We can also use it for events like onClick where we don’t know when they’ll be fired but we know what context we want them to have. */
