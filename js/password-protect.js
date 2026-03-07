/**
 * Password protection for About and Case Studies pages.
 * Change the password below; it is client-side only (for light portfolio protection).
 */
function initPasswordProtect() {
  var PASSWORD = 'opensesame'; // Change this to your desired password
  var STORAGE_KEY = 'portfolio_authenticated';

  function isAuthenticated() {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === 'true';
    } catch (e) {
      return false;
    }
  }

  function setAuthenticated() {
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch (e) {}
  }

  function showPage() {
    var style = document.getElementById('password-protect-hide');
    if (style) style.disabled = true;
    var page = document.getElementById('password-protect-page');
    if (page) page.remove();
  }

  var LOCK_ICON = '<svg class="password-protect-lock-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>';

  function showPasswordForm() {
    var page = document.createElement('div');
    page.id = 'password-protect-page';

    var header = document.createElement('div');
    header.className = 'header';
    header.innerHTML = '<div class="w-container"><div class="left"><div class="logo-name"><a href="../index.html" class="new-logo-link">Lauren Vachon</a></div></div><div class="right"><a href="../case-studies/about.html" class="right-nav-link">About</a><a href="../case-studies/casestudies.html" class="right-nav-link">Case Studies</a></div></div>';

    var main = document.createElement('div');
    main.className = 'password-protect-main';

    var lockWrap = document.createElement('div');
    lockWrap.className = 'password-protect-lock-wrap';
    lockWrap.innerHTML = LOCK_ICON;

    var title = document.createElement('h1');
    title.className = 'password-protect-title';
    title.textContent = 'Protected Page';

    var box = document.createElement('div');
    box.className = 'password-protect-box';

    var form = document.createElement('form');
    form.className = 'password-protect-form';
    form.onsubmit = function (e) {
      e.preventDefault();
      var input = form.querySelector('input');
      var err = form.querySelector('.password-protect-error');
      if (input.value === PASSWORD) {
        setAuthenticated();
        showPage();
      } else {
        if (err) err.remove();
        var msg = document.createElement('p');
        msg.className = 'password-protect-error';
        msg.textContent = 'Incorrect password. Try again.';
        form.appendChild(msg);
      }
    };

    var label = document.createElement('label');
    label.className = 'password-protect-label';
    label.textContent = 'Password';

    var input = document.createElement('input');
    input.type = 'password';
    input.placeholder = 'Enter your password';
    input.autocomplete = 'current-password';
    input.className = 'password-protect-input';

    var btn = document.createElement('button');
    btn.type = 'submit';
    btn.className = 'password-protect-btn';
    btn.textContent = 'Submit';

    var returnLink = document.createElement('a');
    returnLink.href = '../index.html';
    returnLink.className = 'password-protect-return';
    returnLink.textContent = 'Return to Home';

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(btn);
    box.appendChild(form);
    main.appendChild(lockWrap);
    main.appendChild(title);
    main.appendChild(box);
    main.appendChild(returnLink);
    page.appendChild(header);
    page.appendChild(main);
    document.documentElement.appendChild(page);
    input.focus();
  }

  if (isAuthenticated()) {
    showPage();
  } else {
    showPasswordForm();
  }
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPasswordProtect);
} else {
  initPasswordProtect();
}
