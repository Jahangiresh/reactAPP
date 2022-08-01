const header = document.querySelector(".header");
const body = document.querySelector(".brightness");
const footer = document.querySelector(".footer");

//3d mona lisa card
let card = document.querySelector(".my-card");

document.addEventListener("mousemove", function (e) {
  let xAxis = (window.innerWidth / 10 - e.pageX) / 70;
  let yAxis = (window.innerHeight / 100 - e.pageY) / 100;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//mona lisa CARD

document.addEventListener("scroll", function () {
  if (scrollY > 10) {
    header.classList.remove("header__scroll");
  } else {
    header.classList.add("header__scroll");
  }
  aboutActiveNavHandler();
  if (scrollY > 400 && scrollY < 2300) {
    body.style.background = "#131313";
  } else {
    body.style.background = "transparent";
  }
});

const about = document.querySelector("#about");
const contact = document.querySelector("#contact");

contact.addEventListener("click", function () {
  window.scrollTo(0, document.body.scrollHeight);
});

about.addEventListener("click", function () {
  window.scroll({ top: 0 });
});

function aboutActiveNavHandler() {
  if (window.scrollY > 0 && window.scrollY < 1900) {
    about.style.color = "#333333";
  } else {
    about.style.color = "white";
  }
}

let spans = document.querySelectorAll(".span");
for (let i = 0; i < spans.length; i++) {
  spans[i].addEventListener("mouseover", function () {
    this.style.visibility = "hidden";
    this.style.opacity = "0";
  });
}

// if (window.scrollTo(0, document.body.scrollHeight)) {
//   console.log("assssssssssssss");
// }

// function scrollFooterHandler(){
//   if()
// }

var lastScrollTop = 0;

const headerContent = document.querySelector(".header__container__row");
document.addEventListener(
  "scroll",
  function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      header.style.height = "60px";
      headerContent.style.visibility = "visible";
      headerContent.style.opacity = "1";
    } else {
      header.style.height = "0";
      headerContent.style.visibility = "hidden";
      headerContent.style.opacity = "0";
    }
    lastScrollTop = st <= 0 ? 0 : st;
  },
  false
);

const justYes = document.querySelector(".yes__col");
const afterYes = document.querySelector(".footer__container__contact__row");
const beforeYes = document.querySelector(".footer__container__row");
const yesAndNoParent = document.querySelector(".footer__container");
const footerafter = document.querySelector(".footer__after");
justYes.addEventListener("click", function () {
  beforeYes.style.display = "none";
  afterYes.style.display = "flex";
  footerafter.style.display = "flex";
});
