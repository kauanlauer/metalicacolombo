// Função para rolar suavemente até o topo
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function () {
  var galeriaContainer = document.querySelector(".galeria-container");

  // Configuração do slide automático
  var slideIndex = 0;
  var slideInterval = setInterval(function () {
      slideIndex++;
      galeriaContainer.scrollLeft += galeriaContainer.clientWidth; // Move para a próxima imagem

      // Se atingir o final, volta para o início
      if (slideIndex === galeriaContainer.children.length - 1) {
          slideIndex = 0;
          galeriaContainer.scrollLeft = 0;
      }
  }, 3000); // Troca de imagem a cada 3 segundos

  // Adiciona eventos de pausa e reinício ao passar o mouse sobre a galeria
  galeriaContainer.addEventListener("mouseover", function () {
      clearInterval(slideInterval);
  });

  galeriaContainer.addEventListener("mouseout", function () {
      slideInterval = setInterval(function () {
          slideIndex++;
          galeriaContainer.scrollLeft += galeriaContainer.clientWidth;

          if (slideIndex === galeriaContainer.children.length - 1) {
              slideIndex = 0;
              galeriaContainer.scrollLeft = 0;
          }
      }, 3000);
  });
});
