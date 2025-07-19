// Animación de entrada del título
anime({
  targets: '.titulo',
  translateY: [-50, 0],
  opacity: [0, 1],
  duration: 1500,
  easing: 'easeOutExpo'
});

// Mostrar carta al hacer clic
document.getElementById('verSorpresa').addEventListener('click', () => {
  anime({
    targets: '.carta',
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 1500,
    easing: 'easeOutExpo'
  });

  lanzarCorazones();
});

// Función para lanzar corazones animados
function lanzarCorazones() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.fontSize = `${Math.random() * 20 + 16}px`;
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = '100%';
    document.getElementById('corazones').appendChild(heart);

    anime({
      targets: heart,
      translateY: [-window.innerHeight - 100],
      opacity: [1, 0],
      duration: 3000 + Math.random() * 2000,
      delay: Math.random() * 1000,
      easing: 'easeOutSine',
      complete: () => heart.remove()
    });
  }
}
