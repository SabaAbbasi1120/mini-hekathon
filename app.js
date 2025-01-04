document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const addToCartModal = document.getElementById('addToCartModal');
    const selectedProductDetails = document.getElementById('selectedProductDetails');
    const shopNowButton = document.getElementById('shopNowButton');
    const addToCartButton = document.getElementById('addToCartButton');
    const closeModal = document.getElementById('closeModal');

    const products = [
        { name: '900 billion sachets', price: 50 },
        { name: '450 billion sachets', price: 30 },
        { name: '112 billion capsules', price: 20 }
    ];

    // Add event listeners to "Shop Now" buttons
    const buttons = document.querySelectorAll('.carousel-item button');
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            openAddToCartModal(products[index]);
        });
    });

    // Open the Add to Cart modal
    function openAddToCartModal(product) {
        selectedProductDetails.innerHTML = `<strong>${product.name}</strong><br>Price: $${product.price}`;
        addToCartModal.style.display = 'flex';

        shopNowButton.onclick = () => {
            window.location.href = '/shop'; // Redirect to shop
        };

        addToCartButton.onclick = () => {
            cart.push(product);
            alert(`${product.name} has been added to your cart!`);
            addToCartModal.style.display = 'none';
        };
    }

    // Close the modal
    closeModal.addEventListener('click', () => {
        addToCartModal.style.display = 'none';
    });

    addToCartModal.addEventListener('click', (event) => {
        if (event.target === addToCartModal) {
            addToCartModal.style.display = 'none';
        }
    });
});
