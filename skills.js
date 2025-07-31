// Bạn có thể thêm logic động ở đây, ví dụ: cập nhật phần trăm động
document.querySelectorAll('.skill-circle').forEach(circle => {
    const percent = circle.getAttribute('data-percent');
    circle.style.setProperty('--percent', `${percent}%`);
});
