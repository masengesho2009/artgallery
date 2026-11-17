const form = document.querySelector('#admin-login-form');
const password = document.querySelector('#password');
const toggle = document.querySelector('.show-password');
const message = document.querySelector('#form-message');
const submitButton = form.querySelector('button[type="submit"]');

toggle.addEventListener('click', () => {
  const visible = password.type === 'password';
  password.type = visible ? 'text' : 'password';
  toggle.textContent = visible ? 'Hide' : 'Show';
  toggle.setAttribute('aria-label', visible ? 'Hide password' : 'Show password');
  toggle.setAttribute('aria-pressed', String(visible));
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  message.textContent = '';

  if (!form.reportValidity()) return;

  const email = document.querySelector('#email').value.trim();
  const passwordValue = password.value;

  submitButton.disabled = true;
  submitButton.textContent = 'Signing in…';

  try {
    const { data, error } = await window.studioSupabase.auth.signInWithPassword({
      email,
      password: passwordValue
    });

    if (error) throw error;
    if (!data.session) throw new Error('Sign-in did not create a session.');

    window.location.href = 'admin-dashboard.html';
  } catch (error) {
    message.textContent = error.message === 'Invalid login credentials'
      ? 'The email or password is incorrect. Please try again.'
      : 'We could not sign you in. Please check your connection and try again.';
    submitButton.disabled = false;
    submitButton.innerHTML = 'Sign in <span aria-hidden="true">↗</span>';
  }
});
