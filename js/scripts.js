document.addEventListener("DOMContentLoaded", function() {
 // Variável para armazenar o índice do slide
 let slideIndex = 0;

 // Função para exibir os slides no slideshow do cabeçalho
 function showSlides() {
     const slides = document.querySelectorAll(".mySlides.fade");
     const dots = document.querySelectorAll(".dot");

     // Esconder todos os slides
     slides.forEach(slide => {
         slide.style.display = "none";  
     });

     // Incrementar o índice do slide
     slideIndex++;
     if (slideIndex > slides.length) {
         slideIndex = 1;
     }

     // Remover a classe "active" de todos os dots
     dots.forEach(dot => {
         dot.classList.remove("active");
     });

     // Exibir o slide atual e adicionar a classe "active" ao dot correspondente
     slides[slideIndex - 1].style.display = "block";  
     dots[slideIndex - 1].classList.add("active");

     // Alterar o slide a cada 3 segundos
     setTimeout(showSlides, 3000);
 }

 // Função para alterar slides ao clicar nos botões de próximo/anterior
 function plusSlides(n) {
     showSlides(slideIndex += n);
 }

 // Função para definir o slide atual ao clicar nos dots
 function currentSlide(n) {
     showSlides(slideIndex = n);
 }

 // Iniciar slideshow ao carregar a página
 showSlides();

 // Carrossel de imagens do produto
 const carouselItems = document.querySelectorAll('.carousel-item');
 const prevBtn = document.querySelector('.carousel-control.prev');
 const nextBtn = document.querySelector('.carousel-control.next');

 let currentIndex = 0;

 function showItem(index) {
     if (index < 0) {
         index = carouselItems.length - 1;
     } else if (index >= carouselItems.length) {
         index = 0;
     }

     carouselItems.forEach(item => {
         item.classList.remove('active');
     });

     carouselItems[index].classList.add('active');
     currentIndex = index;
 }

 prevBtn.addEventListener('click', function() {
     showItem(currentIndex - 1);
 });

 nextBtn.addEventListener('click', function() {
     showItem(currentIndex + 1);
 });
});
    