const popularBooks = document.querySelector(".books .popular-book-wrapper");
const newBooks = document.querySelector(".books .new-book-wrapper");
const booksSlider = document.querySelectorAll(".books");

const darkMode = document.querySelector(".dark-light-mode");

const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginEmailError = loginForm.querySelector("small.email");
const loginPasswordError = loginForm.querySelector("small.password");
const loginIcon = document.querySelector(".user-login-icon");
const cartIcon = document.getElementById("cart-amount");

const overlay = document.querySelector(".overlay");
let basket = JSON.parse(localStorage.getItem("data")) || [];

// Burger Menu
const menuIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-close");
const menuList = document.querySelector(".burger-menu-list");

menuIcon.addEventListener("click", () => {
  menuList.style.transform = "translateX(0)";
  overlay.style.display = "block";
});
closeIcon.addEventListener("click", closeIconFunc);

function closeIconFunc() {
  menuList.style.transform = "translateX(100%)";
  overlay.style.display = "none";
}

// Show Login Section
let openLoginForm = false;

loginIcon.addEventListener("click", () => {
  if (openLoginForm) {
    closeLoginForm();
  } else {
    loginForm.style.height = "auto";
    overlay.style.display = "block";
    openLoginForm = true;
  }
});

overlay.addEventListener("click", closeLoginForm);
overlay.addEventListener("click", closeIconFunc);

function closeLoginForm() {
  loginForm.style.height = "0";
  overlay.style.display = "none";
  openLoginForm = false;
}

// Validate Login Email and Password
loginForm.addEventListener("submit", checkLoginForm);

function checkLoginForm(e) {
  e.preventDefault();

  let emailValue = loginEmail.value.trim();
  let passwordValue = loginPassword.value.trim();

  let redBorderStyle = "2px solid rgb(255, 51, 51)";
  let greenBorderStyle = "2px solid rgb(51, 255, 61)";

  if (emailValue === "") {
    loginEmailError.innerHTML = "لطفاً ایمیل خود را وارد کنید";
    loginEmailError.classList = "error";
    loginEmail.style.border = redBorderStyle;
  } else if (!validateEmail(emailValue)) {
    loginEmailError.innerHTML = "ایمیل وارد شده معتبر نیست";
    loginEmailError.classList = "error";
    loginEmail.style.border = redBorderStyle;
  } else {
    loginEmailError.innerHTML = "";
    loginEmail.style.border = greenBorderStyle;
  }

  if (passwordValue === "") {
    loginPasswordError.innerHTML = "لطفاً رمز عبور خود را وارد کنید";
    loginPasswordError.classList = "error";
    loginPassword.style.border = redBorderStyle;
  } else if (passwordValue.length < 6) {
    loginPasswordError.innerHTML = "رمز عبور باید بیش از 6 حرف باشد";
    loginPasswordError.classList = "error";
    loginPassword.style.border = redBorderStyle;
  } else {
    loginPasswordError.innerHTML = "";
    loginPassword.style.border = greenBorderStyle;
  }
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(email);
}

// ============== Dark and Light Mode ==================
// add the dark mode
let darkModeOn = true;
document.body.classList.add("dark-mode-variables");

darkMode.addEventListener("click", () => {
  let condition = document.body.classList.contains("dark-mode-variables");
  condition ? (darkModeOn = false) : (darkModeOn = true);
  document.body.classList.toggle("dark-mode-variables");
  localStorage.setItem("darkMode", darkModeOn);
});

// Get from local storage
let userSelectedMode = JSON.parse(localStorage.getItem("darkMode"));

if (userSelectedMode) {
  document.body.classList.add("dark-mode-variables");
} else {
  document.body.classList.remove("dark-mode-variables");
}

