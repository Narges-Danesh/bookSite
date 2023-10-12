const navInput = urlParams.get("search");
const searchWrapper = document.getElementById('search-wrapper')
popularBookData.forEach(book => book.type = 'popular')
newBookData.forEach(book => book.type = 'new')

if (navInput !== null) {
    let filter = allBooksArray.filter((book) => {
        let title = book.title.toLowerCase();
        return title.includes(navInput);
      });
      console.log(filter)

filter.forEach(book => {
    const {img, title, price, id, type} = book
  searchWrapper.innerHTML += `
  <a href="book-details.html?id=details-${id}&type=${type}">
  <div class="book-card">
    <img src="images/books/${img}" alt="book-cover" />
    <div class="title">${title}</div>
    <div class="price">${price.toLocaleString()} تومان</div>
  </div>
</a>
  `
})
} else {
    searchWrapper.innerHTML = "نتیجه‌ای یافت نشد";
}