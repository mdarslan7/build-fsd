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