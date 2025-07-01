console.log(77);


const myArray = [12, 13, 53, 664, 77, 779, 88, 22,];

console.log(myArray);

myArray.push(55);

console.log(myArray);

myArray.pop();

console.log(myArray);

myArray.pop();

console.log(myArray);

myArray.unshift(82)
console.log(myArray);

const arrayShift = myArray.shift()
console.log(myArray)
console.log(arrayShift)

const myArray2 = ['alu', 'bagun', 'morich', 'sim'];

console.log(myArray2);
console.log(myArray2.length);

let sliced = myArray2.slice(1, 3);

console.log(sliced)
console.log(sliced.length)


let fruits =['apple', 'bannana', 'mango', 'apple', 'papay', 'kajur' ];
fruits.splice(1, 2, 'guava');
console.log(fruits);

console.log(fruits.includes('apple'))
console.log(fruits.includes('Apple'))



let cart = [ 'book', 'bottle']
console.log(cart);


if(!cart.includes('pen')){
    cart.push('pen');

}else{
    console.log('This user name taken, plz try onather userName')
}

console.log(cart)