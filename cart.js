const bookCartWrapper = document.getElementById("book-cart");
const cartBooks = document.getElementById("cart-books");
const emptyNote = document.getElementById("empty-note");
let detailsPage = false;

addEventListener("DOMContentLoaded", () => cartBlueCircle());
function emptyNoteFunction() {
  let basketItems = basket.filter((book) => book.item != 0);
  if (basketItems.length == 0) {
    bookCartWrapper.style.display = "none";
    emptyNote.style.display = "flex";
  } else {
    bookCartWrapper.style.display = "grid";
    emptyNote.style.display = "none";
  }
}
emptyNoteFunction();
calculation();

if (basket.length !== 0) {
  basket.map((x) => {
    let { id, item } = x;
    let search = allBooksArray.find((y) => y.id === id) || [];
    let { img, title, price } = search;
    cartBooks.innerHTML += `
<li class="cart-book" id="b${id}">
  <a href="#"><img src="images/books/${img}" alt="" /></a>
  <div class="cart-book-title">${title}</div>
  <div class="cart-book-price">${price.toLocaleString()}</div>
  <div class="cart-book-quantity">
    <i  onclick="increment(${id})" class="fas fa-plus"></i>
    <span id="count-${id}">${item}</span>
    <i onclick="decrement(${id})" class="fas fa-minus"></i>
  </div>
  <div class="cart-book-total-price">${(price * item).toLocaleString()}</div>
  <div class="cart-book-remove">
    <i class="fas fa-trash"></i>
  </div>
</li>
`;
  });
}

bookCartWrapper.innerHTML += `
<div class="checkout-section">
<h5>مجموع سفارش شما</h5>
<div class="checkout-quantity">
  <span>تعداد:</span>
  <span>2</span>
</div>
<div class="items-price">
  <span>مبلغ:</span>
  <span>300000 تومان </span>
</div>
<div class="delivery-price">
  <span>هزینۀ ارسال:</span>
  <span>35000 تومان </span>
</div>
<div class="total-price">
  <span>مبلغ کل:</span>
  <span>335000 تومان </span>
</div>
<button>ثبت سفارش</button>
</div>
`;

// =========================== DELETE ICON =============================

const trashIcons = document.querySelectorAll(".fa-trash");
const areYouSure = document.getElementById("are-you-sure");
const areYouSureButtons = document.querySelectorAll("button");
overlay.addEventListener("click", () => (areYouSure.style.display = "none"));
trashIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    areYouSure.style.display = "flex";
    overlay.style.display = "block";
    let buttonClicked;
    areYouSureButtons.forEach((button) => {
      button.addEventListener("click", () => {
        buttonClicked = button.className;

        if (buttonClicked == "no") {
          areYouSure.style.display = "none";
          overlay.style.display = "none";
        } else if (buttonClicked == "yes") {
          let thisBook = e.target.parentElement.parentElement;
          let search = basket.findIndex(
            (x) => x.id == thisBook.id.match(/\d+/)[0]
          );
          console.log();
          basket[search].item = 0;
          calculation();
          basket = basket.filter((x) => x.item !== 0);
          localStorage.setItem("data", JSON.stringify(basket));
          cartBlueCircle();
          emptyNoteFunction();
          areYouSure.style.display = "none";
          overlay.style.display = "none";
          thisBook.classList.add("remove-book");
          let animationDur = getComputedStyle(thisBook).animationDuration;
          let timeoutDuration = parseFloat(animationDur) * 1000;
          setTimeout(() => {
            thisBook.style.display = "none";
          }, timeoutDuration - 300);
        }
      });
    });
  });
});

totalPriceShow();
