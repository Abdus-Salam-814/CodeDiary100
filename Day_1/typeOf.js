let name = 'salam';
console.log(typeof name)

let age = 22;
console.log(typeof age);
let isOnlane = true;
console.log(typeof isOnlane);

let address;
console.log(typeof address);
let empty = null;
console.log( empty === null, isOnlane === null);


const purson = {
    name: 'a salam',
    age: 12,
    address: 'darush'
}

console.log(typeof purson);

const subjectMarks = [11, 44, 666, 99];
console.log(typeof subjectMarks, Array.isArray(subjectMarks), Array.isArray(purson))

function add(a, b){
    console.log(a+b);
}

console.log(typeof add)

// new data( [11, 33] )
console.log(99 / 0)

