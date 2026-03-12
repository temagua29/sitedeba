function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-animation');
    
    const symbols = ['❤️', '💖', '🌸', '✨', '💕', '🌷', '☁️'];
    heart.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    
    heart.style.left = Math.random() * 100 + "vw";
    
    heart.style.fontSize = Math.random() * 15 + 15 + "px";
    
    heart.style.animationDuration = Math.random() * 4 + 3 + "s";
    
    heart.style.opacity = Math.random() * 0.5 + 0.5;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 300);