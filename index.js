const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");

const loginBtn = document.querySelector(".navbar-end a");
const closeLogin = document.getElementById("closeLogin");
const closeSignup = document.getElementById("closeSignup");

const openSignup = document.getElementById("openSignup");
const openLogin = document.getElementById("openLogin");

// Open login modal from navbar
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.classList.remove("hidden");
});

// Close modals
closeLogin.addEventListener("click", () => loginModal.classList.add("hidden"));
closeSignup.addEventListener("click", () =>
  signupModal.classList.add("hidden")
);

// Switch from login → signup
openSignup.addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.classList.add("hidden");
  signupModal.classList.remove("hidden");
});

// Switch from signup → login
openLogin.addEventListener("click", (e) => {
  e.preventDefault();
  signupModal.classList.add("hidden");
  loginModal.classList.remove("hidden");
});

// Close when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === loginModal) loginModal.classList.add("hidden");
  if (e.target === signupModal) signupModal.classList.add("hidden");
});
