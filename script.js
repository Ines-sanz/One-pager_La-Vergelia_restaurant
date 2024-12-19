const homeCarousel = document.querySelector("#myCarousel");
const traducir = document.querySelector("#traducir");
const menu = document.querySelector("#menu");
const menuingles = document.querySelector("#menuIngles");
const icon = document.querySelector(".my-icons");
const naranja = document.querySelector(".naranja")
const frutas = document.querySelector(".frutas")


const carousel = new bootstrap.Carousel(homeCarousel, {
  interval: 2000,
  touch: false,
});

const changemenu = () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    menuingles.classList.add("active");
  } else {
    menuingles.classList.remove("active");
    menu.classList.add("active");
  }
  console.log("changemenu")
};

traducir.addEventListener('click', changemenu);

window.addEventListener("scroll", function () {
  const position = icon.getBoundingClientRect();
  if (position.top < window.innerHeight && position.bottom > 0) {
      icon.classList.add("show");
  }
});

window.addEventListener("scroll", function () {
  const position = naranja.getBoundingClientRect();
  if (position.top < window.innerHeight && position.bottom > 0) {
      naranja.classList.add("show");
  }
});
window.addEventListener("scroll", function () {
  const position = frutas.getBoundingClientRect();
  if (position.top < window.innerHeight && position.bottom > 0) {
      frutas.classList.add("show");
  }
});