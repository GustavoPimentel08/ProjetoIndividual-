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
    }, 2500);

    /* ------------------------------------------------------------------------------------- */










    

     var textos = {
        titulo_topicos_relevantes: "Tópicos Relevantes",
        section3: [
          'A população do Brasil atual é de aproximadamente 212,6 milhões de habitantes',
            'Apenas 5% do Brasil possui algum conhecimento sobre outro idioma.',
            'E apenas 1% domina as 4 habilidades de qualquer idioma'
        ]
    }
    var strings = {
        titulo_topicos_relevantes: "Relevant Topics",
        section3: [
            'The country population of Brazil is 212,6 millions of citizens',
            'bla bla bla.',
            'And only 1% master all 4 skills of any language'
        ]
    }




    var idioma = 'ptbr';

    function teste() {
        section3.innerHTML = "";

        
        if (idioma == 'ptbr') {
            titulo_topicos_relevantes.innerHTML = textos.titulo_topicos_relevantes;

            for (var i = 0; i < textos.section3.length; i++) {
                section3.innerHTML += `
                    <div class="box">
                        ${textos.section3[i]}
                    </div>
                `
            }
        } else {
            titulo_topicos_relevantes.innerHTML = strings.titulo_topicos_relevantes;

            for (var i = 0; i < strings.section3.length; i++) {
                section3.innerHTML += `
                    <div class="box">
                        ${strings.section3[i]}
                    </div>
                `
            }
        }
    }