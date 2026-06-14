const contentArea = document.getElementById("contentArea");
const textCount = document.getElementById("textCount");
const maxInputLimit = document.getElementById("maxChars");
const maxCharsDisplay = document.getElementById("maxCharsDisplay");

let maxLimit = 100; // Default max limit
maxInputLimit.addEventListener("input", () => {
  maxLimit = parseInt(maxInputLimit.value) || 100;
  maxCharsDisplay.textContent = maxLimit;
});

contentArea.addEventListener("input", () => {
  const content = contentArea.value.slice(0, maxLimit); // Limit the content to maxLimit characters
  contentArea.value = content;
  textCount.textContent = content.length;
});

const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", () => {
  contentArea.value = "";
  maxInputLimit.value = "";
  maxCharsDisplay.textContent = 100;
  textCount.textContent = 0;
});