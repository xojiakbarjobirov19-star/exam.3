const cartIcon = document.getElementById('cart-icon');
const likeIcon = document.getElementById('like-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const likeSidebar = document.getElementById('like-sidebar');
const closeCart = document.getElementById('close-cart');
const closeLike = document.getElementById('close-like');
const cartItemsBox = document.getElementById('cart-items');
const likeItemsBox = document.getElementById('like-items');

const homeView = document.getElementById('home-view');
const detailView = document.getElementById('detail-view');
const logoBtn = document.getElementById('logo-btn');
const backHomeLink = document.getElementById('back-home-link');

let cartArray = [];
let likeArray = [];

function showHomeView() {
    detailView.classList.add('hidden');
    homeView.classList.remove('hidden');
    window.scrollTo(0, 0);
}

function showDetailView() {
    homeView.classList.add('hidden');
    detailView.classList.remove('hidden');
    window.scrollTo(0, 0);
}

if (logoBtn) logoBtn.addEventListener('click', showHomeView);
if (backHomeLink) backHomeLink.addEventListener('click', showHomeView);

function updateCartDOM() {
    cartItemsBox.innerHTML = '';
    
    for (let i = 0; i < cartArray.length; i++) {
        cartItemsBox.innerHTML += `
            <div class="item-row" style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; background: #fcfcfc; padding: 12px; border-radius: 16px; border: 1px solid #f0f0f0;">
                <img src="${cartArray[i].img}" style="width: 65px; height: 65px; border-radius: 12px; object-fit: cover;">
                <div style="display: flex; flex-direction: column; gap: 4px; flex: 1;">
                    <b style="font-size: 15px; color: #000;">${cartArray[i].name}</b>
                    <span style="font-size: 16px; font-weight: bold; color: #000;">${cartArray[i].price}</span>
                </div>
            </div>
        `;
    }
}

function updateLikeDOM() {
    likeItemsBox.innerHTML = '';
    
    for (let i = 0; i < likeArray.length; i++) {
        likeItemsBox.innerHTML += `
            <div class="item-row" style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; background: #fcfcfc; padding: 12px; border-radius: 16px; border: 1px solid #f0f0f0;">
                <img src="${likeArray[i].img}" style="width: 65px; height: 65px; border-radius: 12px; object-fit: cover;">
                <div style="display: flex; flex-direction: column; gap: 4px; flex: 1;">
                    <b style="font-size: 15px; color: #000;">${likeArray[i].name}</b>
                    <span style="font-size: 16px; font-weight: bold; color: #000;">${likeArray[i].price}</span>
                </div>
            </div>
        `;
    }
}

document.body.addEventListener('click', function(e) {
    if (e.target.closest('.open-detail')) {
        showDetailView();
        return;
    }
    
    if (e.target.closest('.add-to-cart-btn')) {
        e.stopPropagation();
        let button = e.target.closest('.add-to-cart-btn');
        let card = button.closest('.product-card');
        
        let pName = card.querySelector('.product-title').innerText;
        let pPrice = card.querySelector('.product-price').innerText;
        let pImg = card.querySelector('.product-img-box img').src;
        
        cartArray.push({ name: pName, price: pPrice, img: pImg });
        updateCartDOM();
        cartSidebar.classList.add('show');
        return;
    }
    
    if (e.target.closest('.add-to-like-btn')) {
        e.stopPropagation();
        let button = e.target.closest('.add-to-like-btn');
        let card = button.closest('.product-card');
        
        let pName = card.querySelector('.product-title').innerText;
        let pPrice = card.querySelector('.product-price').innerText;
        let pImg = card.querySelector('.product-img-box img').src;
        
        likeArray.push({ name: pName, price: pPrice, img: pImg });
        updateLikeDOM();
        likeSidebar.classList.add('show');
        return;
    }
});

if (cartIcon) cartIcon.addEventListener('click', () => cartSidebar.classList.add('show'));
if (closeCart) closeCart.addEventListener('click', () => cartSidebar.classList.remove('show'));

if (likeIcon) likeIcon.addEventListener('click', () => likeSidebar.classList.add('show'));
if (closeLike) closeLike.addEventListener('click', () => likeSidebar.classList.remove('show'));