const carouselInner = document.querySelector(".carousel-inner");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentIndex = 0;

function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselInner.children.length) % carouselInner.children.length;
    updateSlide();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselInner.children.length;
    updateSlide();
}

function updateSlide() {
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

function autoSlide() {
    nextSlide();
    setTimeout(autoSlide, 3000); // Troca a imagem a cada 5 segundos
}

autoSlide(); // Inicializa o carrossel automático
