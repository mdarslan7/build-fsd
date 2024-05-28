const fs = require('fs');

function verifyPromise() {
    return new Promise((resolve) => {
        fs.readFile('a.txt', 'utf-8', (err, data) => {
            resolve(data);
        });
    });
}

function onDo(data) {
    console.log(data);
}

verifyPromise().then(onDo);


let x = new Promise((resolve) => {
    resolve("From Inside Promise!");
});

x.then((data) => {
    console.log(data);
});