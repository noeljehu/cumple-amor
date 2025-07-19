// Animación de entrada del título
anime({
  targets: '.titulo',
  translateY: [-50, 0],
  opacity: [0, 1],
  duration: 1500,
  easing: 'easeOutExpo'
});

const corazonesDisponibles = ['❤️', '💖', '💕', '💓', '💘', '💝', '💗', '❣️'];

function randomColor() {
  const colores = ['#ff5e91', '#f368e0', '#f54291', '#ff6b6b', '#ff9ff3', '#e84393', '#ff3e6c', '#ff99cc'];
  return colores[Math.floor(Math.random() * colores.length)];
}

function lanzarCorazonesMulticolor(cantidad = 50) {
  for (let i = 0; i < cantidad; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = corazonesDisponibles[Math.floor(Math.random() * corazonesDisponibles.length)];
    heart.style.position = 'absolute';
    heart.style.fontSize = `${Math.random() * 24 + 20}px`;
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = '100%';
    heart.style.color = randomColor();
    document.getElementById('corazones').appendChild(heart);

    anime({
      targets: heart,
      translateY: [-window.innerHeight - 100],
      translateX: [(Math.random() - 0.5) * 100],
      opacity: [1, 0],
      rotate: Math.random() * 360,
      duration: 3000 + Math.random() * 2000,
      delay: Math.random() * 500,
      easing: 'easeOutSine',
      complete: () => heart.remove()
    });
  }
}

let intervaloCorazones;

document.getElementById('verSorpresa').addEventListener('click', () => {
  document.getElementById('verSorpresa').style.display = 'none';

  // Lanzar corazones en bucle
  intervaloCorazones = setInterval(() => lanzarCorazonesMulticolor(50), 500);

  // Después de 5 segundos, detener y mostrar mensaje
  setTimeout(() => {
    clearInterval(intervaloCorazones);
    mostrarMensajeFinal();
  }, 5000);
});

function mostrarMensajeFinal() {
  anime({
    targets: '#mensajeFinal',
    opacity: [0, 1],
    scale: [0.5, 1],
    duration: 2000,
    easing: 'easeOutElastic(1, .6)'
  });
}
