let modeicon = document.getElementById('modeicon');

modeicon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    modeicon.src = "./images/sun.png";
  }
  else {
    modeicon.src = "./images/moon.png";
  }
}