let permanentState = null;
let imageCache = {};

function preloadImages() {
    const imagePaths = [
        "/assets/images/projects2.jpg",
        "/assets/images/blog2.jpg",
        "/assets/images/music2.jpg",
        "/assets/images/games3.jpg",
        "/assets/images/projects_select.jpg",
        "/assets/images/blog_posterize_brown.jpg",
        "/assets/images/music_posterize_brown.jpg",
        "/assets/images/games_brown.jpg",
        "/assets/images/blog_select.jpg",
        "/assets/images/projects_yellow.jpg",
        "/assets/images/music_yellow2.jpg",
        "/assets/images/games_yellow.jpg",
        "/assets/images/music.jpg",
        "/assets/images/projects_blue.jpg",
        "/assets/images/blog_blue.jpg",
        "/assets/images/games_blue.jpg",
        "/assets/images/games.png",
        "/assets/images/projects_red.jpg",
        "/assets/images/blog_red.jpg",
        "/assets/images/music_red.jpg"
    ];

    imagePaths.forEach(path => {
        const img = new Image();
        img.src = path;
        imageCache[path] = img;
    });
}

window.addEventListener('load', preloadImages);

function changeImagesAndBackground(category) {
    if (permanentState) return;
    changeImages(category);
    changeBackground(category);
    changeTextColors(category);
}

function setPermanentState(category) {
    permanentState = category;
    changeImages(category);
    changeBackground(category);
    changeTextColors(category);
}

function resetImages() {
    if (permanentState) return;
    setImage("projects-card", "/assets/images/projects2.jpg");
    setImage("blog-card", "/assets/images/blog2.jpg");
    setImage("music-card", "/assets/images/music2.jpg");
    setImage("games-card", "/assets/images/games3.jpg");
    resetBackground();
    resetTextColors();
}

function setImage(cardId, imagePath) {
    const img = document.getElementById(cardId).querySelector("img");
    if (imageCache[imagePath]) {
        img.src = imageCache[imagePath].src;
    } else {
        img.src = imagePath;
    }
}

function changeImages(category) {
    if (category === "projects") {
        setImage("projects-card", "/assets/images/projects_select.jpg");
        setImage("blog-card", "/assets/images/blog_posterize_brown.jpg");
        setImage("music-card", "/assets/images/music_posterize_brown.jpg");
        setImage("games-card", "/assets/images/games_brown.jpg");
    } else if (category === "blog") {
        setImage("blog-card", "/assets/images/blog_select.jpg");
        setImage("projects-card", "/assets/images/projects_yellow.jpg");
        setImage("music-card", "/assets/images/music_yellow2.jpg");
        setImage("games-card", "/assets/images/games_yellow.jpg");
    } else if (category === "music") {
        setImage("music-card", "/assets/images/music.jpg");
        setImage("projects-card", "/assets/images/projects_blue.jpg");
        setImage("blog-card", "/assets/images/blog_blue.jpg");
        setImage("games-card", "/assets/images/games_blue.jpg");
    } else if (category === "games") {
        setImage("games-card", "/assets/images/games.png");
        setImage("projects-card", "/assets/images/projects_red.jpg");
        setImage("blog-card", "/assets/images/blog_red.jpg");
        setImage("music-card", "/assets/images/music_red.jpg");
    }
}

function changeBackground(category) {
    if (category === "projects") {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#211412";
    } else if (category === "blog") {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#ed943b";
    } else if (category === "music") {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#0e44c2";
    } else if (category === "games") {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#e81010";
    }
}

function resetBackground() {
    if (permanentState) return;
    document.body.style.backgroundImage = 'url("/assets/images/bg-color9.1.png")';
    document.body.style.backgroundColor = "";
}

