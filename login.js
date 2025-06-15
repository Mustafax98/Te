const signinTab = document.getElementById('signin-tab');
const signupTab = document.getElementById('signup-tab');
const signinForm = document.getElementById('signin-form');
const signupForm = document.getElementById('signup-form');

signinTab.addEventListener('click', () => {
    signinTab.classList.add('active');
    signupTab.classList.remove('active');
    signinForm.classList.add('active');
    signupForm.classList.remove('active');
});

signupTab.addEventListener('click', () => {
    signupTab.classList.add('active');
    signinTab.classList.remove('active');
    signupForm.classList.add('active');
    signinForm.classList.remove('active');
});

// Create Account Logic
document.getElementById("create-account-btn").addEventListener("click", () => {
    const fullname = document.getElementById("signup-fullname").value;
    const business = document.getElementById("signup-business").value;
    const mobile = document.getElementById("signup-mobile").value;
    const address = document.getElementById("signup-address").value;
    const email = document.getElementById("signup-email").value;
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;
    
    if (!fullname || !business || !mobile || !address || !email || !username || !password) {
        alert("Please fill in all fields.");
        return;
    }
    
    const newUser = {
        fullname,
        business,
        mobile,
        address,
        email,
        username,
        password,
        isActive: true,
        role: "user",
        panelAccess: false, // جديد
        date: new Date().toLocaleString()
    };


  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Account created successfully!");
  window.location.href = "users.html";
});

// Sign In Logic
// Sign In Logic
document.getElementById("signin-btn").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    alert("❌ Incorrect username or password");
    return;
  }

  if (!user.isActive) {
    alert("🚫 This account is not active. Please contact the admin.");
    return;
  }

  localStorage.setItem("loggedInUser", JSON.stringify(user));

  // ✅ Redirect based on role and admin approval
  switch (user.role) {
    case "owner":
    case "admin":
    case "manager":
    case "restaurant":
    case "supplier":
      if (!user.panelAccess) {
        alert("🚫 You don't have permission to access this panel yet.");
        return;
      }
      window.location.href = `/${user.role}.html`;
      break;
    case "customer":
    case "user":
    default:
      window.location.href = "/home.html";
      break;
  }
});
