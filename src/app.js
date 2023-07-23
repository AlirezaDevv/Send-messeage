const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let message = document.querySelector("#message").value;
  const feedback = document.querySelector(".feedback");
  const message_content = document.querySelector(".message-content");

  if (message === "") {
    feedback.classList.remove("hidden");
  } else {
    feedback.classList.add("hidden");
    message_content.innerHTML = message;
    message = "";
  }
});
