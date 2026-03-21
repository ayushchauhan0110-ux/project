/* ===================== AUTH TOGGLING (Login/Register) ===================== */
// Wire up top-right links to toggle forms without page reload
const navLogin = document.getElementById('navLogin');
const navRegister = document.getElementById('navRegister');

const formTitle = document.getElementById('formTitle');
const loginForm  = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

function showLogin() {
  formTitle.textContent = 'Login';
  loginForm.classList.add('active');
  registerForm.classList.remove('active');
}
function showRegister() {
  formTitle.textContent = 'Register';
  registerForm.classList.add('active');
  loginForm.classList.remove('active');
}

navLogin.addEventListener('click', (e) => { e.preventDefault(); showLogin(); });
navRegister.addEventListener('click', (e) => { e.preventDefault(); showRegister(); });

/* ===================== DEFENSIVE AUTOPLAY ENFORCEMENT ===================== */
/* Makes sure all project/hero videos attempt to play on load (muted+inline) */
window.addEventListener('load', () => {
  document.querySelectorAll('video').forEach(v => {
    v.muted = true;
    v.setAttribute('playsinline', '');
    const playPromise = v.play?.();
    if (playPromise instanceof Promise) {
      playPromise.catch(() => { /* ignore autoplay blocks */ });
    }
  });
});


// 3d models page
