/* Đóng - mở Popup giỏ hàng */

// B1: Truy cập phần tử
let cardBtn = document.querySelector(".cart-btn");
let cardModalOverlay = document.querySelector(".cart-modal-overlay");
let closeBtn = document.querySelector("#close-btn");

// B2: Thêm sự kiện click vào các phần tử
cardBtn.addEventListener("click", () => {
    cardModalOverlay.style.transform = "translateX(0)";
});

closeBtn.addEventListener("click", () => {
    cardModalOverlay.style.transform = "translateX(-200%)";
});

cardModalOverlay.addEventListener("click", (e) => {
    // Kiểm tra xem có ấn vào cart-modal-overlay, đúng -> true, sai -> false
    if (e.target.classList.contains("cart-modal-overlay") == true) {
        cardModalOverlay.style.transform = "translateX(-200%)";
    }
});



/* Thêm sản phẩm vào giỏ hàng */

// B1: Truy cập phần tử
const addToCart = document.querySelectorAll(".add-to-cart");

addToCart.forEach( (button) => {

    button.addEventListener("click", () => {
        cardModalOverlay.style.transform = "translateX(0)";

        addToCartClicked(button);

    })
});

//B2: Lấy thông tin giá, ảnh .... lên Popup
const addToCartClicked = (button) => {
    let parentCard = button.parentElement;

    let price = parentCard.querySelector(".product-price").innerHTML;
    let imageSrc = parentCard.querySelector(".product-image").src;

    addToCartItem(price, imageSrc);
}

//B3: Hiển thị lên Popup
const addToCartItem = (price, imageSrc) => {
    let productRows = document.querySelector(".product-rows");
    // console.log(productRows);

    // Tạo thẻ div
    let divEle = document.createElement("div");

    // Gán class vào thẻ div - product-row
    divEle.classList.add("product-row");

    let cartHTML = `
        <img class="cart-image" src="${imageSrc}" alt="">
        <span class ="cart-price">${price}</span>
        <input class="product-quantity" type="number" value="1">
        <button class="remove-btn">Remove</button>
    `;

    divEle.innerHTML = cartHTML;

    productRows.appendChild(divEle);
};