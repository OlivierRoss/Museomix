window.onload = function () {
  document.getElementById("caroussel").className = "gauche";
  setTimeout(function () {
    document.getElementById("caroussel").className = "";
  }, 20000);
}
