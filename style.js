// LOGIN
function checkForm() {
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const button = document.querySelector("button");
  const length = 3;
  const length1 = 30;
  const length2 = 6;
  const username = "quy123";
  const password1 = 123456;

  if (name.length < length || name.length > length1) {
    document.getElementById("mes1").innerText =
      "Tài khoản đăng nhập phải nằm trong độ dài từ 3 - 30 ký tự";
  }
  if (password.length < length2) {
    document.getElementById("mes2").innerText = "sai mật khẩu";
  }
  if (name == username && password == password1) {
    window.location.href = "product.html";
  }
  if (name != username || password != password1) {
    document.getElementById("mes3").innerText = "Sai tài khoản hoặc mật khẩu!";
  }
  if (name == "" || password == "") {
    button.style.background = "red";
  }
  setTimeout(function () {
    button.style.background = "rgba(255,255,255,0.3)";
  }, 2000);
}
