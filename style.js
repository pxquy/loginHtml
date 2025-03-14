function checkForm() {
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const button = document.querySelector("button");

  if (name === "quý" && password === "quy") {
    window.location.href = "product.html";
  } else {
    button.style.background = "red";
    setTimeout(function () {
      if ((button.style.background = "red")) {
        button.style.background = "rgba(255,255,255,0.2)";
      }
    }, 2000);
    return alert("sai tài khoản hoặc mật khẩu");
  }
}
