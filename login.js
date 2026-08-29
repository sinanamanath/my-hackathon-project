const USERS_KEY = "farmwise_users";
const SESSION_KEY = "farmwise_session";
 
// In-memory OTP store for the current signup attempt: { phone: "1234", email: "5678" }
let pendingOtps = { phone: null, email: null };
let verifiedFields = { phone: false, email: false };
 
// ---------- Tabs ----------
function switchTab(tab) {
  const isLogin = tab === "login";
  document.getElementById("login-form").classList.toggle("hidden", !isLogin);
  document.getElementById("signup-form").classList.toggle("hidden", isLogin);
 
  const activeClasses = ["bg-white", "shadow-sm", "text-brand-700"];
  const loginTab = document.getElementById("tab-login");
  const signupTab = document.getElementById("tab-signup");
 
  loginTab.classList.toggle("text-slate-500", !isLogin);
  signupTab.classList.toggle("text-slate-500", isLogin);
  activeClasses.forEach(c => {
    loginTab.classList.toggle(c, isLogin);
    signupTab.classList.toggle(c, !isLogin);
  });
}
 
// ---------- OTP simulation ----------
function generateOtp() {
  return String(Math.floor(1000 + Math.random() * 9000)); // 4-digit code
}
 
function sendOtp(field) {
  const code = generateOtp();
  pendingOtps[field] = code;
  verifiedFields[field] = false;
 
  if (field === "phone") {
    const phone = document.getElementById("signup-phone").value;
    if (!/^\d{10}$/.test(phone)) {
      alert("Enter a valid 10-digit phone number first.");
      return;
    }
    document.getElementById("phone-otp-row").classList.remove("hidden");
    document.getElementById("phone-otp-status").textContent = "";
    // Demo stand-in for a real SMS gateway:
    alert(`(Demo) OTP sent to +91 ${phone}: ${code}`);
  } else {
    const email = document.getElementById("signup-email").value;
    if (!/^[^\s@]+@gmail\.com$/i.test(email)) {
      alert("Enter a valid Gmail address first.");
      return;
    }
    document.getElementById("email-otp-row").classList.remove("hidden");
    document.getElementById("email-otp-status").textContent = "";
    // Demo stand-in for a real email send (e.g. SMTP):
    alert(`(Demo) OTP sent to ${email}: ${code}`);
  }
}
 
function verifyOtp(field) {
  const input = document.getElementById(`${field}-otp-input`).value.trim();
  const status = document.getElementById(`${field}-otp-status`);
 
  if (!pendingOtps[field]) {
    status.textContent = "Request an OTP first.";
    status.className = "text-[11px] font-bold text-rose-600";
    return;
  }
 
  if (input === pendingOtps[field]) {
    verifiedFields[field] = true;
    status.textContent = "Verified ✓";
    status.className = "text-[11px] font-bold text-emerald-600";
  } else {
    verifiedFields[field] = false;
    status.textContent = "Incorrect code";
    status.className = "text-[11px] font-bold text-rose-600";
  }
}
 
// ---------- Helpers ----------
function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
}
 
function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}
 
function showError(elId, message) {
  const el = document.getElementById(elId);
  el.textContent = message;
  el.classList.remove("hidden");
}
 
function hideError(elId) {
  document.getElementById(elId).classList.add("hidden");
}
 
// ---------- Sign up ----------
function handleSignup(event) {
  event.preventDefault();
  hideError("signup-error");
 
  const name = document.getElementById("signup-name").value.trim();
  const phone = document.getElementById("signup-phone").value.trim();
  const email = document.getElementById("signup-email").value.trim();
  const password = document.getElementById("signup-password").value;
  const confirm = document.getElementById("signup-password-confirm").value;
 
  if (!verifiedFields.phone) {
    showError("signup-error", "Please verify your phone number with the OTP first.");
    return false;
  }
  if (!verifiedFields.email) {
    showError("signup-error", "Please verify your Gmail address with the OTP first.");
    return false;
  }
  if (password !== confirm) {
    showError("signup-error", "Passwords do not match.");
    return false;
  }
 
  const users = getUsers();
  if (users.some(u => u.phone === phone || u.email === email)) {
    showError("signup-error", "An account with this phone or Gmail already exists.");
    return false;
  }
 
  users.push({ name, phone, email, password }); // demo only: plain-text password
  saveUsers(users);
 
  localStorage.setItem(SESSION_KEY, JSON.stringify({ name, phone, email }));
  alert(`Account created for ${name}. Redirecting to FarmWise...`);
  window.location.href = "main.html";
  return false;
}
 
// ---------- Login ----------
function handleLogin(event) {
  event.preventDefault();
  hideError("login-error");
 
  const identifier = document.getElementById("login-identifier").value.trim();
  const password = document.getElementById("login-password").value;
 
  const users = getUsers();
  const match = users.find(
    u => (u.phone === identifier || u.email === identifier) && u.password === password
  );
 
  if (!match) {
    showError("login-error", "No matching account, or incorrect password.");
    return false;
  }
 
  localStorage.setItem(SESSION_KEY, JSON.stringify({ name: match.name, phone: match.phone, email: match.email }));
  window.location.href = "main.html";
  return false;
}
 