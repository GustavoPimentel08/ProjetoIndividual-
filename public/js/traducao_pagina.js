/* DICAS E APRENDIZADOS  */
/* sempre verificar o id  */
/* verificar sempre a variavel que puxa o idioma/ exemplo: texto ou strings  */
/* ATENÇÃO AOS CÓDIGOS --- ESCREVA CORRETO */


/* portugues */

var textos = {

    titulo_topicos_relevantes: "Tópicos Relevantes",

    section3: [
        'A população do Brasil atual é de aproximadamente 212,6 milhões de habitantes',
        'Apenas 5% do Brasil possui algum conhecimento sobre outro idioma.',
        'E apenas 1% domina as 4 habilidades de qualquer idioma'
    ],

    textos_idiomas: [
        'As pessoas consideradas fluentes são as que dominam as 5 habilidades dos idiomas',
        '• Fala - Speaking',
        '• Audição - listening',
        '• Leitura - Reading',
        '• Escrita - Writing',
        '• Interpretação - Interpretation'

    ],

    bbSection: [
        'E acredite ter conhecimento de apenas 1 idioma além da sua lingua natal',
        'Já te torna uma pessoa com uma habilidade especial'
    ]
}

/* ingles */
var strings = {
    titulo_topicos_relevantes: "Relevant Topics",
    section3: [
        'The country population of Brazil is 212,6 millions of citizens',
        'Only 5% of the Brazil has some knowledge of another language.',
        'And only 1% master all 4 skills of any language'
    ],

    /* section4 */
    textos_idiomas: [
        'People considered fluent are those who master the 5 language skills',
        '• Speaking',
        '• listening',
        '• Reading',
        '• Writing',
        '• Interpretation'

    ],

    bbSection: [
        'And believe that you only know 1 language other than your native language.',
        'It already makes you a person with a special ability.'
    ]


}

var idioma = 'ptbr';

function teste() {
    section3.innerHTML = "";
    textos_idiomas.innerHTML = "";
    bbSection.innerHTML = "";


    if (idioma == 'ptbr') {
        titulo_topicos_relevantes.innerHTML = textos.titulo_topicos_relevantes;

        var section = 0;

        for (var i = 0; i < textos.textos_idiomas.length; i++) {


            if (section < 3) {
                section3.innerHTML += `
                    <div class="box">
                        ${textos.section3[i]}
                    </div>
                `;
                section++;

            }

            textos_idiomas.innerHTML += `
                              <div class="textos_idiomas">
                                  <p>${textos.textos_idiomas[i]}</p>
                              </div>
                           `;


            if (section <= 2) {
                bbSection.innerHTML += `
                       <div class="bb-section4">
                          <p class="tt-sc4">${textos.bbSection[i]}</p>
                      </div>
        `;
            }
        }

    } else { /* ---------------------- INGLES ----------------------*/
        titulo_topicos_relevantes.innerHTML = strings.titulo_topicos_relevantes;

        var section = 0;

        for (var i = 0; i < strings.textos_idiomas.length; i++) {
            if (section < 3) {
                section3.innerHTML += `
                    <div class="box">
                        ${strings.section3[i]}
                    </div>
                `;
                section++;
            }

            textos_idiomas.innerHTML += `
                              <div class="textos_idiomas">
                                  <p>${strings.textos_idiomas[i]}</p>
                              </div>
                           `;
            if (section <= 2) {
                bbSection.innerHTML += `
                       <div class="bb-section4">
                          <p class="tt-sc4">${strings.bbSection[i]}</p>
                      </div>
        `;
            }
        }
    }
}