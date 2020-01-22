/* This is closure example of maintaining two different lexical environments of 2 and 5 
    It is a kind of a factory function or widget.
     A closure is the combination of a function and the lexical environment within which that function was declared. 
     This environment consists of any local variables that were in-scope at the time the closure was created. 
*/

function multiplier(num1) {
    return {
        multiply: function(num2) {
            console.log(`result: ${num1 * num2}`);
        }
    };
}

const mul2 = multiplier(2);
const mul5 = multiplier(5);

mul2.multiply(3); //6
mul5.multiply(4); // 20
