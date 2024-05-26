function displayMessage() {
    let after = new Date().getTime();
    console.log("Hello Arslan!");
    console.log("Time elapsed: " + (after - before) + " milliseconds");
}

let before = new Date().getTime();
setTimeout(displayMessage, 5000);