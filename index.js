//https://api.adviceslip.com/advice

const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const diceBtn = document.getElementById('dice-btn');

async function getAdvice(e) {
  e.preventDefault();
  try {
    const response = await fetch('https://api.adviceslip.com/advice', {
      cache: 'no-cache',
    });
    const data = await response.json();

    adviceId.textContent = `Advice #${data.slip.id}`;
    adviceText.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    console.error('Error fetching advice:', error);
    adviceId.textContent = 'Error';
    adviceText.textContent = 'Could not fetch advice. Please try again later.';
  }
}

window.onload = getAdvice;
