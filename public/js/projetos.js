const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const projects = document.querySelectorAll('.project');
const projectsPerPage = 6; // Define quantos projetos serão exibidos por página
let currentPage = 1;
let totalPages = Math.ceil(projects.length / projectsPerPage);

// Função para mostrar os projetos da página atual
function showProjects() {
  projects.forEach((project, index) => {
    if (index >= (currentPage - 1) * projectsPerPage && index < currentPage * projectsPerPage) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });

  // Habilitar ou desabilitar botões de navegação com base na página atual
  if (currentPage === 1) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (currentPage === totalPages) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

// Função para mostrar a próxima página de projetos
function showNextPage() {
  currentPage++;
  showProjects();
}

// Função para mostrar a página anterior de projetos
function showPrevPage() {
  currentPage--;
  showProjects();
}

// Mostrar os projetos da página atual ao carregar a página
showProjects();

// Adicionar eventos aos botões de navegação
nextButton.addEventListener('click', showNextPage);
prevButton.addEventListener('click', showPrevPage);
