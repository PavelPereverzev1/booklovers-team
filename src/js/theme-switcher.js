const switcher = document.querySelector('.js-switch-theme');

switcher.addEventListener('change', (e) => {
  const darkTheme = e.target.checked;
  localStorage.setItem('darkTheme', darkTheme);
  applyTheme();
});

window.addEventListener('DOMContentLoaded', () => {
  applyTheme();
});

function applyTheme() {
  const savedTheme = localStorage.getItem('darkTheme');
  if (savedTheme) {
    if (savedTheme === 'true') {
        document.body.setAttribute('dark', '');
        switcher.checked = true;
    } else {
        document.body.removeAttribute('dark');
    }
  }
}
