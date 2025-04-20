document.addEventListener("DOMContentLoaded", function () {
    // Load cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add to Cart functionality
    document.querySelectorAll(".add-to-cart").forEach((button, index) => {
        button.addEventListener("click", () => {
            let productName = document.querySelectorAll(".product-card h4")[index].innerText;
            cart.push(productName);
            alert(productName + " added to cart!");
            localStorage.setItem("cart", JSON.stringify(cart));
        });
    });

    // Wishlist Functionality
    document.querySelectorAll(".add-to-wishlist").forEach((button) => {
        button.addEventListener("click", () => {
            button.style.color = "red";
            alert("Added to Wishlist!");
        });
    });

    // Sign out
    const signoutBtn = document.querySelector(".signout-btn");
    if (signoutBtn) {
        signoutBtn.addEventListener("click", () => {
            localStorage.removeItem("user_email");
            window.location.href = "login.html";
        });
    }

    // Cart Page Handling
    const cartList = document.getElementById("cart-items");
    const totalAmount = document.getElementById("total-amount");

    if (cartList && totalAmount) {
        updateCart();

        // Remove item from cart
        window.removeItem = function (index) {
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCart();
        };

        function updateCart() {
            cartList.innerHTML = "";
            let total = 0;

            cart.forEach((item, index) => {
                let li = document.createElement("li");
                li.innerHTML = `${item} - ₹500 <button onclick="removeItem(${index})">Remove</button>`;
                cartList.appendChild(li);
                total += 500;
            });

            totalAmount.innerText = "₹" + total;
        }

        // Clear cart
        const clearBtn = document.querySelector(".clear-cart-btn");
        if (clearBtn) {
            clearBtn.addEventListener("click", () => {
                cart = [];
                localStorage.removeItem("cart");
                updateCart();
            });
        }

        // Confirm order
        const confirmBtn = document.querySelector(".confirm-order-btn");
        if (confirmBtn) {
            confirmBtn.addEventListener("click", () => {
                if (cart.length === 0) {
                    alert("Your cart is empty!");
                } else {
                    window.location.href = "order.html";
                }
            });
        }
    }
});
