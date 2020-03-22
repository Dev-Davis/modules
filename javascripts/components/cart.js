import util from './../helpers/util.js';

const cart = [];

const getCart = () => {
    return cart;
};

const setCart = (book) => {
    cart.push(book);
};

const buyEvent = (e) => {
    e.preventDefault();
    const myCart = getCart();
    const total = myCart.reduce((a, b) => {return a + b.price}, 0); // a is the previously returned number and b is the current object you're on 
    window.alert(`You owe ${total.toFixed(2)}`);
};

const cartToDom = () => {
    const myCart = getCart();
    let domString = '<div>';
  domString += '<h4>Cart:</h4>';
  domString += '<div>';
  myCart.forEach((book) => {
    domString += `<div class="card col-4 text-center">`;
    domString += `  <img src=${book.image} class="shadesOfChicken-cart" alt="...">`;
    domString += `  <div class="card-body">`;
    domString += `    <h5 class="card-title">${book.title}</h5>`;
    domString += `    <p class="card-text">${book.price}</p>`;
    domString += `  </div>`;
    domString += '<button id="purchase-btn" class="btn btn-secondary">Purchase</button>'
    domString += `</div>`;
  });
  domString += `</div>`;
  util.printToDom('cart', domString);
  document.getElementById('purchase-btn').addEventListener('click', buyEvent);
};

export default { setCart, cartToDom };