const tele = 'data:image/png;base64,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'
const ig = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPbEdSyZrjNPqoAeroD0go1aOOes-JJv8v1jYwWSD-Zd10JR3&s'
const fb = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa3qskp70YrxHrZfWJ58W1XhM1xaoO7A1tI9Eio34n1ZqS5es&s'
const wa = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/120px-WhatsApp.svg.png'
const email = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPTMkZOlVCzWEJL4-PHTEahJq3szxYIycZ6Kg6LjxG04Goqn8&s'
const web = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsVcU3XLSEQMZPeJRSDJtxDY8WGkfoRhPKaqMIEsYpmlJSct0&s'

const teleD = 'Chat Via Telegram'
const igD = 'Chat Via Instagram'
const fbD = 'Chat Via Facebook'
const waD = 'Chat Via WhatsApp'
const emailD = 'Chat Via Email'
const webD = 'Order Via Website'

const products = [
    {
        id: 1,
        name: "Grup XshopTopup",
        price: 0,
        image: "https://files.catbox.moe/o5vc2x.jpg",
        description: "Group topup game",
        author: "XshopTopup",
        features: [
            "Layanan menggunakan bot XSTBot",
            "Jangan rasis",
            "Jangan membuat keributan",
            "Bebas menggunakan layanan bot, (remini, download video tiktok, dll)",
            "Admin maha benar",
            "Join Klik Tombol BELI PRODUK lalu klik logo wa"
        ],
        paymentMethods: [
            {
               logo: wa,
               description: waD,
               link: 'https://chat.whatsapp.com/ETd1zXj4fvmAtUc8veO4zY'
            },
        ]
    },
    {
        id: 2,
        name: "Gmail Cloning",
        price: 15000,
        image: "https://files.catbox.moe/6lmzyc.jpg",
        description: "Gmail clone 100% aman.",
        author: "XshopTopup",
        features: [
            "Domain gmailmu@gmail.com",
            "Satu gmail bisa ratusan hingga ribuan",
            "Garansi seumur hidup",
            "Harga diatas untuk 50 sampai 150 gmail",
            "Selengkapnya tanya admin"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6285380779466?text=Saya%20ingin%20bertanya%20atau%20Ingin%20membeli%20produk%20Gmail%20Cloning'
            },
        ]
    },
    {
        id: 3,
        name: "Script XSTBot Store",
        price: 50000,
        image: "https://files.catbox.moe/yympoo.jpg",
        description: "script bot whatsapp tipe case menggunakan baileys whiskeysocket original versi terbaru.",
        author: "XshopTopup",
        features: [
            "Pairing Code & Scan QR",
            "Fitur store (list, addlist, updatelist, dellist, dll)",
            "Fitur lain (Remini, download video tiktok, cek winrate mlbb, cek region mlbb, dll)",
            "Selengkapnya cek di bot admin"
        ],
        paymentMethods: [
            {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6285380779466?text=Saya%20ingin%20bertanya%20atau%20Ingin%20membeli%20produk%20Script%20XSTBot%20Store'
            },
        ]
    },
    {
        id: 4,
        name: "Sewa XSTBot Store",
        price: 8000,
        image: "https://files.catbox.moe/7hdl6v.jpg",
        description: "Sewa XSTBot Store",
        author: "XshopTopup",
        features: [
            "Sewa 30 Hari Rp,8.000",
            "Sewa 90 Hari Rp,20.000",
            "Sewa 180 Hari Rp,35.000",
            "Tidak menerima sewa grub spam..!!"
        ],
        paymentMethods: [
            {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6285380779466?text=Saya%20ingin%20bertanya%20atau%20Ingin%20membeli%20produk%20Script%20XSTBot%20Store'
            },
        ]
    },
    {
        id: 5,
        name: "Like Profile MLBB Gratis",
        price: 0,
        image: "https://files.catbox.moe/nfvwoc.jpg",
        description: "Uji coba 20 Like Profile Gratis",
        author: "XshopTopup",
        features: [
            "20 Like Profile Gratis",
            "Sesuai antrian, ekstra sabar",
            "Spam minta cepet auto dikirim diamond ilegal."
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6288279268363'
            },
        ]
    },
    {
        id: 6,
        name: "Followers Profile MLBB",
        price: 100,
        image: "https://files.catbox.moe/tnh7qw.jpg",
        description: "Info❗ : Proses bertahap, maksimal 1.000 Followers perhari.",
        author: "XshopTopup",
        features: [
            "1 Followers Rp,100",
            "500 Followers Rp,46.200",
            "1.000 Followers Rp,90.200",
            "Followers 100% aman & Permanen"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6285717062467'
            },
        ]
    },
    {
        id: 7,
        name: "Like Profile MLBB",
        price: 40,
        image: "https://files.catbox.moe/azu90e.jpg",
        description: "Info❗ : Proses bertahap, maksimal 1.000 Like perhari.",
        author: "XshopTopup",
        features: [
            "1 Like Rp,40",
            "500 Like Rp,18.700",
            "1.000 Like Rp,29.700",
            "2.000 Like Rp,57.200",
            "5.000 Like Rp,139.700",
            "10.000 Like Rp,277.200",
            "Like 100% aman & Permanen"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6283829814737'
            },
        ]
    },
    {
        id: 8,
        name: "Love Album MLBB",
        price: 40,
        image: "https://files.catbox.moe/cj2wah.jpg",
        description: "Info❗ : Proses bertahap, maksimal 1.000 Love perhari.",
        author: "XshopTopup",
        features: [
            "1 Love Album Rp,40",
            "500 Love Album ke1 Rp,18.700",
            "500 Love Album ke2 Rp,18.700",
            "500 Love Album ke3 Rp,18.700",
            "500 Love Album ke4 Rp,18.700",
            "1.000 Love Album ke1 Rp,29.700",
            "1.000 Love Album ke2 Rp,29.700",
            "1.000 Love Album ke3 Rp,29.700",
            "1.000 Love Album ke4 Rp,29.700",
            "2.000 Love Album ke1 Rp,57.200",
            "2.000 Love Album ke2 Rp,57.200",
            "2.000 Love Album ke3 Rp,57.200",
            "2.000 Love Album ke4 Rp,57.200",
            "5.000 Love Album ke1 Rp,139.700",
            "5.000 Love Album ke2 Rp,139.700",
            "5.000 Love Album ke3 Rp,139.700",
            "5.000 Love Album ke4 Rp,139.700",
            "10.000 Love Album ke1 Rp,277.200",
            "10.000 Love Album ke2 Rp,277.200",
            "10.000 Love Album ke3 Rp,277.200",
            "10.000 Love Album ke4 Rp,277.200",
            "Love 100% aman & Permanen"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/62895326036822'
            },
        ]
    },
    {
        id: 9,
        name: "Views Album MLBB",
        price: 2,
        image: "https://files.catbox.moe/zrx9xw.jpg",
        description: "Info❗ : Proses bertahap, maksimal 1.000 Views perhari.",
        author: "XshopTopup",
        features: [
            "10.000 Views Rp,13.200",
            "20.000 Views Rp,24.200",
            "50.000 Views Rp,51.700",
            "100.000 Views Rp,101.200",
            "Views 100% aman & Permanen"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6283134213550'
            },
        ]
    },
    {
        id: 10,
        name: "Dikomen Airplane MLBB",
        price: 5000,
        image: "https://files.catbox.moe/qq8369.jpg",
        description: "Album dikomen player yang menggunakan border airplane.",
        author: "XshopTopup",
        features: [
            "1 Komen Rp,5.000",
            "2 Komen Rp,10.000",
            "3 Komen Rp,15.000",
            "4 Komen Rp,20.000",
            "5 Komen Rp,25.000"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/62895342022385'
            },
        ]
    },
    {
        id: 11,
        name: "Dikomen Stardom MLBB",
        price: 13000,
        image: "https://files.catbox.moe/jqz4on.jpg",
        description: "Album dikomen player yang menggunakan border stardom.",
        author: "XshopTopup",
        features: [
            "1 Komen Rp,13.000",
            "2 Komen Rp,26.000",
            "3 Komen Rp,39.000",
            "4 Komen Rp,52.000",
            "5 Komen Rp,65.000"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6285717062467'
            },
        ]
    },
    {
        id: 12,
        name: "Dikomen Akun Smurf MLBB",
        price: 5000,
        image: "https://files.catbox.moe/z5ac40.jpg",
        description: "Album dikomen player yang menggunakan border random.",
        author: "XshopTopup",
        features: [
            "1 komen Rp,150",
            "50 komen Rp,5.000",
            "100 komen Rp,10.000",
            "150 komen Rp,15.000",
            "200 komen Rp,20.000",
            "250 komen Rp,25.000",
            "300 komen Rp,30.000",
            "350 komen Rp,35.000",
            "400 komen Rp,40.000",
            "450 komen Rp,45.000",
            "500 komen Rp,50.000",
            "2.000 komen Rp,150.000",
            "Order dibawah 2k komen dikali 100 rupiah"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6288229683561'
            },
        ]
    },
];







