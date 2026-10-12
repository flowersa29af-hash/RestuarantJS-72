// Array

const myArray = [];


// add elements to an array
myArray[0] =  "Dave";
myArray[1]  = "1001";
myArray[2] = false;


// refer to array

console.log(myArray);

//length

console.log(myArray.length);

// last element in an array

console.log(myArray[myArray.length -1]);
console.log(myArray[1]);

//add to array

myArray.push("school");
myArray.push("Aaron");
console.log(myArray)

// to remove from array

myArray.pop()
console.log(myArray)

const lastItem = myArray.pop();
console.log(lastItem);
console.log(myArray)
 // to add to beginning of array
 
 myArray.unshift(42);
 console.log(myArray)
 //new length
 const newlength = myArray.unshift(20)
 console.log(newlength)

 console.log(myArray)
 // removing from front of array

 const firstItem = myArray.shift()
 console.log(firstItem)
 console.log(myArray)

 console.log(myArray)
 myArray.splice(1,1)
 console.log(myArray)

 myArray.splice(1,0, 98)
 console.log(myArray)
 myArray.splice(0,0,100)
 console.log(myArray)

const newString = myArray.join()
console.log(newString)

