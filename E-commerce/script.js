let cart = [];
let total = 0;

function addItemToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    total += itemPrice;
    updateCart();
}

function updateCart() {
    const itemList = document.getElementById("item-list");
    itemList.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - R$ ${item.price}`;
        itemList.appendChild(li);
    });
    document.getElementById("total").textContent = total; // Atualiza o total corretamente
}

function checkout() {
    alert(`Total da compra: ${total} reais`);
    cart = [];
    total = 0;
    updateCart();
}