function changeTextColors(category) {
    // Seleciona os elementos de texto relevantes
    const welcomeText = document.querySelector('.welcome-text');
    const characterTexts = document.querySelectorAll('.character-text');
    let highlightColor, otherColor, highlightFontSize, otherFontSize, highlightPosition, otherPosition;
    let highlightRotate, otherRotate;
    let highlightTranslateX, highlightTranslateY, otherTranslateX, otherTranslateY;
    let highlightFontFamily, otherFontFamily;
    let highlightFontWeight, otherFontWeight;
    let highlightFontStyle, otherFontStyle;

    // Define as cores, tamanhos de fonte, posições, rotação, deslocamento e fonte para o card destacado e os outros cards
    switch (category) {
        case 'projects':
            highlightColor = '#ff470a';
            otherColor = '#8B4513';
            highlightFontSize = '4.5vw';  // Tamanho do texto do card selecionado
            otherFontSize = '2.0vw';      // Tamanho do texto dos outros cards
            highlightPosition = 'absolute'; // Posição destacada
            otherPosition = 'relative';    // Posição padrão
            highlightRotate = '340deg';     // Ângulo de rotação para o card destacado
            otherRotate = '0deg';         // Ângulo de rotação para os outros cards
            highlightTranslateX = '120px'; // Deslocamento horizontal para o card destacado
            highlightTranslateY = '-30px'; // Deslocamento vertical para o card destacado
            otherTranslateX = '0px';     // Deslocamento horizontal para os outros cards
            otherTranslateY = '0px';     // Deslocamento vertical para os outros cards
            highlightFontFamily = 'Bahnschrift Condensed'; // Família da fonte para o card destacado
            otherFontFamily = 'Georgia, serif'; // Família da fonte para os outros cards
            highlightFontWeight = 'bold'; // Peso da fonte para o card destacado
            otherFontWeight = 'normal';   // Peso da fonte para os outros cards
            highlightFontStyle = 'italic'; // Estilo da fonte para o card destacado
            otherFontStyle = 'normal';    // Estilo da fonte para os outros cards

            break;
        case 'blog':
            highlightColor = '#ffd700';
            otherColor = '#4B0082';
            highlightFontSize = '5.0vw';
            otherFontSize = '2.0vw';
            highlightPosition = 'static';
            otherPosition = 'static';
            highlightRotate = '0deg';
            otherRotate = '0deg';
            highlightTranslateX = ' -5px';
            highlightTranslateY = ' -10px';
            otherTranslateX = '0px';
            otherTranslateY = '0px';
            highlightFontFamily = 'Gentium Basic';
            otherFontFamily = 'Courier New, monospace';
            highlightFontWeight = 'bold';
            otherFontWeight = 'normal';
            highlightFontStyle = 'italic';
            otherFontStyle = 'normal';
            break;
        case 'music':
            highlightColor = '#4e9af1';
            otherColor = '#FF6347';
            highlightFontSize = '4.0vw';
            otherFontSize = '2.0vw';
            highlightPosition = 'absolute';
            otherPosition = 'relative';
            highlightRotate = '0deg';
            otherRotate = '0deg';
            highlightTranslateX = '100px';
            highlightTranslateY = ' -20px';
            otherTranslateX = '0px';
            otherTranslateY = '0px';
            highlightFontFamily = 'Corbel Light, sans-serif';
            otherFontFamily = 'Courier New, monospace';
            highlightFontWeight = 'normal';
            otherFontWeight = 'normal';
            highlightFontStyle = 'italic';
            otherFontStyle = 'normal';
            break;
        case 'games':
            highlightColor = '#32cd32';
            otherColor = '#8A2BE2';
            highlightFontSize = '6.0vw';
            otherFontSize = '2.5vw';
            highlightPosition = 'static';
            otherPosition = 'static';
            highlightRotate = '0deg';
            otherRotate = '0deg';
            highlightTranslateX = '0px';
            highlightTranslateY = '-250px';
            otherTranslateX = '0px';
            otherTranslateY = '0px';
            highlightFontFamily = 'Impact, sans-serif';
            otherFontFamily = 'Arial, sans-serif';
            highlightFontWeight = 'bold';
            otherFontWeight = 'normal';
            highlightFontStyle = 'bold';
            otherFontStyle = 'normal';
            break;
        default:
            highlightColor = '#fff';
            otherColor = '#fff';
            highlightFontSize = '2.0vw';
            otherFontSize = '2.0vw';
            highlightPosition = 'static';
            otherPosition = 'static';
            highlightRotate = '0deg';
            otherRotate = '0deg';
            highlightTranslateX = '0px';
            highlightTranslateY = '0px';
            otherTranslateX = '0px';
            otherTranslateY = '0px';
            highlightFontFamily = 'sans-serif';
            otherFontFamily = 'sans-serif';
            highlightFontWeight = 'normal';
            otherFontWeight = 'normal';
            highlightFontStyle = 'normal';
            otherFontStyle = 'normal';
    }

    // Aplica cor, tamanho de fonte, posição, rotação, deslocamento, e fonte para o welcome e para os outros cards
    welcomeText.style.color = otherColor;
    welcomeText.style.position = otherPosition; // Aplica a posição padrão
    welcomeText.style.transform = `rotate(${otherRotate}) translate(${otherTranslateX}, ${otherTranslateY})`; // Aplica rotação e deslocamento
    welcomeText.style.fontFamily = otherFontFamily; // Aplica a família da fonte padrão
    welcomeText.style.fontWeight = otherFontWeight; // Aplica o peso da fonte padrão
    welcomeText.style.fontStyle = otherFontStyle; // Aplica o estilo da fonte padrão

    characterTexts.forEach(text => {
        if (text.parentElement.id === `${category}-card`) {
            text.style.color = highlightColor;  // Seta a cor destacada para o card selecionado
            text.style.fontSize = highlightFontSize;  // Seta o tamanho da fonte destacada
            text.style.position = highlightPosition;  // Aplica a posição destacada
            text.style.transform = `rotate(${highlightRotate}) translate(${highlightTranslateX}, ${highlightTranslateY})`; // Aplica rotação e deslocamento
            text.style.fontFamily = highlightFontFamily; // Aplica a família da fonte destacada
            text.style.fontWeight = highlightFontWeight; // Aplica o peso da fonte destacado
            text.style.fontStyle = highlightFontStyle; // Aplica o estilo da fonte destacado
        } else {
            text.style.color = otherColor;      // Seta a cor padrão para os outros cards e título
            text.style.fontSize = otherFontSize;  // Seta o tamanho da fonte padrão
            text.style.position = otherPosition;  // Aplica a posição padrão
            text.style.transform = `rotate(${otherRotate}) translate(${otherTranslateX}, ${otherTranslateY})`; // Aplica rotação e deslocamento
            text.style.fontFamily = otherFontFamily; // Aplica a família da fonte padrão
            text.style.fontWeight = otherFontWeight; // Aplica o peso da fonte padrão
            text.style.fontStyle = otherFontStyle; // Aplica o estilo da fonte padrão
        }
    });
}

