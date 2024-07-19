document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('.product-list');

    // Example product data
    const products = [
        { name: 'Lipstick', price: '10 GHS', image: 'images/lipstick.jpg', description: 'Bright and long-lasting lipstick.' },
        { name: 'Foundation', price: '25 GHS', image: 'images/foundation.jpg', description: 'Perfect coverage foundation.' },
        { name: 'Mascara', price: '15 GHS', image: 'images/mascara.jpg', description: 'Volume and length for your lashes.' },
    ];

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'item';
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <button class="btn">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
});
