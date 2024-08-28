const cart = [];

function addToCart(donutName, price) {
    const existingItem = cart.find(item => item.name === donutName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: donutName, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;
    
    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <span>${item.name} (${item.quantity})</span>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItemElement);
        
        totalPrice += item.price * item.quantity;
    });
    
    totalPriceElement.textContent = totalPrice.toFixed(2); // Display the total price
}

function removeFromCart(donutName) {
    const itemIndex = cart.findIndex(item => item.name === donutName);
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
        updateCart();
    }
}

function checkout() {
    alert(`You have purchased ${cart.length} items with a total price of $${document.getElementById('totalPrice').textContent}!`);
    cart.length = 0; // Clear the cart
    updateCart();
}
const ingredients = {
    "Chocolate Donut": ["Cocoa Powder", "Dark Chocolate"],
    "Chocolate Chips Donut": ["Cocoa Powder", "Chocolate Chips", "Chocolate Sprinkles"],
    "Beach Ball Donut": ["White Chocolate", "Rainbow Sprinkles", "Chocolate Drizzle"],
    "BlueBerry Donut": ["Blueberry Jam", "Blueberry Glaze"],
    "Peanut Butter & Jelly Donut": ["Peanut Butter", "Strawberry Jelly", "Peanut Butter Glaze"],
    "Cinnamon Donut": ["Cinnamon", "Cinnamon Sugar"],
    "French Toast Donut": ["Cinnamon Sugar", "Maple Syrup Drizzle"],
    "Raspberry Donut": ["Raspberry Filling", "Raspberry Icing"],
    "Strawberry Sprinkles Donut": ["Strawberry Glaze", "Rainbow Sprinkles"],
    "Pina-Colada Donut": ["Pineapple Filling", "Coconut Flakes", "Rum Essence"],
    "Cookies & Cream Donut": ["Crushed Oreo Cookies", "Vanilla Cream", "Chocolate Drizzle"],
    "Coconut Island Bliss Donut": ["Coconut Flakes", "Chocolate Coating", "Toasted Almonds"],
};

function showIngredients(donutName) {
    document.getElementById("ingredientTitle").textContent = donutName + " Ingredients";
    
    const ingredientList = document.getElementById("ingredientList");
    ingredientList.innerHTML = ""; // Clear previous ingredients
    
    ingredients[donutName].forEach(ingredient => {
        const listItem = document.createElement("li");
        listItem.textContent = ingredient;
        ingredientList.appendChild(listItem);
    });
    
    document.getElementById("ingredientModal").style.display = "block";
}

function closeModal() {
    document.getElementById("ingredientModal").style.display = "none";
}

