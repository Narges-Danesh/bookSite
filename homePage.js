const heroEmail = document.getElementById("hero-email");
const heroEmailError = document.querySelector(".signup-field small");
const callToAction = document.querySelector('.call-to-action')

// Validate Hero Email

callToAction.addEventListener("click", checkHeroEmail);

function checkHeroEmail() {
  let heroEmailValue = heroEmail.value.trim();

  if (heroEmailValue === "") {
    heroEmailError.innerHTML = "لطفاً ایمیل خود را وارد کنید";
    heroEmailError.className = "error";
  } else if (!validateEmail(heroEmailValue)) {
    heroEmailError.innerHTML = "ایمیل وارد شده معتبر نیست";
    heroEmailError.className = "error";
  } else {
    heroEmailError.innerHTML = "ایمیل شما ثبت شد!";
    heroEmailError.className = "success";
  }
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(email);
}
