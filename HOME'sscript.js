let current = 0;
const cards = document.querySelectorAll(".card");

function showCard(index) {
  cards.forEach(card => card.classList.remove("active"));
  cards[index].classList.add("active");
}

function nextSlide() {
  current = (current + 1) % cards.length;
  showCard(current);
}

function prevSlide() {
  current = (current - 1 + cards.length) % cards.length;
  showCard(current);
}
function goBack() {
    window.history.back();
}