//====================  Book Slider ==============
const popularBookData = [
  {
    title: "تحصیلات مرگبار",
    img: "تحصیلات مرگبار.jpg",
    author: "نائومی نوویک",
    translator: "یاسمن میرزاپور ",
    publisher: "آذرباد",
    price: 200000,
    desc: `
    درس اول در اسکلومنس: یادگیری هرگز تا این حد مرگبار نبوده.
اسکلومنس؛ مدرسه­ای برای آنان که استعداد جادو دارند؛ جایی که مردودی، به معنای مرگی قطعی است… تا آنکه دختری به نام “اِل” شروع به پرده­برداری از اسرار می­کند…
در این مدرسه خبری از معلم، تعطیلات یا دوستی نیست؛ فقط روابط استراتژیک وجود دارد. زنده ماندن مهم­تر از هر نمره­ای است چراکه مدرسه به دانش­آموزان اجازه­ی خروج نمی­دهد، مگر آنکه فارغ­التحصیل شوند… یا بمیرند! قوانین به‌طور فریبنده­ای ساده هستند: در راهروها به‌تنهایی قدم نزنید؛ و مراقب هیولاهایی که همه‌جا پرسه می‌زنند، باشید.
اِل به طرز ویژه­ای برای خطرات مدرسه آماده است. امکان دارد متحدی نداشته باشد؛ اما نیرویی سیاه و چنان قدرتمند دارد که می­تواند کوه­ها را با خاک یکسان کرده و میلیون­ها نفر را قتل‌عام کند. شکست دادن هیولاهایی که در مدرسه می­پلکند برایش بسیار ساده است؛ ولی مشکلی وجود دارد. قدرتش جادوی سیاهی است که ممکن است جان تمام دانش­آموزان دیگر را بگیرد.
    `,
    pages: 304,
    publicationYear: 1400,
    lang: "فارسی",
    stars: "⭐⭐⭐⭐⭐",
    id: 8780,
  },
  {
    title: "شش درنای سرخ",
    img: "شش درنای سرخ.jpg",
    author: "الیزابت لیم",
    translator: "اطلسی خرامانی",
    publisher: "آذرباد",
    price: 340000,
    desc: `
    شیوری، شاهدخت کیاتا، رازی پنهان دارد. جادویی در رگ‌هایش جریان گرفته که تا‌به‌حال آن را به‌خوبی پنهان می‌کرده‌ است؛ اما صبح روز نامزدی‌اش، کنترل خود را از دست می‌دهد. اول به نظر می‌رسد که اشتباهش موجب خوش‌شانسی‌ و مانع از ازدواجی شده ‌است که او هرگز نمی‌خواست اتفاق بیفتد؛ اما همین باعث جلب‌توجه نامادری‌اش، رایکاما می‌شود.

رایکاما هم جادوی سیاهی مختص به خود دارد، شاهدخت جوان را از قصر طرد می‌کند، برادرانش را به درنا تبدیل کرده و به شیوری هشدار می‌دهد که نباید در این مورد به کسی چیزی بگوید. چرا که با هر کلمه که از دهانش خارج شود، یکی از برادرانش خواهد مُرد.

شیوری، بی‌پول، ناتوان در حرف زدن و تنها، به دنبال برادرانش می‌گردد و در این بین پرده از توطئه‌ای برای به چنگ آوردن تاج‌وتخت برمی‌دارد. توطئه‌ای که حتی از خیانت رایکاما هم عجیب‌تر، حیله‌گرانه‌تر، فریب‌دهنده‌تر و پیچیده‌تر است. فقط شیوری‌ است که می‌تواند اوضاع پادشاهی را مرتب کند؛ اما برای این کار باید درست به همان پسری اعتماد کند که تمام تلاشش را کرد تا از ازدواج با او سر باز بزند… و باید جادویی را که تمام عمر سرکوب کردنش را آموخته‌بود، در آغوش بگیرد… حالا بهایش هرچه که می‌خواست باشد.
    `,
    pages: 431,
    publicationYear: 1402,
    lang: "فارسی",
    stars: "⭐⭐⭐⭐⭐",
    id: 8781,
  },
  {
    title: "فیبل",
    img: "فیبل.jpg",
    author: "آدرین یانگ",
    translator: "اطلسی خرامانی",
    publisher: "آذرباد",
    price: 200000,
    desc: `
    فیبل داستان استقامت دختری‌ست که وقتی همه به او پشت کردند روی پاهای خود ایستاد. دختری که وقتی برای مقابله با سختی‌ها شانه‌ای نداشت تا بر آن تکیه بزند، به جای سر خم کردن در برابر ظلم و سختی چانه‌اش را بالاتر و قامتش را صاف‌تر گرفت.

این کتاب داستان و روایت استقامت تمام دخترانی‌ست که همه کمر بسته‌اند تا نابودشان کنند. داستان شجاعت، صادقت، زیرکی و بردباری. ‌این کتاب به ما می‌آموزد که چرا نباید حتی در تاریک‌ترین لحظات هم دست از تلاش برای نجات خود بکشیم و چرا نباید تسلیم سختی‌های پیش رو بشویم.

این مجموعه‌ی دو جلدی روایت امید است. امید و باور به فردایی روشن. کتابی در مورد یافتن دوست، دل بستن و وفادار ماندن. از خودگذشتگی و ایثار و اعتماد به یکدیگر.

کتابی که به گفته‌ی نیویورک‌تایمز بهترین اثر خلق شده به دست نویسنده‌ی جوان خود، یعنی ادرین یانگ است و از آن به عنوان داستانی نفس‌گیر، با توصیفاتی قابل لمس و فراموش نشدنی یاد شده‌.
    `,
    pages: 312,
    publicationYear: 1402,
    lang: "فارسی",
    stars: "⭐⭐⭐⭐⭐",
    id: 8782,
  },
  {
    title: "خانه‌ای در دریای نیلگون",
    img: "خانه‌ای در دریای نیلگون.jpg",
    author: "بتی.جی کلون",
    translator: "شقایق خانجانی",
    publisher: "آذرباد",
    price: 220000,
    desc: `
    لاینس بیکر یک مددکار مقید به قانون است. در چهل سالگی به همراه گربه‌ی بداخلاقش در خانه‌ای کوچک زندگی می‌کند و تنها تفریحش گوش دادن به صفحات گرامافون است؛ اما زندگی ساکت و بدون هیجان او قرار است تغییر کند.

اداره‌ی محافظت از موجودات جادویی به او مأموریتی مخفی می‌دهد تا به پرورشگاهی در یک جزیره‌ی دورافتاده رفته و وضعیت پرورشگاه و بچه‌ها را بررسی کند.

بچه‌هایی که ظاهراً آن‌قدر خطرناک هستند که می‌توانند باعث پایان دنیا شوند.

لاینس یک ماه وقت دارد تا تعیین کند آیا بچه‌ها و مدیر پرورشگاه تهدیدی برای جامعه محسوب می‌شوند یا نه.

با ورود لاینس به جزیره و آشنا شدن با هرکدام از بچه‌ها و مدیر پرورشگاه، لاینس خانواده‌ای را درمی‌یابد که برای هم هر کاری می‌کنند.

و مدیر مدرسه، آرتور، برای در امان نگه داشتن بچه‌ها از جان و دل مایه می‌گذارد، حتی اگر به قیمت سوزاندن دنیا باشد، یا بدتر از آن، به قیمت روشن شدن رازی باشد که سال‌ها مخفی کرده است.
    `,
    pages: 400,
    publicationYear: 1402,
    lang: "فارسی",
    stars: "⭐⭐⭐⭐⭐",
    id: 8783,
  },
  {
    title: "غبرستان حیوانات خانگی",
    img: "غبرستان حیوانات خانگی.jpg",
    author: " استیون کینگ",
    translator: " امیرحسین قاضی",
    publisher: "آذرباد",
    price: 260000,
    desc: `
    هنگامی‌که لوئیس کرید به همراه خانواده­اش به خانه­ی جدیدشان در حومه­ی روستایی ایالت مِین نقل مکان می‌کند، همه چیز روبه­راه به نظر می­رسد: شغل جدیدی که در انتظارش است، همسری زیبا که از دختر و پسر تحسین­برانگیز و شیرین­اش نگه‌داری می­کند و البته گربه­ی دخترش که وابستگی زیادی میان او و دخترش، اِلی، وجود دارد. به‌عنوان یک خانواده­ی کوچک و صمیمی، آن­ها همه‌چیز دارند. تا اینکه زندگی روی دیگرش را نمایان می­کند و اتفاقی شوم گریبانگیر خا­نواده می­شود.

جنگلی که در نزدیکی خانه­ قرار دارد، رازی خون­بار و هولناک را در خود پنهان کرده است. رازی به­مراتب ترسناک‌تر و قدرتمندتر از مرگ. به­زودی لوئیس و خانواده­اش متوجه خواهند شد که گاهی بهتر است مُرده، همان مُرده بماند.

بار دیگر استاد ژانر وحشت، استیون کینگ با شاهکاری سراسر دلهره و اضطراب آمده تا تجربه­ای متفاوت را برای مخاطبان خود به ارمغان بیاورد. کتاب غبرستان حیوانات خانگی بدون شک یکی از برترین و ترسناک­ترین رمان‌های این نویسنده است که می­تواند با کتاب “درخشش” او رقابت کند.
    `,
    pages: 536,
    publicationYear: 1401,
    lang: "فارسی",
    stars: "⭐⭐⭐⭐⭐",
    id: 8784,
  },
  {
    title: "جنگجویان",
    img: "جنگجویان.jpg",
    author: "ارین هانتر",
    translator: "آرش پیوندی",
    publisher: "باژ",
    price: 220000,
    desc: `
    قبیله سایه ای رهبری جدید و اهریمنی دارد، اما آیا قدرت كنونی اورا راضی می كند، یا میخواهد آتش انتقام خود را شعله‌ورتر سازد؟
قلب آتشین می‌ترسد به قدرت رسیدن ببراختر با خواب‌های هولناكی ارتباط داشته باشد كه مدام سراغش می‌آیند و زمزمه مرگ و خطر در گوشش می‌خوانند.
در همین حال، تهدید شرارت‌آمیز، مرموز و بی سابقه بر جنگل چیره شده و جان همه‌ی گربه‌ها را به خطر انداخته است. رهبر عزیزی قلب‌آتشین به نیاكان جنگجویان خود پشت كرده و درستی حرف او برای قلب‌آتشین نیز مشخص نیست.
آیا قبیلهِ ستاره برای همیشه رهایشان كرده است؟
    `,
    pages: 274,
    publicationYear: 1401,
    lang: "فارسی",
    stars: "⭐⭐⭐⭐⭐",
    id: 8785,
  },
  {
    title: "سریر شیشه‌ای",
    img: "سریر شیشه‌ای.jpg",
    author: "سارا جی ماس",
    translator: "افشین اردشیری",
    publisher: "باژ",
    price: 274000,
    desc: `
    ایروان ده‏‌ها سال برای این ماجرا نقشه کشیده و برنامه‌‏ریزی کرده ‏بود. شاید هم قرن‏‌ها، حتی زمانی که در خواب بود تمام این نقشه‌‏ها را در ذهن طراحی کرده ‏بود و تنها چیزی که ایلین داشت، دستورات مبهم و گنگ از طرف خانواده‏‌ای سلطنتی و مرده برای متوقف کردن ایروان بود و تنها چند ماه کار فرصت داشت تا نیرویی برای ایستادگی در برابر او فراهم کند.
ایلین تردید داشت هم‌زمان شدن لشگرکشی مایو و ناوگانش به‌‏سمت ایلوی با دستور برانن برای رفتن او به‌‏سمت باتلاق سنگ در جنوب غربی شبه‌‏جزیره‌‏ی ایلوی تصادفی باشد، یا حرکت نیروهای لعنتی موراث به‌‏سمت خلیج اورو دقیقاً در سمت دیگر شبه‌‏جزیره!
وقت کافی وجود نداشت. برای انجام کار و سر و سامان دادن به مسائل مختلف وقت کافی نداشت... فقط می‌‏توانست قدم‌‏های کوچکی بردارد...
    `,
    pages: 365,
    publicationYear: 1399,
    lang: "فارسی",
    stars: "⭐⭐⭐⭐⭐",
    id: 8786,
  },
  {
    title: "شکار شاهزاده دراکولا",
    img: "شکار شاهزاده دراکولا.jpg",
    author: "کری منیسکلکو ، کژوان آبهشت",
    translator: "رضا قلندری ، فاطمه آزادافراشته",
    publisher: "باژ",
    price: 420000,
    desc: `
    آدری‌رُز وادزورث به‌همراه تامس کرسول راهی رومانی شده‌اند. مقصد آن‌ها قلعه‌ای است که سابقاً به ولاد دراکولا حاکم خون‌خوار آن خطّه تعلق داشته، اما حالا به یکی از معتبرترین آکادمی‌های علوم و پزشکی قانونی در تمام اروپا بدل شده، اما این قلعه‌ی بزرگ و کوهستانی اسراری در سینه‌ی سنگیِ خود نهفته دارد. اسراری خون‌آلود و مرموز که گویا بعد از گذشت صدها سال، هنوز عده‌ای را به کام مرگ می‌کشد و پیکرهایی بی‌جان بر جای می‌گذارد. جنازه‌هایی در وضعیت نامناسب و مشکوک. اما تنها مانع آدری‌رُز و تامس بر سر راه کشف حقیقت، این وضعیت عجیب و نامعمول نیست. تلاش این دو نفر برای دورزدن مشکلات و حل بحران‌ها، کم‌کم جان‌شان را به‌خطر می‌اندازد و آن‌ها را در معرض تهدید قاتلی قرار می‌دهد که انگار هیچ ابایی از کُشت‌وکشتار ندارد. سفّاکِ خون‌ریزی که روستاییان می‌گویند از گور برخاسته...
    `,
    pages: 524,
    publicationYear: 1399,
    lang: "فارسی",
    stars: "⭐⭐⭐⭐⭐",
    id: 8787,
  },
  {
    title: "انجمن نگهبانان",
    img: "انجمن نگهبانان.jpg",
    author: "چارلی فلچر",
    translator: "سمانه افشار حاتم",
    publisher: "باژ",
    price: 257000,
    desc: `
    پایان کار همیشه زودتر از آن که انتظارش را داری، سر می رسد.
زمانی انجمن نگهبانان صدها عضو داشت، افراد دلیری که از مرز بین این جهان خاکی و جهان جادو محافظت می کنند. حالا فقط پنج نفرند. وقتی یک ولگرد دختر جیغ جیغویی را به قرارگاه مرکزی نگهبانان لندن می آورد، تعدادشان هنوز رو به کاهش است، این دختر شاید پاسخ امیدهای شان به پیدا شدن عضوی تازه باشد یا شاید وسیله ای برای فروپاشی شان... چارلی فلچر در اولین رمان جوانش داستانی در مورد شکارچی های ساحره، ماوراءالطبیعه، آینه روها و جادوگرها می گوید. با انجمن نگهبان ها و اعضایش ملاقات کنید و به یاد داشته باشید وقتی آن ها سقوط کنند، همه ی ما نیز سقوط خواهیم کرد.
    `,
    pages: 300,
    publicationYear: 1397,
    lang: "فارسی",
    stars: "⭐⭐⭐⭐⭐",
    id: 8788,
  },
];
const newBookData = [
  {
    title: "نیلوفر و مرداب",
    img: "نیلوفر و مرداب.jpg",
    author: "تیچ نات هان",
    translator: "علی امیرآبادی",
    publisher: "بیدگل",
    price: 92000,
    desc: `
    در کتاب نیلوفر و مرداب، تیچ نات هان، در متن آن حکمتی که «رنج و گنج» یا «گِل‌و‌گُل»، را لازم و ملزوم یکدیگر می‌داند، راه‌هایی را برای دمساز شدن با رنج بدون مقهورشدن به‌وسیلۀ آن معرفی می‌کند.
تیچ نات هان در این کتاب، با شفافیت و احساس طربی که اکنون دیگر مهر و امضای اوست، در مقام آموزگاری که هنر شادکامی را آموزش می‌دهد، به ما کمک می‌کند تا شگفتی‌هایی را که هم در درون و هم در اطراف ماست بازشناسیم و از آن‌ها اثر پذیریم، همان شگفتی‌هایی را که در گذر ایام آنها را بدیهی انگاشته و نسبت به آنها بی‌توجه شده‌ایم. در همین مسیر، او با ما از درنگ‌کردن، تنفسِ ذهن‌آگاهانه و تمرکز عمیق سخن می‌گوید و از این می‌گوید که چگونه این اعمال می‌توانند نیروی ذهن‌آگاهی را در بطن زندگی هرروزی خلق یا بیدار کنند.
به مدد ذهن‌آگاهی و نیروی حاصل از آن، می‌توانیم درد و رنج را در بربگیریم و آن را آرام سازیم؛ و می‌توانیم، همچون نیلوفری که در مرداب بشکفد، بی‌درنگ حدی از آزادی و نیز ذهن و و ضمیر شفاف‌تر را برای خود به ارمغان بیاوریم.
    `,
    pages: 139,
    publicationYear: 1402,
    lang: "فارسی",
    stars: "⭐⭐⭐⭐⭐",
    id: 7878,
  },
  {
    title: "فرار از اردوگاه 14",
    img: "اردوگاه 14.jpg",
    author: "بلین هاردن",
    translator: "مسعود یوسف حصیرچین",
    publisher: "چشمه",
    price: 98000,
    desc: `
    اردوگاه های زندانیان سیاسی کره ی شمالی دو برابر گولاگ های استالین و دوازده برابر اردوگاه های نازی ها عمر دارند. هیچ کسی که در آنها به دنیا آمده، فرار نکرده است، هیچ کس جز شین دونگ هیوک. فرار از اردوگاه 14، از طریق داستان تکان دهنده ی حبس و فرار شگفت انگیز شین اسرار تمامیت خواه ترین حکومت جهان را افشا می کند. شین چیزی از وجود تمدن نمی دانست- او مادرش را رقیبی برای غذا می دید، نگهبانان او را یک خبرچین بار آوردند و شاهد اعدام مادر و برادرش بود. همه کیم جونگ ایل را می شناختند اما کشورش را نه. این کشور گرسنه، ورشکسته و مجهز به سلاح اتمی است و بین 150000 تا 200000 نفر به عنوان برده در اردوگاه های زندانیان سیاسی اش کار می کنند. این کتاب با تمرکز بر داستان این جوان شگفت انگیز که در امنیتی ترین زندان امنیتی ترین کشور دنیا رشد کرده، اسرار مخفی این کشور را افشا می کند. فرار از اردوگاه 14 خاطراتی بی نظیر است از یکی از تاریک ترین کشورهای جهان. این کتاب داستان تحمل، شجاعت، بقا و امید است.
    `,
    pages: 229,
    publicationYear: 1402,
    lang: "فارسی",
    stars: "⭐⭐⭐⭐⭐",
    id: 7879,
  },
  {
    title: "لور",
    img: "لور.jpg",
    author: "الکساندر برکن",
    translator: "زهرا چفلکی",
    publisher: "تندیس",
    price: 200000,
    desc: `
    جنگ خدایان.
پوسایدون، آتنا، آپولو، افرودیت، آرس، دیونیسوس، هفائستوس، آرتمیس، هرمس.
نه خدا به من خیانت کرده اند. هر هفت سال، یک هفته وقت دارید تا این خدایان فانی را شکار کنید و قدرتشان را به چنگ بیاورید. آگون تا زمان زنده ماندن آخرین خدا ادامه خواهد داشت.
این چیزی بود که قرن ها پیش زئوس به فانی های المپیوس نوید داد.
لور هرگز نمی خواست به آگون برگردد. گذشته ی تاریک و آینده ی پر از ترس پیش رویش فرصت زندگی را از او گرفته بود. اما سرنوشت، رهایش نمی کند.
کاستور، دوست دوران بچگی اش بعد از هفت سال برمی گردد اما حضور یک الهه، خدای خرد و جنگاوری، آتنا دختر زئوس زندگی لور را برای همیشه عوض می کند. حالا او دنبال انتقام خانواده اش است و حاضر است برای کشتن وارث خدای جنگ، اریس، هر کاری بکند.
    `,
    pages: 524,
    publicationYear: 1401,
    lang: "فارسی",
    stars: "⭐⭐⭐⭐⭐",
    id: 7880,
  },
  {
    title: "خانه‌ای کف دریاچه",
    img: "خانه ای کف دریاچه.jpg",
    author: "جاش ملرمن",
    translator: "حامد شانکی",
    publisher: "باژ",
    price: 190000,
    desc: `
    هر دو هفده سال داشتند. هر دو ترسیده بودند. اما هر دو می‌گفتند بله.
قرار عاشقانه‌ی بی‌نقصی به نظر می‌رسید: قایق‌رانی در دریاچه، با ساندویچ و آبجو در یخچال مسافرتی. اما آملیا و جیمزِ نوجوان چیزی را زیر آب کشف می‌کنند که برای همیشه زندگی‌شان را تغییر می‌دهد.
دو طبقه است.
باغچه‌ای دارد.
و در ورودی‌اش باز است.
خانه‌ای است کف یک دریاچه.
برای این نوجوانان تنها یک قانون در کار است: سؤال بی سؤال. اما چطور ممکن است چنین مکان خارق‌العاده‌ای قیمت نداشته باشد؟ درحالی‌که این دو با خانه‌ی زیر موج‌ها بازی می‌کنند، یک حقیقت سرجایش است:
وقتی خانه‌ای خالی است، معنایش این نیست که کسی خانه نیست.
    `,
    pages: 206,
    publicationYear: 1402,
    lang: "فارسی",
    stars: "⭐⭐⭐⭐⭐",
    id: 7881,
  },
  {
    title: "کابوک",
    img: "کابوک.jpg",
    author: "جاش ملرمن",
    translator: "دیاکو ابراهیمی",
    publisher: "باژ",
    price: 373000,
    desc: `
    چیزی آن بیرون است... چیزی وحشتناک که نباید دید. نیم نگاهی کافی است تا شخص با دیدن آن به خشونتی مرگبار برسد. هیچ کس هم نمی داند چیست یا از کجا آمده است. مالری، غرق در تاریکی، در محاصره ی سرو صداهایی آشنا و خوفناک، سفری ادیسه وار و دردناک را در پیش می­گیرد؛ سفری که او را به اعماق جهانی نادیده و گذشته هایش می برد، به دل خاطراتش با همراهانی که زمانی جانش را نجات دادند: گروهی از غریبه ها که با راهنمایی های مردی به نام تام، علیه آن وحشت نادیده متحد شدند و سعی کردند در دل هرج و مرج نظم ایجاد کنند اما وقتی آذوقه رو به کاهش گذاشت، خود ناچار به ترک خانه و مواجهه با این سوال شدند که در جهانی جنون زده، به راستی به چه کسی می توان اعتماد کرد؟! نخستین اثر مهیج جاش ملرمن، گذشته و حال را به هم بافته و با ارائه ی تصاویری لحظه ای، مخوف و هیجان انگیز از جهانی ناشناخته، شما را ناگزیر از خواندن بی وقفه ی کتاب از اول تا به صفحه ی آخر می کند.
    `,
    pages: 385,
    publicationYear: 1396,
    lang: "فارسی",
    stars: "⭐⭐⭐⭐⭐",
    id: 7882,
  },
  {
    title: "GAMES",
    img: "GAMES.jpg",
    author: "ana huang",
    translator: "",
    publisher: "زبان ما",
    price: 260000,
    desc: `
    
    `,
    pages: 364,
    publicationYear: 1402,
    lang: "انگلیسی",
    stars: "⭐⭐⭐⭐⭐",
    id: 7883,
  },
  {
    title: "LOVE",
    img: "LOVE.jpg",
    author: "ana huang",
    translator: "",
    publisher: "زبان ما",
    price: 210000,
    desc: `
    
    `,
    pages: 473,
    publicationYear: 1402,
    lang: "انگلیسی",
    stars: "⭐⭐⭐⭐⭐",
    id: 7884,
  },
  {
    title: "HATE",
    img: "HATE.jpg",
    author: "ana huang",
    translator: "",
    publisher: "زبان ما",
    price: 300000,
    desc: `
    
    `,
    pages: 422,
    publicationYear: 1402,
    lang: "انگلیسی",
    stars: "⭐⭐⭐⭐⭐",
    id: 7885,
  },
];
const allBooksArray = [...popularBookData, ...newBookData];
popularBookData.forEach((book) => (book.type = "popular"));
newBookData.forEach((book) => (book.type = "new"));

