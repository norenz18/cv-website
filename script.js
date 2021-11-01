//  SCROLL ANIMATION
const checkpoint = 200;

window.addEventListener("scroll", () => {
const currentScroll = window.pageYOffset;
if (currentScroll <= checkpoint) {
 
  opacity = 1 - currentScroll / checkpoint;
} else {
  opacity = 0;
}
document.querySelector(".big-heading").style.opacity = opacity;
document.querySelector(".sub-heading").style.opacity = opacity;
document.querySelector(".arrow").style.opacity = opacity;
});



// NAVBAR ANIMATION
const hamburger = document.querySelector("#hamburger");
let navbar = document.querySelector("#navbar");
const links = document.querySelectorAll('.nav-link');
const closedIcon = document.querySelector(".close");
const bars = document.querySelector(".bars");
let linkens = navbar.querySelectorAll(".nav-link")

for (let i = 0; i < linkens.length; i++) {
    linkens[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "")
   
    this.className += " active"
  })
}

hamburger.addEventListener("click", toggleMenu)

function toggleMenu() {

  if (navbar.classList.contains('show')) {
    navbar.classList.toggle('show')
    closedIcon.style.display = "block"
    bars.style.display = "none"
   
   } else {
    navbar.classList.toggle('show')
    closedIcon.style.display = "none"
    bars.style.display = "block"
  
   }
}

links.forEach(link =>link.addEventListener("click", toggleMenu))



// HEADER ANIMATION
$(document).ready(function(){
$(window).scroll(function(){

let scroll = $(window).scrollTop();

if (scroll > 550) {
  $(".header").css("background" , "#022C43");
  $(".header").css("padding" , "25px 0");
}
else if (scroll > 5) {
    $(".header").css("background" , "rgba(0,0,0,.5)")
    $(".header").css("padding" , "25px 0");

}
else {
    $(".header").css("background" , "transparent");
    $(".header").css("font-size" , "16px"); 
    $(".header").css("padding" , "25px 0");

}
})
})