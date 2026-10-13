const categories = {
  "Cooling Appliances": [
    ["Inverter Split Air Conditioner 1 Ton", 118000, "photo-1631545806609-7d7c4e7a3e2b"],
    ["Inverter Split Air Conditioner 1.5 Ton", 149000, "photo-1631545806609-7d7c4e7a3e2b"],
    ["Portable Air Cooler", 28900, "photo-1621905251189-08b45d6a269e"],
    ["Pedestal Fan 18 Inch", 8900, "photo-1581276161018-7d0c1f3e1d8e"],
    ["Rechargeable Table Fan", 5600, "photo-1581276161018-7d0c1f3e1d8e"],
    ["Ceiling Fan 56 Inch", 7400, "photo-1621905251189-08b45d6a269e"],
    ["Tower Fan with Remote", 14900, "photo-1581276161018-7d0c1f3e1d8e"],
    ["Mini USB Desk Fan", 1900, "photo-1581276161018-7d0c1f3e1d8e"],
    ["Desert Air Cooler", 36900, "photo-1621905251189-08b45d6a269e"],
    ["Room Dehumidifier", 32900, "photo-1621905251189-08b45d6a269e"],
    ["Air Purifier with HEPA Filter", 24900, "photo-1585771724684-38269d6639fd"],
    ["Air Conditioner Stabilizer", 8500, "photo-1581092160562-40aa08e78837"],
    ["Rechargeable Emergency Fan", 6500, "photo-1581276161018-7d0c1f3e1d8e"],
    ["Smart Air Quality Monitor", 11900, "photo-1558618666-fcd25c85cd64"],
    ["Window Air Conditioner", 89900, "photo-1631545806609-7d7c4e7a3e2b"],
    ["Industrial Wall Fan", 12700, "photo-1581276161018-7d0c1f3e1d8e"],
    ["Mist Fan Outdoor", 21900, "photo-1621905251189-08b45d6a269e"],
    ["Air Cooler Water Pump", 2200, "photo-1581092160562-40aa08e78837"],
    ["Smart Thermostat", 9900, "photo-1558618666-fcd25c85cd64"],
    ["Portable Personal Cooler", 7200, "photo-1621905251189-08b45d6a269e"],
    ["Ceiling Fan Remote Kit", 2500, "photo-1581092160562-40aa08e78837"],
    ["HVAC Air Filter Pack", 1800, "photo-1585771724684-38269d6639fd"],
    ["Compact Desk Air Purifier", 7900, "photo-1585771724684-38269d6639fd"],
    ["Rechargeable Neck Fan", 2100, "photo-1581276161018-7d0c1f3e1d8e"],
    ["Smart Wi-Fi Plug for AC", 3200, "photo-1558618666-fcd25c85cd64"],
    ["Digital Room Thermometer", 1500, "photo-1558618666-fcd25c85cd64"],
    ["Air Cooler Remote Control", 1200, "photo-1581092160562-40aa08e78837"],
    ["Window Exhaust Fan", 3800, "photo-1581276161018-7d0c1f3e1d8e"],
    ["Mini Portable Air Conditioner", 17900, "photo-1621905251189-08b45d6a269e"],
    ["Premium Pedestal Fan", 11900, "photo-1581276161018-7d0c1f3e1d8e"]
  ],
  "Health & Beauty": [
    ["Professional Hair Dryer", 5900, "photo-1522338242992-e1a54906a8da"],
    ["Ceramic Hair Straightener", 4200, "photo-1522338242992-e1a54906a8da"],
    ["Rotating Hot Air Brush", 6800, "photo-1522338242992-e1a54906a8da"],
    ["Rechargeable Beard Trimmer", 3500, "photo-1621607512214-68297480165e"],
    ["Electric Shaver for Men", 4900, "photo-1621607512214-68297480165e"],
    ["Electric Toothbrush", 3200, "photo-1609840114035-3c981b782dfe"],
    ["Water Flosser", 5200, "photo-1609840114035-3c981b782dfe"],
    ["Digital Body Weight Scale", 2900, "photo-1576091160399-112ba8d25d1d"],
    ["Upper Arm Blood Pressure Monitor", 6900, "photo-1576091160399-112ba8d25d1d"],
    ["Digital Thermometer", 1200, "photo-1576091160399-112ba8d25d1d"],
    ["Foot Spa Massager", 9900, "photo-1540555700478-4be289fbecef"],
    ["Neck and Shoulder Massager", 8500, "photo-1540555700478-4be289fbecef"],
    ["Facial Cleansing Brush", 2600, "photo-1522338242992-e1a54906a8da"],
    ["LED Makeup Mirror", 3900, "photo-1522338242992-e1a54906a8da"],
    ["Manicure and Pedicure Kit", 2400, "photo-1522338242992-e1a54906a8da"],
    ["Nose and Ear Hair Trimmer", 1800, "photo-1621607512214-68297480165e"],
    ["IPL Hair Removal Device", 18900, "photo-1522338242992-e1a54906a8da"],
    ["Portable Mini Massager", 2100, "photo-1540555700478-4be289fbecef"],
    ["Smart Fitness Band", 7900, "photo-1523275335684-37898b6baf30"],
    ["Digital Kitchen and Body Scale", 2200, "photo-1576091160399-112ba8d25d1d"],
    ["Hot and Cold Facial Steamer", 6400, "photo-1522338242992-e1a54906a8da"],
    ["Rechargeable Lint Remover", 1700, "photo-1621607512214-68297480165e"],
    ["Hair Clipper Set", 4600, "photo-1621607512214-68297480165e"],
    ["Smart Body Composition Scale", 5900, "photo-1576091160399-112ba8d25d1d"],
    ["Portable Air Compression Massager", 11900, "photo-1540555700478-4be289fbecef"],
    ["Mini Facial Hair Remover", 2300, "photo-1522338242992-e1a54906a8da"],
    ["Rechargeable Callus Remover", 2800, "photo-1540555700478-4be289fbecef"],
    ["Digital Pulse Oximeter", 1900, "photo-1576091160399-112ba8d25d1d"],
    ["Electric Heating Pad", 3300, "photo-1540555700478-4be289fbecef"],
    ["Premium Hair Styling Kit", 8900, "photo-1522338242992-e1a54906a8da"]
  ],
  "Home Appliances": [
    ["Top Mount Refrigerator", 119000, "photo-1571175443880-49e1d25b2bc5"],
    ["Chest Freezer 200L", 84900, "photo-1571175443880-49e1d25b2bc5"],
    ["Front Load Washing Machine", 139000, "photo-1626806787461-102c1bfaaea1"],
    ["Twin Tub Washing Machine", 64900, "photo-1626806787461-102c1bfaaea1"],
    ["Clothes Steam Iron", 3900, "photo-1484154218962-a197022b5858"],
    ["Steam Generator Iron", 11900, "photo-1484154218962-a197022b5858"],
    ["Cordless Vacuum Cleaner", 18900, "photo-1558317374-067fb5f30001"],
    ["Robot Vacuum Cleaner", 42900, "photo-1558317374-067fb5f30001"],
    ["Wet and Dry Vacuum", 23900, "photo-1558317374-067fb5f30001"],
    ["Microwave Oven", 25900, "photo-1574269909862-7e1d70bb8078"],
    ["Digital Microwave Oven", 34900, "photo-1574269909862-7e1d70bb8078"],
    ["LED Smart TV 43 Inch", 89900, "photo-1593359677879-a4bb92f829d1"],
    ["LED Smart TV 55 Inch", 149000, "photo-1593359677879-a4bb92f829d1"],
    ["Soundbar with Subwoofer", 22900, "photo-1545454675-3531b543be5d"],
    ["Bluetooth Home Speaker", 8900, "photo-1608043152269-423dbba4e7e1"],
    ["Portable Projector", 27900, "photo-1535016120720-40c646be5580"],
    ["Home UPS 1000VA", 25900, "photo-1581092160562-40aa08e78837"],
    ["Voltage Protector", 2900, "photo-1581092160562-40aa08e78837"],
    ["Water Dispenser Hot and Cold", 28900, "photo-1565452344518-47faca6b7c1c"],
    ["Electric Room Heater", 7900, "photo-1585338107529-13afc5f02586"],
    ["Portable Garment Steamer", 5200, "photo-1484154218962-a197022b5858"],
    ["Smart LED Bulb 4 Pack", 2600, "photo-1507473885765-e6ed057f782c"],
    ["Wi-Fi Smart Plug 2 Pack", 3200, "photo-1558618666-fcd25c85cd64"],
    ["Indoor Security Camera", 5900, "photo-1558002038-1055907df827"],
    ["Digital Safe Box", 11900, "photo-1558618666-fcd25c85cd64"],
    ["Electric Water Heater", 18900, "photo-1565452344518-47faca6b7c1c"],
    ["Air Purifier Tower", 22900, "photo-1585771724684-38269d6639fd"],
    ["Portable Power Station", 64900, "photo-1581092160562-40aa08e78837"],
    ["Smart Doorbell Camera", 7900, "photo-1558002038-1055907df827"],
    ["Compact Dehumidifier", 17900, "photo-1585771724684-38269d6639fd"]
  ],
  "Kitchen Appliances": [
    ["High Speed Blender", 6900, "photo-1570222094114-d054a817e56b"],
    ["Food Processor 800W", 11900, "photo-1570222094114-d054a817e56b"],
    ["Electric Kettle 1.7L", 3200, "photo-1594212699903-ec8a3eca50f5"],
    ["Digital Air Fryer", 14900, "photo-1585515320310-259814833e62"],
    ["Rice Cooker 1.8L", 5200, "photo-1585515320310-259814833e62"],
    ["Espresso Coffee Machine", 24900, "photo-1495474472287-4d71bcdd2085"],
    ["Drip Coffee Maker", 8900, "photo-1495474472287-4d71bcdd2085"],
    ["2 Slice Toaster", 3500, "photo-1585515320310-259814833e62"],
    ["Sandwich Maker", 2900, "photo-1585515320310-259814833e62"],
    ["Electric Hand Mixer", 3100, "photo-1570222094114-d054a817e56b"],
    ["Stand Mixer with Bowl", 17900, "photo-1570222094114-d054a817e56b"],
    ["Citrus Juicer", 2600, "photo-1570222094114-d054a817e56b"],
    ["Slow Juicer", 13900, "photo-1570222094114-d054a817e56b"],
    ["Electric Pressure Cooker", 12900, "photo-1585515320310-259814833e62"],
    ["Induction Cooktop", 7900, "photo-1585515320310-259814833e62"],
    ["Electric Hot Plate", 4900, "photo-1585515320310-259814833e62"],
    ["Kitchen Chimney Hood", 27900, "photo-1556911220-bff31c812dba"],
    ["Mini Chopper", 2300, "photo-1570222094114-d054a817e56b"],
    ["Digital Kitchen Scale", 1800, "photo-1585515320310-259814833e62"],
    ["Water Filter Dispenser", 9900, "photo-1565452344518-47faca6b7c1c"],
    ["Waffle Maker", 4200, "photo-1585515320310-259814833e62"],
    ["Popcorn Maker", 3800, "photo-1585515320310-259814833e62"],
    ["Electric Grill and Griddle", 8900, "photo-1556911220-bff31c812dba"],
    ["Mini Dishwasher", 54900, "photo-1556911220-bff31c812dba"],
    ["Vacuum Sealer", 6900, "photo-1585515320310-259814833e62"],
    ["Yogurt Maker", 3900, "photo-1585515320310-259814833e62"],
    ["Electric Milk Frother", 2400, "photo-1495474472287-4d71bcdd2085"],
    ["Countertop Ice Maker", 25900, "photo-1585515320310-259814833e62"],
    ["Digital Food Thermometer", 1500, "photo-1585515320310-259814833e62"],
    ["Premium Kitchen Appliance Set", 21900, "photo-1556911220-bff31c812dba"]
  ]
};
const imageFallbacks = {
  "Cooling Appliances":"photo-1621905251189-08b45d6a269e",
  "Health & Beauty":"photo-1522338242992-e1a54906a8da",
  "Home Appliances":"photo-1558317374-067fb5f30001",
  "Kitchen Appliances":"photo-1570222094114-d054a817e56b"
};
const allProducts = [];
let id = 1;
Object.entries(categories).forEach(([category, products]) => {
  products.forEach(([name, price, photo], index) => {
    allProducts.push({
      id: id++, name, price, category,
      image: `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=650&q=80`,
      rating: (4.1 + ((index * 7 + id) % 9) / 10).toFixed(1),
      reviews: 18 + ((index * 23 + id * 3) % 380),
      tag: index % 9 === 0 ? "POPULAR" : (index % 7 === 0 ? "GOOD PICK" : "")
    });
  });
});
const money = n => "Rs " + Number(n).toLocaleString("en-PK");
const $ = s => document.querySelector(s);
const grid = $("#productGrid");
let currentCategory = "All";
let searchTerm = "";
let sortMode = "featured";
let showAllProducts = false;
let cart = [];
let toastTimer;
function filteredProducts() {
  let items = allProducts.filter(p => {
    const categoryMatch = currentCategory === "All" || currentCategory === "Deals" ||
      p.category === currentCategory;
    const haystack = `${p.name} ${p.category}`.toLowerCase();
    const searchMatch = !searchTerm || haystack.includes(searchTerm.toLowerCase());
    const dealMatch = currentCategory !== "Deals" || Boolean(p.tag);
    return categoryMatch && searchMatch && dealMatch;
  });
  if (sortMode === "low") items.sort((a,b)=>a.price-b.price);
  if (sortMode === "high") items.sort((a,b)=>b.price-a.price);
  if (sortMode === "az") items.sort((a,b)=>a.name.localeCompare(b.name));
  return items;
}
function productCard(p) {
  return `<article class="product-card">
    <div class="product-image"><img loading="lazy" src="${p.image}" alt="${p.name}" onerror="this.onerror=null;this.src='https://images.unsplash.com/${imageFallbacks[p.category]}?auto=format&fit=crop&w=650&q=80'">
      ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ""}
      <button class="wish-btn" data-wish="${p.id}" aria-label="Add ${p.name} to wishlist" title="Wishlist">♡</button>
    </div>
    <div class="product-info"><div class="product-category">${p.category}</div><h3>${p.name}</h3>
      <div class="rating">★ ★ ★ ★ ☆ <span>${p.rating} (${p.reviews})</span></div>
      <div class="price-row"><div><span class="price">${money(p.price)}</span></div><button class="add-cart" data-add="${p.id}" aria-label="Add ${p.name} to cart" title="Add to cart">+</button></div>
    </div></article>`;
}
function renderProducts() {
  const items = filteredProducts();
  const visible = showAllProducts || searchTerm || currentCategory !== "All" ? items : items.slice(0, 12);
  grid.innerHTML = visible.map(productCard).join("");
  $("#emptyState").hidden = items.length !== 0;
  grid.hidden = items.length === 0;
  $("#productTitle").textContent = searchTerm ? "Search results" : currentCategory === "All" ? "Popular products" : currentCategory === "Deals" ? "Good picks & popular finds" : currentCategory;
  $("#resultMessage").textContent = searchTerm ? `${items.length} product${items.length===1?"":"s"} found for “${searchTerm}”.` : currentCategory === "All" ? "Explore customer favourites and everyday essentials." : `Explore our ${currentCategory.toLowerCase()} collection.`;
  $("#productCountText").textContent = items.length ? `Showing ${visible.length} of ${items.length} products` : "No products to show";
  $("#showAll").hidden = items.length <= 12 || showAllProducts || Boolean(searchTerm) || currentCategory !== "All";
  document.querySelectorAll("[data-category]").forEach(el => {
    if (el.classList.contains("nav-link")) el.classList.toggle("active", el.dataset.category === currentCategory);
    if (el.classList.contains("filter-chip")) el.classList.toggle("selected", el.dataset.category === currentCategory);
  });
}
function setCategory(category, scroll = true) {
  currentCategory = category;
  searchTerm = "";
  $("#searchInput").value = "";
  showAllProducts = false;
  renderProducts();
  if (scroll) $("#products").scrollIntoView({behavior:"smooth", block:"start"});
}
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
}
function addToCart(id) {
  const product = allProducts.find(p => p.id === Number(id));
  if (!product) return;
  const existing = cart.find(item => item.id === product.id);
  if (existing) existing.qty += 1;
  else cart.push({...product, qty:1});
  renderCart();
  showToast(`${product.name} added to your cart`);
}
function renderCart() {
  const count = cart.reduce((sum,item)=>sum+item.qty,0);
  $("#cartCount").textContent = count;
  $("#drawerCount").textContent = `(${count})`;
  $("#cartSubtotal").textContent = money(cart.reduce((sum,item)=>sum+item.price*item.qty,0));
  $("#cartItems").innerHTML = cart.length ? cart.map(item => `
    <div class="cart-row"><img src="${item.image}" alt="">
      <div><h4>${item.name}</h4><div class="cart-price">${money(item.price)}</div>
      <div class="quantity"><button data-qty="${item.id}" data-change="-1" aria-label="Decrease quantity">−</button><span>${item.qty}</span><button data-qty="${item.id}" data-change="1" aria-label="Increase quantity">+</button></div></div>
      <button class="remove-item" data-remove="${item.id}" aria-label="Remove ${item.name}">×</button>
    </div>`).join("") : `<div class="cart-empty"><span>🛍️</span><h3>Your cart is empty</h3><p>Find something you love and add it here.</p></div>`;
}
function openCart() {
  $("#cartDrawer").classList.add("open");
  $("#overlay").classList.add("open");
  $("#cartDrawer").setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  $("#cartDrawer").classList.remove("open");
  $("#overlay").classList.remove("open");
  $("#cartDrawer").setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}
