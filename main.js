document.addEventListener("DOMContentLoaded", () => {
  // Navbar active state handling
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetUrl = link.getAttribute("href");
      window.location.href = targetUrl;

      // Remove active class from all items
      document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"));
      // Add active class to clicked item
      link.closest(".nav-item").classList.add("active");
    });
  });

  // Set initial active state based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'home.html'; // Default to home.html if no match
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.closest(".nav-item").classList.add("active");
    }
  });

  // Draw skill circles
  document.querySelectorAll('.circle').forEach(canvas => {
    const ctx = canvas.getContext('2d');
    const percent = parseInt(canvas.dataset.percent);
    const start = -0.5 * Math.PI;
    const end = start + (2 * Math.PI * (percent / 100));
    const radius = canvas.width / 2 - 10;

    // Set canvas size
    canvas.width = 120;
    canvas.height = 120;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background circle
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#333';
    ctx.beginPath();
    ctx.arc(60, 60, radius, 0, 2 * Math.PI);
    ctx.stroke();

    // Draw progress arc
    ctx.strokeStyle = '#00ffff';
    ctx.beginPath();
    ctx.arc(60, 60, radius, start, end);
    ctx.stroke();

    // Text
    ctx.fillStyle = "#fff";
    ctx.font = "20px Segoe UI";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(percent + "%", 60, 60);
  });
});
