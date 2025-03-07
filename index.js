let bulbImage = document.getElementById("bulbImage");
let catImage = document.getElementById("catImage");
let switchStatus = document.getElementById("switchStatus");
let offSwitch = document.getElementById("offSwitch");
let onSwitch = document.getElementById("onSwitch");

function switchOff() {
  bulbImage.src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
  catImage.src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
  switchStatus.textContent = "Switched Off";
  offSwitch.style.backgroundColor = "#e12d39";
  onSwitch.style.backgroundColor = "#cbd2d9";
}

function switchOn() {
  bulbImage.src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
  catImage.src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
  switchStatus.textContent = "Switched On";
  onSwitch.style.backgroundColor = "#22c55e";
  offSwitch.style.backgroundColor = "#cbd2d9";
}
