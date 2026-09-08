const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const toast = document.querySelector('.toast');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.favorite').forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('selected');
    button.textContent = button.classList.contains('selected') ? '♥' : '♡';
  });
});

document.querySelectorAll('.call-button').forEach((button) => {
  button.addEventListener('click', () => {
    toast.textContent = `Private call with ${button.dataset.name} is coming soon.`;
    toast.classList.add('visible');
    window.setTimeout(() => toast.classList.remove('visible'), 2800);
  });
});

document.querySelectorAll('[data-prototype-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const toastMessage = form.closest('.signup-card').querySelector('.verification-note')
      ? 'Application preview only. Nothing has been submitted or stored.'
      : 'Account preview only. Nothing has been submitted or stored.';
    toast.textContent = toastMessage;
    toast.classList.add('visible');
    window.setTimeout(() => toast.classList.remove('visible'), 3200);
  });
});