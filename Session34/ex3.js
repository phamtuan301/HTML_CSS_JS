document.getElementById("login").onclick = function login() {
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = document.getElementById("message");

  if (!email || !password) {
    message.innerText = "Vui lòng nhập đầy đủ thông tin!";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    message.innerText = "Email hoặc mật khẩu không đúng!";
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));
  message.style.color = "green";
  message.innerText = "Đăng nhập thành công!";
  window.location.href = "home.html";
}
