let currentImage = 0;
const myPhotos = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
];
const container = document.querySelector("#img-container");
const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

nextBtn.addEventListener("click", (event) => {
  event.preventDefault();
  currentImage++;
  if (currentImage > myPhotos.length - 1) {
    currentImage = 0;
  }

  const myAnimation = document.createElement("img");
  myAnimation.src = `images/${myPhotos[currentImage]}`;
  myAnimation.className = "fadening";
  container.appendChild(myAnimation);
});

prevBtn.addEventListener("click", (event) => {
  event.preventDefault();
  currentImage--;
  if (currentImage < 0) {
    currentImage = 4;
  }

  const myAnimation = document.createElement("img");
  myAnimation.src = `images/${myPhotos[currentImage]}`;
  myAnimation.className = "fadening";
  container.appendChild(myAnimation);
});