function resetTextColors() {
    if (permanentState) return;
    const welcomeText = document.querySelector('.welcome-text');
    const characterTexts = document.querySelectorAll('.character-text');

    welcomeText.style.color = '#fff';
    welcomeText.style.position = 'static'; // Reseta a posição para padrão
    welcomeText.style.transform = 'rotate(0deg) translate(0px, 0px)'; // Reseta rotação e deslocamento
    welcomeText.style.fontFamily = 'sans-serif'; // Reseta a família da fonte padrão
    welcomeText.style.fontWeight = 'normal'; // Reseta o peso da fonte padrão
    welcomeText.style.fontStyle = 'normal'; // Reseta o estilo da fonte padrão

    characterTexts.forEach(text => {
        text.style.color = '#fff';
        text.style.fontSize = '2.3vw';  // Tamanho de fonte padrão
        text.style.position = 'static'; // Reseta a posição para padrão
        text.style.transform = 'rotate(0deg) translate(0px, 0px)'; //
    });
}

// Mudando os blocos //
function updateBlockStyles(percentage) {
    // Limita a porcentagem entre 0 e 100
    percentage = Math.min(100, Math.max(0, percentage));
    let newSize;
    if (percentage <= 25) {
        newSize = 50; // Tamanho para 0-25%
    } else if (percentage <= 50) {
        newSize = 40; // Tamanho para 26-50%
    } else if (percentage <= 75) {
        newSize = 30; // Tamanho para 51-75%
    } else {
        newSize = 25; // Tamanho para 76-100%
    }
    const newColor = `rgb(${255 - percentage * 2.55}, ${percentage * 2.55}, 0)`; // Gradiente de verde para vermelho

    // Define a largura com base na faixa de porcentagem
    let newWidth;
    if (percentage <= 25) {
        newWidth = 100; // Largura para 0-25%
    } else if (percentage <= 50) {
        newWidth = 105; // Largura para 26-50%
    } else if (percentage <= 75) {
        newWidth = 115; // Largura para 51-75%
    } else {
        newWidth = 125; // Largura para 76-100%
    }

    // Atualiza as variáveis CSS
    document.documentElement.style.setProperty('--block-size', `${newSize}px`);
    document.documentElement.style.setProperty('--block-color', newColor);
    document.documentElement.style.setProperty('--loader-width', `${newWidth}px`);

}

