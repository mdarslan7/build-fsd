//arrow fns, map, filter

//arrow fns are just an another way of writing funtions introduced in ES6. They are more concise and easier to read

const sum = (a, b) => {
    return a+b;
}

console.log(sum(2, 3));


//map is a method is js that is used to transform every element in a array and return a new array
//it takes one argument which is the transformation function which return the transformed value for each element the array

const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((i) => {
    return i * 2;
});

console.log(newArr);


//filter is a method used to filter out elements from an array based on a condition
//it takes one argument which is the filterning function which returns a boolean value based on which values are filtered

const arr2 = [1, 2, 3, 4, 5];

const newArr2 = arr2.filter((i) => {
    return i % 2 == 0;
})

console.log(newArr2);