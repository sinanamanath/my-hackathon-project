const USERS_KEY = "farmwise_users";
const SESSION_KEY = "farmwise_session";

// ---------- Tab Switcher ----------
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

// ---------- In-Browser Persistent Storage Database Engine ----------
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
  if (el) {
    el.textContent = message;
    el.classList.remove("hidden");
  }
}

function hideError(elId) {
  const el = document.getElementById(elId);
  if (el) el.classList.add("hidden");
}

// ---------- Registration Handler ----------
function handleSignup(event) {
  event.preventDefault();
  hideError("signup-error");

  const name = document.getElementById("signup-name").value.trim();
  const email = document.getElementById("signup-email").value.trim().toLowerCase();
  const password = document.getElementById("signup-password").value;
  const confirm = document.getElementById("signup-password-confirm").value;

  if (password !== confirm) {
    showError("signup-error", "Passwords do not match.");
    return false;
  }

  const users = getUsers();
  if (users.some(u => u.email === email)) {
    showError("signup-error", "An account with this email address already exists.");
    return false;
  }

  // Persist new user record directly to the database
  users.push({
    id: Date.now(),
    name,
    email,
    password,
    registeredAt: new Date().toISOString()
  });
  saveUsers(users);

  // Set active session
  localStorage.setItem(SESSION_KEY, JSON.stringify({ name, email }));
  alert(`Account successfully created for ${name}! Redirecting to FarmWise...`);
  window.location.href = "main.html";
  return false;
}

// ---------- Login Handler ----------
function handleLogin(event) {
  event.preventDefault();
  hideError("login-error");

  const identifier = document.getElementById("login-identifier").value.trim().toLowerCase();
  const password = document.getElementById("login-password").value;

  const users = getUsers();
  const match = users.find(u => u.email === identifier && u.password === password);

  if (!match) {
    showError("login-error", "Invalid email address or password.");
    return false;
  }

  // Set active session
  localStorage.setItem(SESSION_KEY, JSON.stringify({ name: match.name, email: match.email }));
  window.location.href = "main.html";
  return false;
}