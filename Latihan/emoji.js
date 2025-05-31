const emojis = ["😙", "😂", "🥰", "😎", "🤯", "👻", "🤞", "😉", "😝", "🐱"];

function tampilkanEmoji() {
  const acak = emojis[Math.floor(Math.random() * emojis.length)];
  document.getElementById("emoji").textContent = acak;
}
