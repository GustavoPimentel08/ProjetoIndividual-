
/* DICAS E APRENDIZADOS  */
/* sempre verificar o id  */
/* verificar sempre a variavel que puxa o idioma/ exemplo: texto ou strings  */
/* ATENÇÃO AOS CÓDIGOS --- ESCREVA CORRETO */


const idiomas = ["Inglês", "Espanhol", "Francês"];
let index = 0;
const box = document.getElementById("idiomaBox");

function mostrarPalavraComAnimacao(palavra) {
  box.innerHTML = ""; // limpa a caixa

  for (let i = 0; i < palavra.length; i++) { // contador para percorre a lista das palavras 
    const span = document.createElement("span");
    span.textContent = palavra[i];
    span.classList.add("letra");
    span.style.animationDelay = `${i * 0.05}s`; // aplica o efeito cascata
    box.appendChild(span);
  }
}

function esconderPalavraAtual(callback) {
  const letras = document.querySelectorAll(".letra");

  for (let i = 0; i < letras.length; i++) { // contador para saida das letras
    letras[i].classList.add("saindo");
    letras[i].style.animationDelay = `${i * 0.03}s`;
  }

  setTimeout(callback, letras.length * 30 + 400); // espera terminar animação
}


mostrarPalavraComAnimacao(idiomas[index]); // Inicializa com a primeira palavra

setInterval(() => { // para fazer uma repetição
  esconderPalavraAtual(() => {
    index = (index + 1) % idiomas.length;
    mostrarPalavraComAnimacao(idiomas[index]);
  });
}, 2500); // tempo 





/* -------------------------------------------------- carousel ----------------------------*/

const carousel = document.getElementById('carousel');
let isDragging = false;
let startX, scrollLeft;

carousel.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
  carousel.style.cursor = 'grabbing';
});

carousel.addEventListener('mouseleave', () => {
  isDragging = false;
  carousel.style.cursor = 'grab';
});

carousel.addEventListener('mouseup', () => {
  isDragging = false;
  carousel.style.cursor = 'grab';
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 1.5;
  carousel.scrollLeft = scrollLeft - walk;
});

carousel.addEventListener('scroll', updateFocus);

function updateFocus() {
  const imgs = carousel.querySelectorAll('img');
  const center = carousel.scrollLeft + carousel.offsetWidth / 2;

  imgs.forEach((img) => {
    const imgCenter = img.offsetLeft + img.offsetWidth / 2;
    const distance = Math.abs(center - imgCenter);
    const scale = Math.max(0.7, 1 - distance / 600);
    const opacity = Math.max(0.3, 1 - distance / 600);

    img.style.transform = `scale(${scale})`;
    img.style.opacity = opacity;

    img.classList.toggle('focus', distance < img.offsetWidth / 2);
  });
}

window.addEventListener('load', updateFocus);

/* ----------------------- dots ----------------------*/

const dotsContainer = document.getElementById('dots');
const images = carousel.querySelectorAll('img');

// Cria as bolinhas com base no número de imagens
images.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll('.dot');

// Atualiza a bolinha ativa dentro da função updateFocus()
function updateFocus() {
  const center = carousel.scrollLeft + carousel.offsetWidth / 2;
  let activeIndex = 0;

  images.forEach((img, i) => {
    const imgCenter = img.offsetLeft + img.offsetWidth / 2;
    const distance = Math.abs(center - imgCenter);
    const scale = Math.max(0.7, 1 - distance / 600);
    const opacity = Math.max(0.3, 1 - distance / 600);

    img.style.transform = `scale(${scale})`;
    img.style.opacity = opacity;

    if (distance < img.offsetWidth / 2) {
      activeIndex = i;
    }
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === activeIndex);
  });
}


const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const scrollAmount = 400; // quanto ele rola por clique

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});
