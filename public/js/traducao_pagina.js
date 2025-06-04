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
    ],

    locs: [
        'Sobre mim',
        'Meu nome é Gustavo, tenho 18 anos e, mesmo com a minha pouca idade, já vivi diversas experiências incríveis, tudo isso graças ao conhecimento de novos idiomas! Atualmente, falo três idiomas além do meu idioma nativo. São eles: inglês, no qual tenho nível avançado; espanhol, com nível intermediário; e francês, com nível básico. Tenho um enorme orgulho dessa habilidade, principalmente porque foram os acontecimentos da minha vida que despertaram meu interesse em aprender cada um deles.'
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
    ],

    locs: [
        'About me',
        'My name is Gustavo, Im 18 years old, and even at my young age, I ve already had many incredible experiences, all thanks to learning new languages! I currently speak three languages ​​in addition to my native language. They are: English, in which I have an advanced level; Spanish, at an intermediate level; and French, at a basic level. Im very proud of this skill, especially because it was the events in my life that sparked my interest in learning each of them.'
    ]


}

var idioma = 'ptbr';

function teste() {
    section3.innerHTML = "";
    textos_idiomas.innerHTML = "";
    bbSection.innerHTML = "";
    locs.innerHTML = "";



    if (idioma == 'ptbr') {
        titulo_topicos_relevantes.innerHTML = textos.titulo_topicos_relevantes;

        var section = 0;
        var section_1 = 0;

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


            if (section_1 <= 2) {
                bbSection.innerHTML += `
                       <div class="bb-section4">
                          <p class="tt-sc4">${textos.bbSection[i]}</p>
                      </div>`;


                locs.innerHTML += `
                        <h2 class="titulo-section">${textos.locs[i]}</h2>
                            </div>
                            <div class="loc-1">
                                 <div class="loc90">
                                    <p class="texto_fotos">${textos.locs[i]}</p> 
                             </div>
                             </div>`;
                section_1++
            }
        }

    } else { /* ---------------------- INGLES ----------------------*/
        titulo_topicos_relevantes.innerHTML = strings.titulo_topicos_relevantes;

        var section = 0;
        var section_1 = 0;

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
                locs.innerHTML += `
                        <h2 class="titulo-section">${textos.locs[i]}</h2>
                            </div>
                            <div class="loc-1">
                                 <div class="loc90">
                                    <p class="texto_fotos">${textos.locs[i]}</p> <br>
                                    <p class="texto_fotos">${textos.locs[i]}</p> <br>
                                    <p class="texto_fotos">${textos.locs[i]}</p>
                             </div>
                             </div>`;
                section_1++
            }
        }
    }
}