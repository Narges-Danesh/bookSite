// Book Details Page

const bookId = urlParams.get("id");
const bookType = urlParams.get("type");

const detailsSection = document.getElementById("details");
let detailsPage = true;

let bookArray;
if (bookType == "popular") {
  bookArray = popularBookData;
} else if (bookType == "new") {
  bookArray = newBookData;
}

const thisBook = bookArray.find((book) => {
  return bookId.includes(book.id);
});

if (thisBook) {
  const {
    img,
    title,
    author,
    translator,
    desc,
    price,
    pages,
    lang,
    publicationYear,
    publisher,
    stars,
    id,
  } = thisBook;
  let search = basket.find((x) => x.id === id) || [];

  detailsSection.innerHTML = `
    <div class="book-wrapper-1">
    <div class="details-book-img">
      <img src="images/books/${img}" alt="">
    </div>
    <div class="book-details">
      <div class="details-book-title">${title}</div>
      <div class="details-book-stars">${stars}</div>
      <div class="details-book-author"> نویسنده: ${author}</div>
      <div class="details-book-translator">مترجم: ${translator}</div>
      <div class="details-book-publisher">نشر ${publisher}</div>
      <div class="details-book-price">قیمت: ${price.toLocaleString()}</div>
      <div class="buttons">
      <button onclick="increment(${id})" class="add-to-cart ${
    search.item === undefined ? "show" : "hide"
  }" id="cart-${id}">افزودن به سبد خرید</button> 
              <div class="${search.item === undefined ? "hide" : "show"}">
              <i onclick="increment(${id})" class="fas fa-plus"></i>
              <span id="count-${id}"> ${
    search.item === undefined ? 0 : search.item
  } </span>
              <i onclick="decrement(${id})"  class="fas fa-minus"></i>
              </div>
              </div>
    </div>
    </div>
      <div class="book-tabs">
      <div class="tabs">
      <button class="tab desc-tab active">
      توضیحات
      </button>
      <button class="tab info-tab">
      جزئیات
      </button>
    </div>
    <div class="contents">
    <div class="tab-content desc-content active">
    <div class="details-book-desc">${desc}</div>
    </div>
    <div class="tab-content info-content">
    <ul class="info-list">
    <li class="info-item pages">صفحات: ${pages}</li>
    <li class="info-item lang">زبان: ${lang}</li>
    <li class="info-item publicationYear">سال انتشار: ${publicationYear}</li>
    </ul>
    </div>
    </div>
      </div>
  `;

  // tabs
  const tabs = document.querySelectorAll(".tabs .tab");
  const descContent = document.querySelector(".contents .desc-content");
  const infoContent = document.querySelector(".contents .info-content");
  function removeActiveTab() {
    tabs.forEach((tab) => tab.classList.remove("active"));
  }
  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      removeActiveTab();
      tab.classList.add("active");
      let pattern = /^info-/;
      let hasInfoClass = Array.from(tab.classList).some((className) =>
        pattern.test(className)
      );
      if (hasInfoClass) {
        descContent.classList.remove("active");
        infoContent.classList.add("active");
      } else {
        descContent.classList.add("active");
        infoContent.classList.remove("active");
      }
      // console.log(hasInfoClass);
    });
  });

  // add to cart
  const addToCart = document.querySelector(".add-to-cart");
  addToCart.addEventListener("click", () => {
    const orderCount = addToCart.parentElement.querySelector("div");
    orderCount.style.display = "flex";
    addToCart.style.display = "none";
  });

  const countSection = document.getElementById(`count-${id}`);
  if (countSection.innerHTML != 0) {
    countSection.parentElement.style.display = "flex";
  }
} else {
  detailsSection.innerHTML = "کتاب مورد نظر پیدا نشد.";
}
