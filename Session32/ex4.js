document.getElementById("check").onclick = function validateEmail() {
  let input = document.getElementById("email").value;
  if (
    input.includes("@") &&
    (input.endsWith(".com") || input.endsWith(".vn"))
  ) {
    document.getElementById("result").textContent = "email hợp lệ!";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").textContent = "email không hợp lệ!";
    document.getElementById("result").style.color = "red";
  }
}
