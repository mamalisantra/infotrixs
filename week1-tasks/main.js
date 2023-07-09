const textElement = document.getElementById('typing-text');
const text = 'I like to develop websites more than cooking!!';
let index = 0;

function typeText() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 100); // Adjust the typing speed here (in milliseconds)
  }
}

typeText();
