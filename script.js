// ELEMENTOS
const gift = document.getElementById('gift');
const intro = document.getElementById('intro');
const sorpresa = document.getElementById('sorpresa');
const ramo = document.getElementById('ramo');
const btnView = document.getElementById('btn-view');
const mensajeFinal = document.getElementById('mensaje-final');
const typewriter = document.getElementById('typewriter');
const leftPhotos = document.getElementById('left-photos');
const rightPhotos = document.getElementById('right-photos');
const btnEaster = document.getElementById('btn-easter');
const easterMsg = document.getElementById('easter-msg');
const btnPhotoWords = document.getElementById('btn-photo-words');
const overlay = document.getElementById('overlay-photo');
const overlayImg = document.getElementById('overlay-img');
const overlayClose = document.getElementById('overlay-close');
const overlayBack = document.getElementById('overlay-back');
const audio = document.getElementById('bg-audio');

// EFECTOS
const petalsContainer = document.getElementById('petals');
const heartsContainer = document.getElementById('hearts');
const confettiContainer = document.getElementById('confetti');

function createFallingItem(container, char, className) {
  const span = document.createElement('span');
  span.textContent = char;
  span.className = className;
  span.style.left = Math.random() * 100 + '%';
  span.style.fontSize = 14 + Math.random() * 20 + 'px';
  container.appendChild(span);

  span.animate(
    [
      { transform: `translateY(-50px) rotate(0deg)`, opacity: 1 },
      { transform: `translateY(105vh) rotate(${Math.random()*360}deg)`, opacity: 0.8 }
    ],
    { duration: 4000 + Math.random()*3000, iterations: Infinity }
  );
}

// Iniciar efectos
function startFalling() {
  petalsContainer.innerHTML = '';
  heartsContainer.innerHTML = '';
  confettiContainer.innerHTML = '';

  for(let i=0;i<25;i++) createFallingItem(petalsContainer,'🌸','petal');
  for(let i=0;i<25;i++) createFallingItem(heartsContainer,'❤️','heart');
  for(let i=0;i<35;i++) createFallingItem(confettiContainer,'🎉','confetti');
}

// ABRIR CAJA
gift.addEventListener('click', () => {
  audio.play();
  intro.style.display = 'none';
  sorpresa.classList.remove('hidden');

  setTimeout(() => ramo.classList.remove('hidden'), 900);

  startFalling();
  btnView.style.display = 'block';
  btnView.style.margin = '20px auto 0 auto'; // centrado
});