// Exemplo de uso: atualiza o estilo dos blocos com base em 75%
// Pode ser substituído por um valor dinâmico ou evento
updateBlockStyles(0);

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.querySelector('.container').style.display = 'flex';
    }, 3500); // Ajuste o tempo conforme necessário
});

let percentage = 0;
const loadingText = document.getElementById('loading-text');
const loadingPercentage = document.getElementById('loading-percentage');
const loadingScreen = document.getElementById('loading-screen');
const messages = [
    { text: " Carregando..", fontSize: "3.7rem", color: "#f00e33", backgroundColor: "#000000" },
    { text: "✨Aesthetics", fontSize: "7.5rem", color: "#f9c74f", backgroundColor: "#f2998f" },
    { text: "🎨Dreams..", fontSize: "6.5rem", color: "#00f5e9", backgroundColor: "#66b0ff" },
    { text: "💡Inspiration...", fontSize: "4.0rem", color: "#4aff7d", backgroundColor: "#e8b409 " },
    { text: "🧠Creativity input!", fontSize: "3.5rem", color: "#ff00a2", backgroundColor: "#9000ff"}
];

const updateLoading = () => {

    if (percentage < 100) {
        percentage += 1; // Incrementa a porcentagem
        loadingPercentage.textContent = `${percentage}%`;

        // Atualiza o texto de carregamento com base na porcentagem
        if (percentage % 18 === 0) { // Muda a cada 20%
            const messageIndex = percentage / 18 - 1;
            const message = messages[messageIndex];

            loadingText.textContent = message.text;
            loadingText.style.fontSize = message.fontSize;
            loadingText.style.color = message.color;
            loadingPercentage.style.color = message.color; // Atualiza a cor do texto da porcentagem
            loadingScreen.style.backgroundColor = message.backgroundColor;

        }

        // Atualiza o estilo dos blocos com base na porcentagem
        updateBlockStyles(percentage);

        // Simula uma atualização do carregamento
        setTimeout(updateLoading, 30); // Ajuste o intervalo conforme necessário
    } else {
        document.getElementById('loading-screen').style.display = 'none';
        document.querySelector('.container').style.display = 'flex';
    }
};

updateLoading();

function showCategoryModal(event) {
    const modal = document.getElementById('category-modal');
    const overlay = document.querySelector('.overlay');
    const closeButton = document.querySelector('.close-button');

    // Pega a posição do card clicado
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    // Posiciona o modal na frente do card clicado
    modal.style.top = `${rect.top + window.scrollY}px`;
    modal.style.left = `${rect.left + window.scrollX}px`;

    modal.style.display = 'flex';
    overlay.style.display = 'block';

    closeButton.onclick = function() {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    };

    overlay.onclick = function() {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    };

    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.onclick = function() {
            const categoryName = item.textContent;
            console.log(`Clicou na categoria: ${categoryName}`);
            modal.style.display = 'none';
            overlay.style.display = 'none';
        };
    });
}

document.querySelectorAll('.character').forEach(card => {
    card.addEventListener('click', showCategoryModal);
});