 // Add to Cart functionality
 let cart = [];
 document.querySelectorAll(".add-to-cart").forEach((button, index) => {
     button.addEventListener("click", () => {
         let productName = document.querySelectorAll(".product-card h4")[index].innerText;
         cart.push(productName);
         alert(productName + " added to cart!");
         localStorage.setItem("cart", JSON.stringify(cart));
     });
 });

 // Wishlist Functionality
 document.querySelectorAll(".add-to-wishlist").forEach((button, index) => {
     button.addEventListener("click", () => {
         button.style.color = "red"; // Change icon color when added to wishlist
         alert("Added to Wishlist!");
     });
 });

 // Sign out button
 document.querySelector(".signout-btn").addEventListener("click", () => {
     localStorage.removeItem("user_email");
     window.location.href = "login.html";
 });
});

document.addEventListener("DOMContentLoaded", function() {
 let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
 let cartList = document.getElementById("cart-items");
 let totalAmount = document.getElementById("total-amount");

 // Function to update cart display
 function updateCart() {
     cartList.innerHTML = "";
     let total = 0;

     cartItems.forEach((item, index) => {
         let li = document.createElement("li");
         li.innerHTML = ${item} - ₹500 <button onclick="removeItem(${index})">Remove</button>;
         cartList.appendChild(li);
         total += 500; // Assuming each item is ₹500 (change as needed)
     });

     totalAmount.innerText = total;
 }

 // Remove item from cart
 window.removeItem = function(index) {
     cartItems.splice(index, 1);
     localStorage.setItem("cart", JSON.stringify(cartItems));
     updateCart();
 };

 // Clear Cart Button
 document.querySelector(".clear-cart-btn").addEventListener("click", () => {
     localStorage.removeItem("cart");
     cartItems = [];
     updateCart();
 });

 // Confirm Order Button
 document.querySelector(".confirm-order-btn").addEventListener("click", () => {
     if (cartItems.length === 0) {
         alert("Your cart is empty!");
     } else {
         window.location.href = "order.html"; // Redirect to order page
     }
 });

 // Initial Cart Update
 updateCart();
});