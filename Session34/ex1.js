document.getElementById("register").onclick = function register() {
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  let message = document.getElementById("message");
  if (!email || !password || !confirmPassword) {
    message.innerText = "Vui lòng nhập đầy đủ thông tin!";
    return;
  }
  if (password !== confirmPassword) {
    message.innerText = "Mật khẩu xác nhận không khớp!";
    return;
  }
  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.some((user) => user.email === email)) {
    message.innerText = "Email này đã được sử dụng!";
    return;
  }
  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));
  message.style.color = "green";
  message.innerText = "Đăng ký thành công!";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("confirmPassword").value = "";
  window.location.href = "Ex3.html";
}
