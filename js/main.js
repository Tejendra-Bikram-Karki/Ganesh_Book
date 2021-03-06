// //Navigation Menu
// function myFunction() {

//   var x = document.getElementsByClassName("nav-item");
//   if(x.style.display="block"){
//     x.style.display="none";
//   } 
//   else
//   {
//     x.style.display="none";
//   }

//   // var x = document.getElementById("navbar");
//   // if (x.className === "nav-links") {
//   //   x.className += " responsive";
//   // }
//   // else {
//   //   x.className = "nav-links";
//   // }
// }




const gap = 100;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));