import cart from './cart.js';

import book from '../helpers/book.js'
import util from './../helpers/util.js';

const addToCartEvent = (e) => {
    e.preventDefault();
    const bookInfo = book.getBook();
    cart.setCart(bookInfo);
    cart.cartToDom();
    };

const makeStore = () => {
    const bookInfo = book.getBook();
    let domString = `<h2>Our Only Book!</h2>`;
    domString += `<h3>${bookInfo.price}</h3>`;
    domString += `<img class="shadesOfChicken" src="${bookInfo.image}" alt="50 shades of chicken book cover"/>`;
    // domString += `<br><br>`
    domString += `<button id="cartBtn" class="btn btn-primary" class="addBtn">Add To Cart</button>`;
    util.printToDom('store-container', domString);
    document.getElementById('cartBtn').addEventListener('click', addToCartEvent);
};

export default { makeStore };