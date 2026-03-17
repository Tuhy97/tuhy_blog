const toggleButtons = document.querySelectorAll('[data-target]');

toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    if (!targetId) return;

    const target = document.getElementById(targetId);
    if (!target) return;

    const isHidden = target.classList.toggle('is-hidden');

    toggleButtons.forEach((otherButton) => {
      if (otherButton === button) return;
      const otherId = otherButton.getAttribute('data-target');
      const otherTarget = otherId ? document.getElementById(otherId) : null;
      if (otherTarget && !otherTarget.classList.contains('is-hidden')) {
        otherTarget.classList.add('is-hidden');
        otherButton.setAttribute('aria-expanded', 'false');
      }
    });

    button.setAttribute('aria-expanded', String(!isHidden));
  });
});
