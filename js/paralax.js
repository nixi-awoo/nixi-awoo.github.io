var header = document.getElementById("header");
var footer = document.getElementById("footer");
var speed = 0.5;

window.onscroll = function() {
  var yOffset = window.pageYOffset;
  header.style.backgroundPosition = "0px "+ (yOffset * speed) + "px";
  footer.style.backgroundPosition = "0px "+ (yOffset * speed) + "px";
}