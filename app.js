document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("aside nav button");
  const content = document.getElementById("content");
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleSidebar");

  // Función para cargar páginas
  async function loadPage(page) {
    try {
      const res = await fetch(page);
      const html = await res.text();
      content.innerHTML = html;
    } catch (err) {
      content.innerHTML = "<p class='text-red-500'>Error al cargar la página.</p>";
    }
  }

  // Asignar clicks a los botones del menú
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const page = btn.getAttribute("data-page");
      loadPage(page);
    });
  });

  // Botón para ocultar/mostrar el sidebar
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
  });

  // Cargar página inicial (Home)
  loadPage("directory.html");
});
