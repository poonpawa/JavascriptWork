/* 
A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that 
it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. 
Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

A promise is settled if it’s not pending (it has been resolved or rejected).

*/

let FirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success");
    }, 100);
});

FirstPromise.then(msg => {
    console.log(msg);
});
