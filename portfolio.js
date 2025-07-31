const projects = [
  {
    title: "NUMGAZ",
    image: "project1.jpg",
    description: "Digitalization of gas networks with spatial tools and PostgreSQL backend.",
    tags: ["Java", "JSP", "PostgreSQL", "ArcGIS", "Dojo", "HTML5"]
  },
  {
    title: "PRO SIDEBAR",
    image: "project2.jpg",
    description: "Responsive sidebar template built with Bootstrap and JavaScript.",
    tags: ["Bootstrap", "HTML5", "CSS3", "JavaScript"]
  },
  {
    title: "WEBLAB",
    image: "project3.jpg",
    description: "Laboratory Information System with user-friendly interface.",
    tags: ["HTML", "Angular", "Spring", "MySQL"]
  },
  {
    title: "ROOT",
    image: "project4.jpg",
    description: "Corporate landing page with services and contact sections.",
    tags: ["HTML", "CSS", "JS"]
  },
  {
    title: "TRAVAUX",
    image: "project5.jpg",
    description: "Geospatial tools for managing map-based tasks and services.",
    tags: ["JavaScript", "PostgreSQL", "HTML", "CSS"]
  }
];

function openPopup(index) {
  const popup = document.getElementById("popup");
  const project = projects[index];
  document.getElementById("popup-image").src = project.image;
  document.getElementById("popup-title").innerText = project.title;
  document.getElementById("popup-description").innerText = project.description;
  const tagsHTML = project.tags.map(tag => `<span>${tag}</span>`).join("");
  document.getElementById("popup-tags").innerHTML = tagsHTML;
  popup.classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}
