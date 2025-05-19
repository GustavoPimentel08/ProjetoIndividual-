const idiomas = ["Inglês", "Espanhol", "Francês"];
    let index = 0;
    const box = document.getElementById("idiomaBox");

    function mostrarPalavraComAnimacao(palavra) {
      box.innerHTML = ""; // limpa a caixa
      [...palavra].forEach((letra, i) => {
        const span = document.createElement("span");
        span.textContent = letra;
        span.classList.add("letra");
        span.style.animationDelay = `${i * 0.05}s`; // efeito cascata
        box.appendChild(span);
      });
    }

    function esconderPalavraAtual(callback) {
      const letras = document.querySelectorAll(".letra");
      letras.forEach((span, i) => {
        span.classList.add("saindo");
        span.style.animationDelay = `${i * 0.03}s`;
      });

      setTimeout(callback, letras.length * 30 + 400); // espera terminar animação
    }

    // Inicializa com a primeira palavra
    mostrarPalavraComAnimacao(idiomas[index]);

    setInterval(() => {
      esconderPalavraAtual(() => {
        index = (index + 1) % idiomas.length;
        mostrarPalavraComAnimacao(idiomas[index]);
      });
    }, 4000);