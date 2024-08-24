// script.js

// Admin credentials (you can hardcode or store securely)
const adminUsername = "admin";
const adminPassword = "adminpass";

// Employee and admin login logic
document.getElementById('employee-login').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('employee-username').value;
    const password = document.getElementById('employee-password').value;

    if (username === "employee" && password === "employeepass") {
        document.getElementById('employee-form').style.display = 'block';
        alert("Employee logged in successfully!");
    } else {
        alert("Invalid credentials!");
    }
});

document.getElementById('admin-login').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    if (username === adminUsername && password === adminPassword) {
        document.getElementById('admin-dashboard').style.display = 'block';
        alert("Admin logged in successfully!");
    } else {
        alert("Invalid credentials!");
    }
});

// Product submission and storage logic
const productList = [];
document.getElementById('product-entry').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('product-name').value;
    const buyQuantity = document.getElementById('buy-quantity').value;
    const sellQuantity = document.getElementById('sell-quantity').value;
    const date = document.getElementById('date').value;
    const remarks = document.getElementById('remarks').value;

    productList.push({
        productName,
        buyQuantity: parseInt(buyQuantity),
        sellQuantity: parseInt(sellQuantity),
        date,
        remarks
    });

    alert("Product details submitted successfully!");
});

// Functionality for Admin Panel (Managing products and viewing stock)
document.getElementById('add-product').addEventListener('click', function() {
    const productName = prompt("Enter new product name:");
    if (productName) {
        const li = document.createElement('li');
        li.textContent = productName;
        document.getElementById('products').appendChild(li);
    }
});

// Display stock overview
function displayStockOverview() {
    const stockTable = document.getElementById('stock-table');
    stockTable.innerHTML = "<tr><th>Product</th><th>Stock Available</th></tr>";
    productList.forEach(product => {
        const stock = product.buyQuantity - product.sellQuantity;
        const row = `<tr><td>${product.productName}</td><td>${stock}</td></tr>`;
        stockTable.innerHTML += row;
    });
}

setInterval(displayStockOverview, 2000); // Refresh stock overview every 2 seconds
