function toggleManage() {
  const section = document.getElementById('manageSection');
  const saveBtn = document.getElementById('btnSave');
  const isOpen  = section.classList.contains('open');

  section.classList.toggle('open');
  saveBtn.style.display = isOpen ? 'none' : 'block';
}

function accept() {
  document.getElementById('analytics').checked      = true;
  document.getElementById('advertising').checked    = true;
  document.getElementById('personalisation').checked = true;
  showToast('All cookies accepted. Preferences saved.');
  hideBanner();
}

function reject() {
  showToast('Only necessary cookies active. Preferences saved.');
  hideBanner();
}

function savePrefs() {
  const analytics       = document.getElementById('analytics').checked;
  const advertising     = document.getElementById('advertising').checked;
  const personalisation = document.getElementById('personalisation').checked;

  const enabled = [
    analytics       && 'analytics',
    advertising     && 'advertising',
    personalisation && 'personalisation',
  ].filter(Boolean);

  const message = enabled.length
    ? `Saved: ${enabled.join(', ')} enabled`
    : 'Only necessary cookies saved.';

  showToast(message);
  hideBanner();
}

function hideBanner() {
  const banner = document.getElementById('banner');
  const page   = document.querySelector('.fake-page');
  banner.style.opacity = '0';
  page.style.transition = 'filter 0.3s ease, opacity 0.3s ease';
  page.style.filter  = 'none';
  page.style.opacity = '1';
  setTimeout(() => { banner.style.display = 'none'; }, 300);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.style.display = 'block';
  setTimeout(() => { toast.style.display = 'none'; }, 3000);
}
