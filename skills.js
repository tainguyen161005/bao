document.addEventListener('DOMContentLoaded', () => {
  const skillCircles = document.querySelectorAll('.skill-circle span');
  skillCircles.forEach(circle => {
    const percentage = parseInt(circle.textContent);
    circle.style.background = `conic-gradient(#00ff00 0% ${percentage}%, #ccc ${percentage}% 100%)`;
  });
});
