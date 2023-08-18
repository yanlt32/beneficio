function toggleReadMore() {
    const hiddenContent = document.querySelector('.hidden-content');
    const readMoreButton = document.querySelector('.read-more-button');

    if (hiddenContent.style.display === 'none') {
        hiddenContent.style.display = 'block';
        readMoreButton.textContent = 'Mostrar Menos';
    } else {
        hiddenContent.style.display = 'none';
        readMoreButton.textContent = 'Ler Mais';
    }
}
