let cart = ['pen', 'book', 'pencil', 'y', 'x', 'o'];

let itemIndex = cart.indexOf('book');
if (itemIndex !== -1) {
  cart.splice(0, 1 );  // book মুছে ফেলা
}
console.log(cart, itemIndex); // ['pen', 'pencil']
