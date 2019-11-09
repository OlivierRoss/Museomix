var gauche = 0;

function animer () {
  vers_gauche(0);
  changer_temps();
}

function changer_temps () {
  document.getElementById("temps").innerHTML = new Date();
  setTimeout(changer_temps, 1000);
}

function vers_gauche (gauche) {
  gauche -= 1;
  var caroussel = document.getElementById("caroussel");
  caroussel.style.left = gauche + "px";
  if(gauche * -1 < caroussel.offsetWidth) {
    setTimeout(() => {
      vers_gauche(gauche);
    }, 10);
  }
}

window.onload = animer;