// Generate product list
const productsSection = document.querySelector(".products");
products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2 class="tityd">${product.name}</h2>
        <p>Rp ${product.price.toLocaleString('id-ID')}</p>
    `;
    productCard.addEventListener('click', () => openProductDetail(product));
    productsSection.appendChild(productCard);
});

function openProductDetail(product) {
    const overlay = document.getElementById("product-detail-overlay");
    const detailContent = document.getElementById("product-detail");
    const overlayContent = document.getElementById("product-detail-content");
    
    detailContent.innerHTML = `
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-detail-image">
        </div>
        <div class="product-info">
            <h2>${product.name}</h2>
            <p class="product-price">Rp ${product.price.toLocaleString('id-ID')}</p>
            <p>${product.description}</p>
              <h5>✒️ ${product.author}</h5>
            <h3>Harga</h3>
            <ul>
                ${product.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <button class="buy-button" onclick="openPaymentMenu(${product.id})">Beli Produk</button>
    `;
    
    overlay.style.display = "block";
    overlayContent.scrollTop = 0;
    
    setTimeout(() => {
        overlay.classList.add('active');
    }, 10);

    // Reset payment menu state
    document.getElementById('payment-menu').classList.remove('active');
    document.getElementById('close-detail').style.display = 'flex';
}

function openPaymentMenu(productId) {
    const product = products.find(p => p.id === productId);
    const paymentMenu = document.getElementById('payment-menu');
    const paymentOptions = document.getElementById('payment');

    paymentOptions.innerHTML = product.paymentMethods.map(method => `
        <div class="payment-option" onclick="selectPaymentMethod('${method.link}')">
        <img src="${method.logo}" alt="${method.description}">
        <span class="payy">${method.description}</span>
      </div>
    `).join('');

    paymentMenu.classList.add('active');
}

function selectPaymentMethod(link) {
    window.location.href = link;
}

// Close payment menu when clicking outside
document.addEventListener('click', (event) => {
    const paymentMenu = document.getElementById('payment-menu');
    if (paymentMenu.classList.contains('active') && !paymentMenu.contains(event.target) && !event.target.classList.contains('buy-button')) {
        paymentMenu.classList.remove('active');
    }
});

function animateCount(elementId, target, duration) {
    const element = document.getElementById(elementId);
    const start = 0;
    const increment = target / (duration / 16); // 16ms adalah sekitar 60fps
    let current = start;

    const animateCount = () => {
        current += increment;
        element.textContent = Math.floor(current).toLocaleString();

        if (current < target) {
            requestAnimationFrame(animateCount);
        } else {
            element.textContent = target.toLocaleString();
        }
    };

    animateCount();
}

document.addEventListener('DOMContentLoaded', () => {
    animateCount('seller-count', 24, 4000); // Total Penjual
    animateCount('sales-count', 28, 4000); // Total Terjual
    animateCount('sell', 56, 4000);
    
    const closeButton = document.getElementById('close-detail');
    closeButton.addEventListener('click', closeProductDetail);
});

document.querySelectorAll('.product-item').forEach((item, index) => {
    item.addEventListener('click', () => openProductDetail(products[index]));
});

// Close the overlay when clicking outside the content
document.getElementById("product-detail-overlay").addEventListener('click', (event) => {
    if (event.target.id === "product-detail-overlay") {
        closeProductDetail();
    }
});

// Function to close product detail overlay
let lastScrollPosition = 0;

function closeProductDetail() {
    const overlay = document.getElementById("product-detail-overlay");
    const overlayContent = document.getElementById("product-detail-content");
    const closeButton = document.getElementById('close-detail');
    
    // Save the last scroll position
    lastScrollPosition = overlayContent.scrollTop;
    
    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.style.display = "none";
        closeButton.style.display = 'none'; // Hide the close button
    }, 300); // Wait for the animation to complete
}

const searchOverlay = document.getElementById('search-overlay');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');
const searchTrigger = document.querySelector('.search-container .search-bar input');
const searchTriggerBtn = document.querySelector('.search-container .search-bar button');
const backButton = document.getElementById('back-button');

function openSearchOverlay() {
    searchOverlay.classList.add('active');
    searchInput.focus();
    searchInput.placeholder = searchTrigger.placeholder;
}

function closeSearchOverlay() {
    searchOverlay.classList.remove('active');
}

function performSearch() {
    const query = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );

    displaySearchResults(filteredProducts);
}

function displaySearchResults(results) {
    searchResults.innerHTML = '';
    if (results.length === 0) {
        searchResults.innerHTML = '<p>No products found.</p>';
        return;
    }

    results.forEach(product => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('search-result-item');
        resultItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>Rp ${product.price.toLocaleString('id-ID')}</p>
            </div>
        `;
        resultItem.addEventListener('click', () => {
            openProductDetail(product);
            closeSearchOverlay();
        });
        searchResults.appendChild(resultItem);
    });
}

searchTrigger.addEventListener('click', openSearchOverlay);
searchTriggerBtn.addEventListener('click', openSearchOverlay);
searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

backButton.addEventListener('click', closeSearchOverlay);

document.getElementById("product-detail-overlay").addEventListener('transitionend', (event) => {
    if (event.propertyName === 'transform' && event.target.classList.contains('active')) {
        const overlayContent = document.getElementById("product-detail-content");
        overlayContent.scrollTop = 0;
    }
});
