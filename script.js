// Game data with real game titles and images
const games = [
    {
        id: 1,
        title: "Cyberpunk 2077",
        image: "https://images.unsplash.com/photo-1638549328894-9d9a9f0e1b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
        price: 59.99,
        discount: 39.99,
        rating: 4.3,
        tags: ["RPG", "Open World", "Cyberpunk"],
        description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival.",
        developer: "CD Projekt Red",
        releaseDate: "Dec 10, 2020",
        platform: "PC, PlayStation, Xbox",
        genre: "Action RPG",
        isFree: false,
        isNew: false
    },
    {
        id: 2,
        title: "The Witcher 3: Wild Hunt",
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
        price: 39.99,
        discount: 19.99,
        rating: 4.9,
        tags: ["RPG", "Open World", "Fantasy"],
        description: "As war rages on throughout the Northern Realms, you take on the greatest contract of your life — tracking down the Child of Prophecy, a living weapon that can alter the shape of the world.",
        developer: "CD Projekt Red",
        releaseDate: "May 19, 2015",
        platform: "PC, PlayStation, Xbox, Switch",
        genre: "Action RPG",
        isFree: false,
        isNew: false
    },
    {
        id: 3,
        title: "Elden Ring",
        image: "https://images.unsplash.com/photo-1648737963059-0e8a8c5fcc01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
        price: 59.99,
        discount: null,
        rating: 4.8,
        tags: ["RPG", "Open World", "Souls-like"],
        description: "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
        developer: "FromSoftware",
        releaseDate: "Feb 25, 2022",
        platform: "PC, PlayStation, Xbox",
        genre: "Action RPG",
        isFree: false,
        isNew: true
    },
    {
        id: 4,
        title: "Baldur's Gate 3",
        image: "https://images.unsplash.com/photo-1690989673280-8f3c3a8f2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
        price: 59.99,
        discount: null,
        rating: 4.9,
        tags: ["RPG", "Turn-based", "Fantasy"],
        description: "Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power.",
        developer: "Larian Studios",
        releaseDate: "Aug 3, 2023",
        platform: "PC, PlayStation",
        genre: "CRPG",
        isFree: false,
        isNew: true
    },
    {
        id: 5,
        title: "Forza Horizon 5",
        image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
        price: 59.99,
        discount: 39.99,
        rating: 4.7,
        tags: ["Racing", "Open World", "Simulation"],
        description: "Your Ultimate Horizon Adventure awaits! Explore the vibrant open world landscapes of Mexico with limitless, fun driving action in hundreds of the world's greatest cars.",
        developer: "Playground Games",
        releaseDate: "Nov 9, 2021",
        platform: "PC, Xbox",
        genre: "Racing",
        isFree: false,
        isNew: false
    },
    {
        id: 6,
        title: "Starfield",
        image: "https://images.unsplash.com/photo-1692273384302-8eacf8a1d2c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
        price: 69.99,
        discount: null,
        rating: 4.5,
        tags: ["RPG", "Space", "Sci-Fi"],
        description: "Starfield is the first new universe in 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4.",
        developer: "Bethesda Game Studios",
        releaseDate: "Sep 6, 2023",
        platform: "PC, Xbox",
        genre: "Action RPG",
        isFree: false,
        isNew: true
    },
    {
        id: 7,
        title: "Fortnite",
        image: "https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
        price: 0,
        discount: null,
        rating: 4.6,
        tags: ["Battle Royale", "Shooter", "Multiplayer"],
        description: "Fortnite is a free-to-play Battle Royale game with numerous game modes for every type of game player. Watch a concert, build an island or fight.",
        developer: "Epic Games",
        releaseDate: "Jul 25, 2017",
        platform: "PC, PlayStation, Xbox, Switch, Mobile",
        genre: "Battle Royale",
        isFree: true,
        isNew: false
    },
    {
        id: 8,
        title: "Among Us",
        image: "https://images.unsplash.com/photo-1607853554439-0069ec0f29b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
        price: 0,
        discount: null,
        rating: 4.2,
        tags: ["Party", "Multiplayer", "Social Deduction"],
        description: "Play with 4-15 players online or via local WiFi as you attempt to prepare your spaceship for departure, but beware as one will be an impostor bent on killing everyone!",
        developer: "InnerSloth",
        releaseDate: "Jun 15, 2018",
        platform: "PC, PlayStation, Xbox, Switch, Mobile",
        genre: "Party Game",
        isFree: true,
        isNew: false
    }
];

