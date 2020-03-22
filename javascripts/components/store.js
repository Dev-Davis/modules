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
    let domString = '';
    domString += `<h4 class="text-center">Our Only Book!</h4>`;
    domString += `<img class="shadesOfChicken" src="${bookInfo.image}" alt="50 shades of chicken book cover"/>`;
    domString += '<div class="book-info">';
    domString += `<p class=" book-name col-12"><h6>${bookInfo.title}</h6></p>`;
    domString += `<p class=" price-name col-12">Price: <h6>${bookInfo.price}</h6></p>`;
    domString += '</div>';
    domString += `<button id="cartBtn" class="btn btn-primary" class="addBtn">Add To Cart</button>`;
    util.printToDom('store', domString);
    document.getElementById('cartBtn').addEventListener('click', addToCartEvent);
};

export default { makeStore };