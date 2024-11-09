const pumpkin = document.getElementById("pumpkin");
const card = document.getElementById("birthday-card");

let x = 0; // Initial x position in grid units
let y = 0; // Initial y position in grid units
const step = 52; // Step size in pixels (matches cell size + gap)

document.addEventListener("keydown", (event) => {
  let nextX = x;
  let nextY = y;

  switch (event.key) {
    case "ArrowUp":
      nextY -= step;
      break;
    case "ArrowDown":
      nextY += step;
      break;
    case "ArrowLeft":
      nextX -= step;
      break;
    case "ArrowRight":
      nextX += step;
      break;
  }

  // Check for collision with walls
  if (!isCollidingWithWall(nextX, nextY)) {
    x = nextX;
    y = nextY;
    pumpkin.style.left = `${x}px`;
    pumpkin.style.top = `${y}px`;
  }

  // Check for collision with the card
  checkCollisionWithCard();
});



function checkCollisionWithCard() {
  const pumpkinRect = pumpkin.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();

  const isCollidingWithCard = !(
    pumpkinRect.right < cardRect.left ||
    pumpkinRect.left > cardRect.right ||
    pumpkinRect.bottom < cardRect.top ||
    pumpkinRect.top > cardRect.bottom
  );

  if (isCollidingWithCard) {
    card.classList.add("open");
  }
}

function checkCollision() {
  const pumpkinRect = pumpkin.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();

  const isColliding = !(
    pumpkinRect.right < cardRect.left ||
    pumpkinRect.left > cardRect.right ||
    pumpkinRect.bottom < cardRect.top ||
    pumpkinRect.top > cardRect.bottom
  );

  if (isColliding) {
    card.classList.add("open");
    document.getElementById("left-image").style.display = "block";
    document.getElementById("right-image").style.display = "block";
  }
}