$("#searchForm").addEventListener("submit", e => {
  e.preventDefault();
  searchTerm = $("#searchInput").value.trim();
  currentCategory = "All";
  showAllProducts = true;
  renderProducts();
  $("#products").scrollIntoView({behavior:"smooth",block:"start"});
});
$("#searchInput").addEventListener("input", e => {
  searchTerm = e.target.value.trim();
  currentCategory = "All";
  showAllProducts = true;
  renderProducts();
});
document.addEventListener("click", e => {
  const categoryEl = e.target.closest("[data-category]");
  if (categoryEl) {
    e.preventDefault();
    setCategory(categoryEl.dataset.category, true);
    return;
  }
  const add = e.target.closest("[data-add]");
  if (add) { addToCart(add.dataset.add); return; }
  const wish = e.target.closest("[data-wish]");
  if (wish) {
    wish.classList.toggle("liked");
    wish.textContent = wish.classList.contains("liked") ? "♥" : "♡";
    showToast(wish.classList.contains("liked") ? "Added to your wishlist" : "Removed from wishlist");
    return;
  }
  const qty = e.target.closest("[data-qty]");
  if (qty) {
    const item = cart.find(i => i.id === Number(qty.dataset.qty));
    if (item) {
      item.qty += Number(qty.dataset.change);
      if (item.qty <= 0) cart = cart.filter(i => i.id !== item.id);
      renderCart();
    }
    return;
  }
  const remove = e.target.closest("[data-remove]");
  if (remove) { cart = cart.filter(i=>i.id!==Number(remove.dataset.remove)); renderCart(); }
});
$("#sortSelect").addEventListener("change", e => { sortMode = e.target.value; renderProducts(); });
$("#showAll").addEventListener("click", () => { showAllProducts = true; renderProducts(); });
$("#clearSearch").addEventListener("click", () => { setCategory("All", false); renderProducts(); });
$("#cartOpen").addEventListener("click", openCart);
$("#cartClose").addEventListener("click", closeCart);
$("#overlay").addEventListener("click", closeCart);
document.addEventListener("keydown", e => { if(e.key === "Escape") closeCart(); });
$("#checkoutBtn").addEventListener("click", () => {
  if (!cart.length) { showToast("Your cart is empty — add a product first."); return; }
  showToast("Demo checkout: connect a payment and order system to accept orders.");
});
$("#newsletterForm").addEventListener("submit", e => {
  e.preventDefault();
  $("#newsletterMessage").textContent = "Thanks! This demo form is not connected to an email service yet.";
  $("#emailInput").value = "";
});
$("#year").textContent = new Date().getFullYear();
renderProducts();
renderCart();