// Generating Book Links
function generateBooksInDOM(array, where, type) {
  array.map((book) => {
    let { img, title, stars, id, price } = book;

    where.innerHTML += `
      <div class="book" id="${id}">
      <a href="book-details.html?id=${id}&type=${type}"  draggable="false"> 
      <img src="images/books/${img}" alt="" draggable="false"/>
      </a>
        <div class="book-desc">
          <span class="book-title">${title}</span>
          <div class="price">${price.toLocaleString()}</div>
          <div class="stars">${stars}</div>
          <a href="book-details.html?id=${id}&type=${type}"  class="book-details">اطلاعات بیشتر</a>
        </div>
      </div>
    `;
  });
}
generateBooksInDOM(popularBookData, popularBooks, "popular");
generateBooksInDOM(newBookData, newBooks, "new");

addEventListener("DOMContentLoaded", () => {
  function sliderFunction(whereto) {
    const arrowButtons =
      whereto.parentElement.parentElement.querySelectorAll(".arrow");
    const firstCardWidth = whereto.querySelector(".book").offsetWidth;

    // slider buttons
    arrowButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        let leftArrow = button.classList.contains("fa-chevron-left");
        let thisSlider =
          e.target.parentElement.parentElement.querySelector(
            '[class*="wrapper"]'
          );
        thisSlider.scrollLeft += leftArrow ? -firstCardWidth : firstCardWidth;
      });
    });

    // dragging the slider
    let isDragging = false,
      startX,
      startScrollLeft,
      timeoutID;

    const dragStart = (e) => {
      setTimeout(() => {
        isDragging = true;
        startX = e.pageX;
        startScrollLeft = whereto.scrollLeft;
        whereto.classList.add("dragging");
      }, 100);
    };
    const dragging = (e) => {
      if (!isDragging) return;
      whereto.scrollLeft = startScrollLeft - (e.pageX - startX);
    };
    const dragStop = () => {
      setTimeout(() => {
        isDragging = false;
        whereto.classList.remove("dragging");
      }, 100);
    };
    let thisTag = document.querySelectorAll(".book a");
    thisTag.forEach((tag) => {
      tag.addEventListener("click", (e) => {
        if (isDragging) {
          e.preventDefault();
        }
      });
    });
    // infinite scroll
    const sliderChildren = [...whereto.children];
    let cardPerView = Math.round(whereto.offsetWidth / firstCardWidth);
    sliderChildren
      .slice(-cardPerView)
      .reverse()
      .forEach((card) => {
        whereto.insertAdjacentHTML("afterbegin", card.outerHTML);
      });

    sliderChildren.slice(0, cardPerView).forEach((card) => {
      whereto.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    const infiniteScroll = () => {
      if (whereto.scrollLeft === 1) {
        whereto.classList.add("no-transition");
        whereto.scrollLeft = -(whereto.scrollWidth - 2 * whereto.offsetWidth);
        whereto.classList.remove("no-transition");
      } else if (
        Math.abs(whereto.scrollLeft) + 1 >=
        whereto.scrollWidth - whereto.offsetWidth
      ) {
        whereto.classList.add("no-transition");
        whereto.scrollLeft = whereto.offsetWidth;
        whereto.classList.remove("no-transition");
      }
    };
    // autoplay
    const autoplay = () => {
      if (window.innerWidth < 800) return;
      timeoutID = setInterval(() => {
        whereto.scrollLeft -= firstCardWidth;
      }, 2000);
    };
    autoplay();
    // event listeners
    whereto.addEventListener("mousedown", dragStart);
    document.addEventListener("mouseup", dragStop);
    whereto.addEventListener("mousemove", dragging);
    whereto.addEventListener("scroll", infiniteScroll);
    whereto.parentElement.addEventListener("mouseover", () =>
      clearInterval(timeoutID)
    );
    whereto.addEventListener("mouseleave", autoplay);
  }
  sliderFunction(popularBooks);
  sliderFunction(newBooks);
  // Book Hover Effect
  function bookHoverEffect() {
    const allBooks = document.querySelectorAll(".book");
    allBooks.forEach((book) => {
      book.addEventListener("mouseenter", (e) => {
        e.target.classList.add("selected");
      });
      book.addEventListener("mouseleave", (e) => {
        e.target.classList.remove("selected");
      });
    });
  }
  bookHoverEffect();
});
const urlParams = new URLSearchParams(window.location.search);

