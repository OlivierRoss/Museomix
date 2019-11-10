var gauche = 0;

function animer () {
  vers_gauche(0);
}

function vers_gauche (gauche) {
  gauche -= 2;
  var caroussel = document.getElementById("caroussel");
  caroussel.style.left = gauche + "px";
  if(gauche * -1 < caroussel.offsetWidth - screen.width) {
    setTimeout(() => { vers_gauche(gauche); }, 20);
  }
}

window.onload = animer;


