/* --------------- Đóng - mở Popup giỏ hàng --------------------------- */

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

/* ---------------- Thêm sản phẩm vào giỏ hàng ----------------------- */

// B1: Truy cập phần tử
const addToCart = document.querySelectorAll(".add-to-cart");

addToCart.forEach((button) => {
    button.addEventListener("click", () => {
        cardModalOverlay.style.transform = "translateX(0)";

        addToCartClicked(button);
    });
});

//B2: Lấy thông tin giá, ảnh .... lên Popup
const addToCartClicked = (button) => {
    let parentCard = button.parentElement;

    let price = parentCard.querySelector(".product-price").innerHTML;
    let imageSrc = parentCard.querySelector(".product-image").src;

    addToCartItem(price, imageSrc);
};

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
    updateCartPrice();

    // Check sp them vao gio hang -> them 1 lan
    let cartImage = document.querySelectorAll(".cart-image");
    let isDuplicate = false;

    cartImage.forEach((item) => {
        if (item.src == imageSrc) {
            alert("Sản phẩm đã tồn tại. Vui lòng cập nhật lại trên giỏ hàng");
            isDuplicate = true;
        }
    });

    if (isDuplicate == true) {
        return null;
    }

    // Thêm mới sản phẩm vào giỏ hàng
    productRows.appendChild(divEle);
    updateCartPrice();

    // Xóa sản phẩm trong giỏ hàng
    let deleteSp = document.querySelectorAll(".remove-btn");
    deleteSp.forEach((btnRemove) => {
        btnRemove.addEventListener("click", () => {
            removeItem(btnRemove);
            updateCartPrice();
        });
    });

    // Người dùng thay đổi số lượng trong giỏ hàng
    let productQuantityEl = document.querySelectorAll(".product-quantity");
    productQuantityEl.forEach((inputEl) => {
        inputEl.addEventListener("change", () => {
            changeQuatity(inputEl);
        });
    });
};

// Xóa sản phẩm trong giỏ hàng
const removeItem = (item) => {
    item.parentElement.remove();
};

// Thay đổi số lượng trong giỏ hàng
const changeQuatity = (inputEl) => {
    // Không cho phép nhập sản phẩm nhỏ hơn 1
    if (inputEl.value < 1) {
        return (inputEl.value = 1);
    }

    // Cập nhật tổng giá tiền trên Popup
    updateCartPrice();
};

// Cập nhật giá tiền
const updateCartPrice = () => {
    let productRow = document.querySelectorAll(".product-row");

    let total = 0;
    let totalQuantity = 0;
    productRow.forEach((cartItem) => {
        // Số lượng của từng sản phẩm
        const quantityEl = cartItem.querySelector(".product-quantity").value;
        const quantity = parseFloat(quantityEl);

        // Gia tiền của từng sản phẩm
        const priceEl = cartItem.querySelector(".cart-price").innerHTML.replace("$", "");
        const price = parseFloat(priceEl);

        // Tổng giá tiền của từng sản phẩm
        total = total + (quantity * price);
        totalQuantity = totalQuantity + quantity;
    });
    // console.log(total);

    // Hiển thị giá tiền ra popup
    let totalPriceEl = document.querySelector(".total-price");
    totalPriceEl.innerHTML = `$ ${total}`

    // Hiển thị ra icon giỏ hàng
    let cartQuantityEl = document.querySelector(".cart-quantity");
    cartQuantityEl.innerHTML = totalQuantity;

    if (totalQuantity > 99) {
        cartQuantityEl.innerHTML = "99+";
    }
};
