document.querySelectorAll('.circle').forEach(canvas => {
    const ctx = canvas.getContext('2d');
    const percent = parseInt(canvas.dataset.percent);
    const startAngle = -0.5 * Math.PI;
    const endAngle = startAngle + (2 * Math.PI * (percent / 100));
    const radius = canvas.width / 2 - 10;

    canvas.width = 120;
    canvas.height = 120;

    // Background circle
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 10;
    ctx.stroke();

    // Foreground arc
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, startAngle, endAngle);
    ctx.strokeStyle = '#00AFFF';
    ctx.lineWidth = 10;
    ctx.stroke();

    // Text
    ctx.font = '20px Segoe UI';
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(percent + '%', canvas.width / 2, canvas.height / 2);
});
