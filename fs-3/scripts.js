const textarea = document.getElementById("inputText");
const counter = document.getElementById("charCount");

textarea.addEventListener("input", () => {
  counter.textContent = textarea.value.length;
});