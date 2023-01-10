//amazon shopping 

//implement cart features:
// 1. add items into Cart 
// 2. add 3% tax to item in cart 
// 3. buy item cart --> purchase
// 4. Empty cart

const user = {
    name: 'kim',
    active: true,
    cart: [],
    purchase: []
}

const compose = (f, g) => (...args) => f(g(...args));

//compose in JS
purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user, { name: 'laptop', price: '300' })

function purchaseItem(...fns)  => fns.reduce(compose)


function itemToCart() { }

function applyTaxToItems() { }

function buyItem() { }

function emptyCart() { }
