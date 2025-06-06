const products = [
    { name: "DELL Laptop", image: "images/download (1).jpg", description: "Dell, the best laptop in Nigeria.", price: 500 },
    { name: "Football Boots", image: "images/download (1).webp", description: "Football shoes for all sporting activities.", price: 1400 },
    { name: "Hand Bag", image: "images/download.webp", description: "Beautiful handbags for unique women.", price: 12000 },
    { name: "Casual Shoes", image: "images/download.jpeg", description: "Casual shoes for outings.", price: 12000 },
    { name: "Office Chair", image: "images/banner-fx-600x600-1.jpg", description: "Beautiful chairs for comfort.", price: 40000 },
    { name: "Wrist Watch", image: "images/download.jpg", description: "Elegant wristwatches to tell time.", price: 2000 },
];

const productList = document.getElementById('productList');
const searchBar = document.getElementById('searchBar');

function displayProducts(products) {
    productList.innerHTML = products.map(product => `
        <div class="product">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <div class="product-price">
                    <p>$${product.price}</p>
                    <a href="#" class="btn-buy">Buy Now</a>
                </div>
            </div>
        </div>
    `).join('');
}

searchBar.addEventListener('input', () => {
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchBar.value.toLowerCase())
    );
    displayProducts(filteredProducts);
});

document.addEventListener('click', event => {
    if (event.target.classList.contains('btn-buy')) {
        event.preventDefault();
        alert('Thank you for your purchase!');
    }
});

displayProducts(products);
