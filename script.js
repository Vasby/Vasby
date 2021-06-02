window.onscroll = function() {stickyNavBar()};

var nav = document.getElementById("navbar");
var sticky = nav.offsetParent;

function stickyNavBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}