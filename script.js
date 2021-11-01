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
const hamburger = document.querySelector("#hamburger")
const navbar = document.querySelector("#navbar")
const links = document.querySelector('#navbar li')

hamburger.addEventListener("click", () => {
  navbar.classList.toggle('show')

  links.forEach(link => {
      link.classList.toggle('fade');
  })
    
})


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
$(".header").css("padding" , "50px 0");

}
})
})