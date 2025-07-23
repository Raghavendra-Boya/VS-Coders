// Sample Product Data
const products = [
  { name: "iPhone 13", price: 69900, image: "https://via.placeholder.com/150?text=iPhone" },
  { name: "MacBook Air", price: 99900, image: "https://via.placeholder.com/150?text=MacBook" },
  { name: "AirPods Pro", price: 24900, image: "https://via.placeholder.com/150?text=AirPods" },
  { name: "iPad", price: 49900, image: "https://via.placeholder.com/150?text=iPad" },
  { name: "Apple Watch", price: 39900, image: "https://via.placeholder.com/150?text=Watch" },
  { name: "Magic Mouse", price: 7500, image: "https://via.placeholder.com/150?text=Mouse" },
  { name: "Apple TV", price: 14900, image: "https://via.placeholder.com/150?text=Apple+TV" },
  { name: "iMac", price: 119900, image: "https://via.placeholder.com/150?text=iMac" }
];

// Render Cards using traditional for loop
function renderProducts(list) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    const product = list[i];

    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded shadow text-center";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="w-full h-32 object-cover rounded mb-2">
      <h2 class="text-lg font-semibold text-gray-800">${product.name}</h2>
      <p class="text-blue-600 font-bold text-xl">₹${product.price}</p>
    `;

    container.appendChild(card);
  }
}

// Apply Filters using .filter()
function applyFilters() {
  const nameValue = document.getElementById("nameFilter").value.toLowerCase();
  const priceValue = parseInt(document.getElementById("priceFilter").value);

  let filtered = products;

  if (nameValue) {
    filtered = filtered.filter(item => item.name.toLowerCase().includes(nameValue));
  }

  if (!isNaN(priceValue)) {
    filtered = filtered.filter(item => item.price > priceValue);
  }

  renderProducts(filtered);
}

// Initial Render
renderProducts(products);
