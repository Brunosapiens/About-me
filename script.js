const paragraph = document.getElementById('texto');
const linhaDestaque = document.createElement('div');
linhaDestaque.classList.add('linha-destaque');
paragraph.appendChild(linhaDestaque);

paragraph.addEventListener('mousemove', (event) => {
    const lineHeight = parseFloat(getComputedStyle(paragraph).lineHeight);
    const rect = paragraph.getBoundingClientRect();
    const offsetY = event.clientY - rect.top;
    const lineIndex = Math.floor(offsetY / lineHeight);

    // Define a posição vertical da linha destacada
    linhaDestaque.style.top = `${lineIndex * lineHeight}px`;
});

paragraph.addEventListener('mouseleave', () => {
    linhaDestaque.style.top = '-9999px'; // Oculta o destaque quando o mouse sai
});

function toggleVisibility(topicElement) {
    const content = topicElement.querySelector(".content");
    content.classList.toggle("hidden"); // Alterna a classe 'hidden' para mostrar ou esconder o conteúdo
}