// Callbacks 

function getAnswer(callback) {

    setTimeout(() => {
        callback(42);
    }, 5000);

}

getAnswer((value) => {
    console.log(value);
});

// Promises

function getPromise() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            // resolve(42);

            // if detect error
            reject('BIG ERROR!')

        }, 5000);

    });
}

getPromise().then(answer => {
    console.log(answer);
}, error => {
    console.error(error);
});

console.log('End')