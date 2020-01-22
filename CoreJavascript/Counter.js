/* Closures are a very powerful mechanism in the JavaScript programming language. 
All members of an object in the JavaScript are public by default. 
However, the closure mechanism enables objects to have private members and more. */

function counter(initialValue) {
    let count = initialValue;

    return {
        increment: function() {
            return count++;
        },

        decrement: function() {
            return count--;
        },

        print: function() {
            console.log(count);
        }
    };
}

const newcounter = counter(2);

newcounter.increment();
newcounter.increment();
newcounter.increment();

newcounter.decrement();
newcounter.print();