function cartBlueCircle() {
  // hide or show the blue circle on the cart icon
  if (cartIcon.innerHTML == 0) {
    cartIcon.style.display = "none";
  } else {
    cartIcon.style.display = "flex";
  }
}
addEventListener("DOMContentLoaded", cartBlueCircle);

let increment = (id) => {
  let search = basket.find((x) => x.id === id);
  if (search === undefined) {
    basket.push({
      id: id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  cartIcon.style.display = "flex";

  update(id);
  localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
  let search = basket.find((x) => x.id === id);
  if (search === undefined) return;
  else if (!detailsPage) {
    if (search.item === 1) return;
    else {
      search.item -= 1;
      cartBlueCircle();
    }
  } else {
    search.item -= 1;
    cartBlueCircle();
  }

  update(id);
  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  let span = document.getElementById(`count-${id}`);
  let cart = document.getElementById(`cart-${id}`);
  span.innerHTML = search.item;

  // this code will only work on the details page
  if (detailsPage) {
    if (span.innerHTML == 0) {
      span.parentElement.style.display = "none";
      cart.style.display = "flex";
    } else {
      span.parentElement.style.display = "flex";
      cart.style.display = "none";
    }
  }

  if (!detailsPage) {
    emptyNoteFunction();
    let thisBook = allBooksArray.find((book) => book.id == id);
    let totalPrice = document.querySelector(`#b${id} .cart-book-total-price`);
    totalPrice.innerHTML = (thisBook.price * search.item).toLocaleString();
    totalPriceShow();
  }

  calculation(id);
};
function totalPriceShow() {
  let sum = 0;
  basket.forEach((item) => {
    const book = allBooksArray.find((book) => book.id === item.id);
    if (book) {
      item.price = book.price;
    }
    sum += item.item * item.price;
  });

  let deliveryPriceContainer = document.querySelector(".delivery-price");
  let deliveryPrice = 35000;
  let itemsPriceContainer = document.querySelector(".items-price");
  let totalPriceContainer = document.querySelector(".total-price");
  itemsPriceContainer.children[1].innerHTML = `${sum.toLocaleString()} تومان`;
  totalPriceContainer.children[1].innerHTML = `${(
    sum + parseFloat(deliveryPrice)
  ).toLocaleString()} تومان`;

  deliveryPriceContainer.children[1].innerHTML = `${deliveryPrice.toLocaleString()} تومان`;
  let total = 0;
  basket.forEach((x) => {
    total += x.item;
  });

  let quantityContainer = document.querySelector(".checkout-quantity");
  quantityContainer.children[1].innerHTML = `${total} عدد`;
}
let calculation = (id) => {
  let total = 0;
  basket.forEach((x) => {
    total += x.item;
  });
  cartIcon.innerHTML = total;
};
calculation();

// search
const searchSection = document.querySelector(".search-section");
const searchInput = document.getElementById("search-field");
const searchIcon = document.querySelector(".search-icon");
searchIcon.addEventListener("click", (e) => submitSearch(e));
searchSection.addEventListener("submit", (e) => submitSearch(e));
function submitSearch(e) {
  e.preventDefault();
  let value = searchInput.value.toLowerCase();
  window.location.href = `search.html?search=${value}`;
  searchInput.value = "";
}
