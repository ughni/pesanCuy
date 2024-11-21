document.getElementById("userInput1").addEventListener("click", (event) => {
  const input = document.getElementById("mughni").value;
  const user = document.querySelector(".user01");
  user.textContent += input.toLowerCase() + "\n";
  document.getElementById("mughni").value = "";
  event.preventDefault();
});

document.getElementById("userInput2").addEventListener("click", (event) => {
  const input = document.getElementById("syarif").value;
  const user = document.querySelector(".user02");
  user.textContent += input.toUpperCase() + "\r\n";
  document.getElementById("syarif").value = "";
  event.preventDefault();
});
