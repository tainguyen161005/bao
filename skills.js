document.addEventListener('DOMContentLoaded', () => {
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach(item => {
    const percentage = parseInt(item.querySelector('span').textContent);
    const circle = item.querySelector('::before');
    const angle = (percentage / 100) * 360;
    item.style.setProperty('--angle', `${angle}deg`);
  });
});
