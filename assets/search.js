const navInput = urlParams.get("search");
const searchWrapper = document.getElementById("search-wrapper");

if (navInput !== null) {
  let filter = allBooksArray.filter((book) => {
    let title = book.title.toLowerCase();
    return title.includes(navInput);
  });
  if (filter.length > 0) {
    filter.forEach((book) => {
      const { img, title, price, id, type } = book;
      searchWrapper.innerHTML += `
  <a href="book-details.html?id=details-${id}&type=${type}" target="_blank"> 
  <div class="book-card">
    <img src="images/books/${img}" alt="book-cover" />
    <div class="title">${title}</div>
    <div class="price">${price.toLocaleString()} تومان</div>
  </div>
</a>
  `;
    });
  } else {
    searchWrapper.innerHTML = `موردی یافت نشد.`;
  }
} else {
  searchWrapper.innerHTML = "نتیجه‌ای یافت نشد";
}
