document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

const images = ["assets/image/farm-house.jpg", "assets/image/bosscha.jpg"];
let currentIndex = 0;

function showImage(index) {
  document.querySelector(".carousel-image").src = images[index];
}

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});
