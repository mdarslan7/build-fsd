let count = 0;

function increment() {
    count += 1;
    console.log(count);

    if(count === 20) {
        clearInterval(intervalID);
    }
}

const intervalID = setInterval(increment, 1000);