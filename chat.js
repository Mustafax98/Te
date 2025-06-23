function sendMessage() {
  const user = document.getElementById("user").value;
  const msg = document.getElementById("message").value.trim();
  const box = document.getElementById("chat-box");

  if (!msg) return;

  const bubble = document.createElement("div");
  bubble.className = `message ${user}`;
  bubble.innerText = msg;
  box.appendChild(bubble);

  document.getElementById("message").value = "";
  box.scrollTop = box.scrollHeight;
}
