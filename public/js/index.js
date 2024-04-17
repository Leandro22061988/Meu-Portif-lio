// Selecionando os elementos do DOM
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebarClose = document.getElementById('sidebar-close');

// Adicionando event listener para mostrar a barra lateral ao clicar no botão de toggle
sidebarToggle.addEventListener('click', function() {
  sidebar.style.left = '0';
});

// Adicionando event listener para esconder a barra lateral ao clicar no botão de fechar
sidebarClose.addEventListener('click', function() {
  sidebar.style.left = '-250px';
});
