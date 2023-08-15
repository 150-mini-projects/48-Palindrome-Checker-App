const button = document.querySelector("#btn");
const inputText = document.querySelector("#input-text");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
  const text = inputText.value.trim();

  if (text.length === 0) {
    alert("Input field cannot be empty");
    return;
  }

  const cleantText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const isPalindrome = cleantText === cleantText.split("").reverse().join("");

  const message = isPalindrome
    ? `<span>Yes!</span> Indeed it is!`
    : `<span>Nope!</span> It is not!`;

  result.innerHTML = message;
  result.classList.remove("error", "success");
  setTimeout(() => {
    result.classList.add(isPalindrome ? "success" : "error");
  }, 10);
  
});
