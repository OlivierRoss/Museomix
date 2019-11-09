function animer () {
  document.getElementById("caroussel").className = "gauche";
  changer_temps();
}

function changer_temps () {
  document.getElementById("temps").innerHTML = new Date();
  setTimeout(changer_temps, 1000);
}

window.onload = animer;
