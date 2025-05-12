const quotes = [
  "Believe you can and you're halfway there.",
  "Push yourself, because no one else is going to do it for you.",
  "Success is what comes after you stop making excuses.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Dream it. Wish it. Do it.",
];

let quoteEl = document.getElementById("quote");
let quoteBox = document.getElementById("quote-box");

function nextQuote() {
  // Fade out
  quoteBox.classList.remove("fade");
  quoteBox.classList.add("fade-out");

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteEl.textContent = quotes[randomIndex];
    // Fade in
    quoteBox.classList.remove("fade-out");
    quoteBox.classList.add("fade");
  }, 500);
}

// Show one on page load
window.onload = nextQuote;
