function logout() {
  localStorage.removeItem("loggedUser");
  window.location.href = "/login.html"; // غير المسار حسب مكان صفحة تسجيل الدخول
}

function goBack() {
  window.history.back();
}
