
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('it was resolved');
        reject('there was an error');
    }, 1500)
});

console.log('before')

promise.then((data) => {
    console.log('1',data)
}).catch((err) => {
    console.log('error', err)
});

console.log('after')