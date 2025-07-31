const projects = [
  {
    title: 'NUMGAZ',
    description: 'Quản lý mạng lưới cấp gas theo dạng GIS.',
    tags: ['JavaScript', 'Leaflet', 'PostgreSQL', 'Node.js']
  },
  {
    title: 'TRAVAUX',
    description: 'Quản lý can thiệp trên đường cho chính quyền.',
    tags: ['Node', 'Express', 'ArcGIS', 'HTML5']
  },
  {
    title: 'WEBLAB',
    description: 'Hệ thống quản lý thông tin phòng thí nghiệm.',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'Chart.js']
  },
  {
    title: 'ROOT SYSTEM',
    description: 'Website doanh nghiệp chuyên về tài chính.',
    tags: ['React', 'SCSS', 'REST API']
  },
  {
    title: 'LIGHTNING DASHBOARD',
    description: 'Bảng điều khiển quản lý dành cho admin.',
    tags: ['Angular', 'Bootstrap', 'Chart.js', 'Typescript']
  }
];

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const modalTags = document.getElementById("modal-tags");
const closeBtn = document.querySelector(".close");

document.querySelectorAll('.portfolio-item').forEach(item => {
  item.addEventListener('click', () => {
    const index = item.getAttribute('data-index');
    const project = projects[index];
    modalTitle.textContent = project.title;
    modalDesc.textContent = project.description;
    modalTags.innerHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    modal.style.display = "flex";
  });
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };
