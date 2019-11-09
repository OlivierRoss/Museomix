var gauche = 0;

function animer () {
  vers_gauche(0);
  changer_temps();
}

function changer_temps () {
  document.getElementById("temps").innerHTML = md5(new Date());
  setTimeout(changer_temps, 10);
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
