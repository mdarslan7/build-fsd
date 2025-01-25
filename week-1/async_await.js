function hiThere() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hi There!");
        }, 3000);
    });
}

async function main() {
    let value = await hiThere();
    //Thread moves to main after this line because we are using await

    console.log("Hello!");
    console.log(value);
}

main();