// Shopping cart
let cart = [];

// DOM Elements
const featuredGamesContainer = document.getElementById('featuredGames');
const newReleasesContainer = document.getElementById('newReleases');
const freeGamesContainer = document.getElementById('freeGames');
const gameModal = document.getElementById('gameModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalGameTitle = document.getElementById('modalGameTitle');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const modalPrice = document.getElementById('modalPrice');
const modalDeveloper = document.getElementById('modalDeveloper');
const modalReleaseDate = document.getElementById('modalReleaseDate');
const modalPlatform = document.getElementById('modalPlatform');
const modalGenre = document.getElementById('modalGenre');
const addToCartBtn = document.getElementById('addToCartBtn');
const cartButton = document.getElementById('cartButton');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const searchInput = document.getElementById('searchInput');

// Current game for modal
let currentGame = null;

// Generate game cards
function generateGameCard(game, container) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
        <div class="game-image" style="background-image: url('${game.image}')">
            ${game.isNew ? `<div class="game-badge">NEW</div>` : ''}
            ${game.isFree ? `<div class="game-badge free-badge">FREE</div>` : ''}
            ${!game.isFree && game.discount ? `<div class="game-badge">SAVE ${Math.round((game.price - game.discount) / game.price * 100)}%</div>` : ''}
        </div>
        <div class="game-content">
            <h3 class="game-title">${game.title}</h3>
            <div class="game-rating">
                ${Array(5).fill().map((_, i) => 
                    `<i class="fas fa-star${i < Math.floor(game.rating) ? '' : (i < game.rating ? '-half-alt' : '')}"></i>`
                ).join('')}
                <span>(${game.rating}/5)</span>
            </div>
            <div class="game-tags">
                ${game.tags.map(tag => `<div class="tag">${tag}</div>`).join('')}
            </div>
            <div class="game-details">
                <div class="game-price ${game.isFree ? 'free-price' : ''}">
                    ${game.isFree ? 'FREE' : 
                        game.discount ? 
                            `<span class="discount-price">$${game.price}</span> $${game.discount}` : 
                            `$${game.price}`
                    }
                </div>
                <button class="btn add-to-cart-btn" data-id="${game.id}" style="padding: 8px 15px;">
                    <i class="fas fa-shopping-cart"></i>
                </button>
            </div>
        </div>
    `;
    
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('add-to-cart-btn')) {
            openGameModal(game);
        }
    });
    
    container.appendChild(card);
    
    // Add event listener to the cart button
    const addToCartBtn = card.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(game);
    });
}

// Open game modal
function openGameModal(game) {
    currentGame = game;
    modalTitle.textContent = game.title;
    modalGameTitle.textContent = game.title;
    modalImage.style.backgroundImage = `url('${game.image}')`;
    modalDescription.textContent = game.description;
    
    if (game.isFree) {
        modalPrice.innerHTML = '<span class="free-price-text">FREE</span>';
    } else if (game.discount) {
        modalPrice.innerHTML = `<span class="discount-price">$${game.price}</span> $${game.discount}`;
    } else {
        modalPrice.innerHTML = `$${game.price}`;
    }
    
    modalDeveloper.textContent = game.developer;
    modalReleaseDate.textContent = game.releaseDate;
    modalPlatform.textContent = game.platform;
    modalGenre.textContent = game.genre;
    
    gameModal.classList.add('active');
}

// Add to cart
function addToCart(game) {
    const existingItem = cart.find(item => item.id === game.id);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...game,
            quantity: 1
        });
    }
    
    updateCart();
    
    // Show notification
    showNotification(`${game.title} added to cart`);
}

// Update cart UI
function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 30px; color: var(--text-secondary);">Your cart is empty</p>';
        cartTotal.textContent = '$0.00';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const itemPrice = item.isFree ? 0 : (item.discount || item.price);
        const itemTotal = itemPrice * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image" style="background-image: url('${item.image}')"></div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">${item.isFree ? 'FREE' : `$${itemPrice.toFixed(2)}`} x ${item.quantity}</div>
            </div>
            <button class="remove-item" data-id="${item.id}">
                <i class="fas fa-trash"></i>
            </button>
        `;
        
        cartItems.appendChild(cartItem);
        
        // Add event listener to remove button
        const removeBtn = cartItem.querySelector('.remove-item');
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            removeFromCart(item.id);
        });
    });
    
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Remove from cart
function removeFromCart(gameId) {
    cart = cart.filter(item => item.id !== gameId);
    updateCart();
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--success);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        z-index: 2000;
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    }, 10);
    
    // Animate out after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        
        // Remove after animation
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Search functionality
function searchGames(query) {
    const normalizedQuery = query.toLowerCase().trim();
    
    if (normalizedQuery === '') {
        // Show all games if query is empty
        featuredGamesContainer.innerHTML = '';
        newReleasesContainer.innerHTML = '';
        freeGamesContainer.innerHTML = '';
        initGames();
        return;
    }
    
    const results = games.filter(game => 
        game.title.toLowerCase().includes(normalizedQuery) ||
        game.tags.some(tag => tag.toLowerCase().includes(normalizedQuery)) ||
        game.genre.toLowerCase().includes(normalizedQuery)
    );
    
    // Clear containers
    featuredGamesContainer.innerHTML = '';
    newReleasesContainer.innerHTML = '';
    freeGamesContainer.innerHTML = '';
    
    if (results.length === 0) {
        featuredGamesContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">
                <i class="fas fa-gamepad" style="font-size: 3rem; margin-bottom: 20px;"></i>
                <h3>No games found</h3>
                <p>Try a different search term</p>
            </div>
        `;
        return;
    }
    
    // Show search results in the featured section
    results.forEach(game => {
        generateGameCard(game, featuredGamesContainer);
    });
    
    // Update section title
    document.querySelector('.section-title').textContent = 'Search Results';
    document.querySelector('.view-all').style.display = 'none';
}

// Initialize page
function initGames() {
    // Add featured games (first 3)
    games.slice(0, 3).forEach(game => {
        generateGameCard(game, featuredGamesContainer);
    });
    
    // Add new releases
    games.filter(game => game.isNew).forEach(game => {
        generateGameCard(game, newReleasesContainer);
    });
    
    // Add free games
    games.filter(game => game.isFree).forEach(game => {
        generateGameCard(game, freeGamesContainer);
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    initGames();
    
    // Modal close
    closeModal.addEventListener('click', () => {
        gameModal.classList.remove('active');
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === gameModal) {
            gameModal.classList.remove('active');
        }
    });
    
    // Add to cart from modal
    addToCartBtn.addEventListener('click', () => {
        if (currentGame) {
            addToCart(currentGame);
        }
    });
    
    // Cart sidebar toggle
    cartButton.addEventListener('click', () => {
        cartSidebar.classList.add('active');
    });
    
    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
    });
    
    // Search functionality
    searchInput.addEventListener('input', (e) => {
        searchGames(e.target.value);
    });
    
    // Close cart when clicking outside
    window.addEventListener('click', (e) => {
        if (!cartSidebar.contains(e.target) && !cartButton.contains(e.target) && cartSidebar.classList.contains('active')) {
            cartSidebar.classList.remove('active');
        }
    });
});

// Cart count animation
setInterval(() => {
    if (cart.length > 0) {
        cartCount.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
        }, 300);
    }
}, 5000);