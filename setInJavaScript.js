const mySet = new Set();

mySet.add(12);
mySet.add(2);
mySet.add(3);
mySet.add(3);
mySet.add(15);
console.log(mySet);

// write a program to write unique elements in arrays
const arr = [1, 2, 3, 4, 5,1,2,3,4,5];
const uniqueElemSet = new Set();
for(let i = 0; i < arr.length; i++){
    uniqueElemSet.add(arr[i]);
}
console.log("set",uniqueElemSet)

// Given a number n, write a program to check whther a given numbe in in n or not.
let n = 5;
console.log(`if 5 is present in set : ${uniqueElemSet.has(5)}`)
console.log(`if 6 is present in set : ${uniqueElemSet.has(6)}`)