// BOTÓN “VER LO QUE TENGO PARA TI”
btnView.addEventListener('click', () => {
  sorpresa.style.display = 'none';
  mensajeFinal.classList.remove('hidden');

  // Mostrar botones
  btnEaster.style.display = 'inline-block';
  btnPhotoWords.style.display = 'inline-block';

  // Fotos
  const leftImgs = ['foto1.jpg','foto2.jpg','foto3.jpg'];
  const rightImgs = ['foto4.jpg','foto5.jpg','foto6.jpg'];

  leftPhotos.innerHTML = '';
  rightPhotos.innerHTML = '';

  leftImgs.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    leftPhotos.appendChild(img);
  });

  rightImgs.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    rightPhotos.appendChild(img);
  });

  // ESCRIBIR MENSAJE
  const mensaje = `
Mi amorcito, Mi niña, Mi bb ya por fin es 17 de noviembre. Feliz Cumpleaños mi mor, agradezco infinitamente a Dios porque te ha dado un año más de vida y a eso sumarle que me permite estar para poder celebrarte esta fecha tan especial. Sé que van a seguir habiendo obstáculos, pero sé que tú podrás con todo eso porque tú eres LA MEJOR. Siempre has podido con todo, ahora que ya tienes 19, sé que tendrás más metas por cumplir y sé que cumplirás todo lo que te propongas. Eres una mujer fantástica que siempre ha cuidado de mí, que siempre está pendiente de mí como de tu familia, y siéntete orgullosa de ti misma como yo lo estoy de ti porque sé que no es fácil por todo lo que vives a diario. Me gustaría ser como tú, pero no puedo llegar al nivel de perfección que tú tienes porque eres única. Amo la forma que tienes para tratarme, aunque a veces te molestes o reniegues, te amo demasiado. Tu cumpleaños no es un día normal, es un día para festejar que nació la persona más importante para mí, festejar a una persona que no se ha rendido, que con el pasar de los años sigue creciendo a nivel personal y sigue dándole alegrías a su familia. Tu cumpleaños es muy importante porque naciste y construiste una vida en la cual muchas personas podrían haberse rendido, pero tú no. Siempre estuviste ahí en los momentos que se te necesitaba. Amo lo linda que eres, amo tu forma de hablar, tu forma de vestir, tu forma de ver las cosas y aunque muchas veces peleemos o no estemos de acuerdo, yo te adoro Allison y siempre voy a adorarte. Espero de corazón que te hayan gustado mis regalos y espera porque faltan algunos más por darte temprano, espero que estés siendo muy feliz y que todo lo que pasemos el día de hoy, 17 de Noviembre del 2025, sea mágico. Te deseo lo mejor mi amor, deseo que sigas superándote día a día, sigas demostrando lo fuerte, inteligente y capaz que eres para manejar las situaciones, deseo que cumplas tus objetivos. Deseo que tengas un Feliz Cumpleaños porque te lo mereces, y ningún regalo será suficiente para demostrarte todo lo que vales. Que viva el 19, pero sobre todo que vivas tú muchos años más mi vida. Gracias a ti todo es mejor, gracias a ti tenemos una historia que contar a nuestros hijos, todo lo bueno en el mundo es gracias a ti. TE AMO MUCHO MI REYNA, FELIZ CUMPLEAÑOS.`;

  let i = 0;
  typewriter.innerHTML = '';
  function typeEffect() {
    if(i < mensaje.length) {
      typewriter.innerHTML += mensaje.charAt(i);
      i++;
      setTimeout(typeEffect, 20);
    }
  }
  typeEffect();

  // Asegurar que los botones queden abajo de todo
  btnEaster.parentElement.appendChild(btnEaster);
  btnPhotoWords.parentElement.appendChild(btnPhotoWords);
});

// BOTÓN SI ME AMAS
btnEaster.addEventListener('click', () => {
  easterMsg.classList.remove('hidden');
  easterMsg.textContent = "Sabía que lo harías mi amor, dame un beso muaa 💖";

  // Centramos el mensaje debajo del botón
  easterMsg.style.textAlign = 'center';
  easterMsg.style.marginTop = '10px';
  easterMsg.style.fontSize = '1.2rem';
});

// BOTÓN FOTO + PALABRAS
btnPhotoWords.addEventListener('click', () => {
  overlay.style.display = 'flex';
  overlayImg.src = 'foto1.jpg';

  // Palabras bonitas mejoradas
  const words = [
    'Perfecta','Mi vida','Hermosa','Valiente','My bright light',
    'Mis ojitos bonitos','Fuerte','Mi cielo','Mi princesa','Mi todo',
    '#19','Amor de mi vida'
  ];

  overlay.querySelectorAll('.overlay-word').forEach(e => e.remove());

  words.forEach((word, index) => {
    const span = document.createElement('span');
    span.textContent = word;
    span.className = "overlay-word";

    // Alternar lados
    span.style.left = index % 2 === 0 ? '8%' : '78%';
    span.style.top = (8 + index * 6) + '%';
    span.style.fontSize = (16 + Math.random()*14) + 'px';

    overlay.appendChild(span);
  });
});

// Cerrar overlay
overlayClose.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// Volver al mensaje
overlayBack.addEventListener('click', () => {
  overlay.style.display = 'none';
});
