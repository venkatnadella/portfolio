const quotes = document.querySelectorAll('.quote-tab');
const track = document.getElementById('quotes-track');
const dotsContainer = document.getElementById('quotes-dots');
const prevBtn = document.getElementById('quotes-prev');
const nextBtn = document.getElementById('quotes-next');
let current = 0;
let interval;

// Create dots
dotsContainer.innerHTML = '';
for (let i = 0; i < quotes.length; i++) {
  const dot = document.createElement('span');
  dot.className = 'quotes-dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => showQuote(i, true));
  dotsContainer.appendChild(dot);
}

function showQuote(idx, manual = false) {
  current = idx;
  track.style.transform = `translateX(-${idx * 100}%)`;
  document.querySelectorAll('.quotes-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === idx);
  });
  if (manual) {
    clearInterval(interval);
    autoScroll();
  }
}

function autoScroll() {
  interval = setInterval(() => {
    current = (current + 1) % quotes.length;
    showQuote(current);
  }, 10000);
}

if (prevBtn && nextBtn) {
  prevBtn.onclick = () => showQuote((current - 1 + quotes.length) % quotes.length, true);
  nextBtn.onclick = () => showQuote((current + 1) % quotes.length, true);
}

showQuote(0);
autoScroll();