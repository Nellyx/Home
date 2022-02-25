function imageSwap() {
  let image = document.getElementById("slides");
  let images = ["Group 2.png", "slide2.png"];
  setInterval(function () {
    let random = Math.floor(Math.random() * 2);
    image.src = `images/${images[random]}`;
  }, 1000);
}

imageSwap();


