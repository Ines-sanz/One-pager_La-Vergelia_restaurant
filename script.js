const homeCarousel = document.querySelector("#myCarousel");
const traducir = document.querySelector("#traducir");
const menu = document.querySelector("#menu");
const menuingles = document.querySelector("#menuIngles");

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