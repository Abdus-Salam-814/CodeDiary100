const myArray = [12, 344, 66, 88];
console.log(myArray)

console.log(myArray.length);
console.log(myArray[2])
console.log(myArray[1])
console.log(myArray[0])
console.log(myArray[5])

const myArray2 = []


for(let i = 0; i < myArray.length; i++){
    myArray2.unshift(myArray[i])
}

console.log(myArray2)