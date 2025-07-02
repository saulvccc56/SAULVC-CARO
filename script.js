// Reproducir la música cuando se hace clic en el botón por primera vez
let hasPlayedMusic = false;
let visits = 0;

/**
 * Muestra la escena romántica con imagen, mensaje, música y efectos visuales.
 */
function showScene() {
  const scene = document.getElementById('scene');
  scene.innerHTML = ''; // Limpiar contenido previo

  visits++;
  console.log(`Esta es la visita número: ${visits}`);

  // Crear imagen
  const img = document.createElement('img');
  img.src = 'mejor_hombre.png';
  img.alt = 'El mejor hombre';
  img.classList.add('animated-img');

  // Crear mensaje romántico
  const message = document.createElement('p');
  message.textContent = "❤️";

  // Agregar imagen y mensaje al contenedor
  scene.appendChild(img);
  scene.appendChild(message);

  // Reproducir música de fondo
  playMusic();

  // Crear una línea del tiempo romántica (falsa línea narrativa)
  const timeline = document.createElement('div');
  timeline.classList.add('timeline');
  timeline.innerHTML = `
    <ul>
      <li><strong>2024:</strong> Nos conocimos.</li>
      <li><strong>2025:</strong> Saul se consiguio otra.</li>

    </ul>
  `;
  scene.appendChild(timeline);

  // Agregar fondo animado después de cargar la escena
  setTimeout(() => {
    document.body.classList.add('scene-active');
  }, 1000);

  // Mostrar mensaje secreto si visitas muchas veces
  if (visits > 5) {
    const secret = document.createElement('p');
    secret.style.fontSize = "1.2em";
    secret.style.color = "#b13244";
    secret.textContent = "¡Wow! Te encanta esta historia, ¿verdad?";
    scene.appendChild(secret);
  }

  // Simulación de estrellas que parpadean
  generateStars(15);
}

/**
 * Intenta reproducir la música con control de errores modernos del navegador.
 */
function playMusic() {
  const audio = document.getElementById('bg-music');

  if (!hasPlayedMusic) {
    audio.volume = 0.6;
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log("🎵 Música de fondo reproducida con éxito.");
          hasPlayedMusic = true;
        })
        .catch(error => {
          console.warn("⚠️ No se pudo reproducir automáticamente. El usuario debe interactuar primero.");
        });
    }
  } else {
    audio.currentTime = 0;
    audio.play();
  }
}

/**
 * Genera estrellas brillantes para darle un efecto de noche romántica.
 * @param {number} count Número de estrellas a generar
 */
function generateStars(count) {
  const container = document.body;
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.animationDuration = (2 + Math.random() * 3) + 's';
    container.appendChild(star);

    // Remover después de la animación
    setTimeout(() => {
      container.removeChild(star);
    }, 4000);
  }
}

/**
 * Mensaje de bienvenida al abrir la consola
 */
console.log("%cBienvenido a la historia de amor de Carolina y Saul ❤️", "color: pink; font-size: 16px;");

/**
 * Solo para desarrolladores curiosos
 */
console.log("¡Psst! Esta página está hecha con amor, estilo The Notebook.");
/**
 * Muestra/oculta la imagen basada en hechos reales
 */
function toggleRealPhoto() {
  const realPhoto = document.getElementById('real-photo');
  realPhoto.classList.toggle('hidden');
  realPhoto.classList.toggle('visible');
}
