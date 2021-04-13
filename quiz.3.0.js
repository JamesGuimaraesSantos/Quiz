/* -- Perguntas sobre conhecimentos gerais*/
var pergunta1 = {
    perguntaTexto: "De onde é a invenção do chuveiro elétrico?",
    alternativas: {
        A: "  A: França",
        B: "  B: Inglaterra",
        C: "  C: Brasil",
        D: "  D: Itália"
},
        gabarito: "C"
}
var pergunta2 ={
    perguntaTexto: "Qual o nome do presidente do Brasil que ficou conhecido como Jango?",
    alternativas: {
        A: "  A: Jânio Quadros",
        B: "  B: Jacinto Anjos",
        C: "  C: Getúlio Vargas",
        D: "  D: João Goulart"
 },
     gabarito: "D"
}
var pergunta3 ={
    perguntaTexto: "Qual o menor e o maior país do mundo?",
    alternativas: {
        A: "  A: Vaticano e Rússia",
        B: "  B: Nauru e China",
        C: "  C: Mônaco e Canadá",
        D: "  D: Malta e Estados Unidos"
},
    gabarito: "A"
}
var pergunta4 ={
    perguntaTexto: "De quem é a famosa frase “Penso, logo existo”?",
    alternativas: {
        A: "  A: Platão ",
        B: "  B: Galileu Galilei",
        C: "  C: Descartes",
        D: "  D: Sócrates"        
},
    gabarito: "C"
}
var pergunta5 ={
    perguntaTexto: "Qual o grupo em que todas as palavras foram escritas corretamente?",
    alternativas: {
        A: "  A: Asterístico, beneficiente, meteorologia, entertido ",
        B: "  B: Asterisco, beneficente, meteorologia, entretido",
        C: "  C: Asterisco, beneficente, metereologia, entretido",
        D: "  D: Asterístico, beneficiente, metereologia, entretido"
},
    gabarito: "B"
}
var pergunta6 ={
    perguntaTexto: "Quais as duas datas que são comemoradas em novembro?",
    alternativas: {
        A: "  A: Independência do Brasil e Dia da Bandeira",
        B: "  B: Dia do Médico e Dia de São Lucas",
        C: "  C: Dia de Finados e Dia Nacional do Livro",
        D: "  D: Proclamação da República e Dia Nacional da Consciência Negra"
},
    gabarito: "A"
}
var pergunta7 ={
    perguntaTexto: "Quem pintou 'Guernica'?",
    alternativas: {
        A: "  A: Paul Cézanne",
        B: "  B: Pablo Picasso",
        C: "  C: Diego Rivera",
        D: "  D: Tarsila do Amaral"
},
    gabarito: "B"
}

var pergunta8 ={
    perguntaTexto: "Qual a tradução da frase “Fabiano cogió su saco antes de salir”?",
    alternativas: {
        A: "  A: Fabiano fechou seu paletó antes de sair",
        B: "  B: Fabiano fechou o saco antes de sair",
        C: "  C: Fabiano pegou seu paletó antes de sair",
        D: "  D: Fabiano rasgou seu paletó antes de cair"
},
    gabarito: "C"
}
var pergunta9 ={
    perguntaTexto: "Qual personagem folclórico costuma ser agradado pelos caçadores com a oferta de fumo?",
    alternativas: {
        A: "  A: Caipora",
        B: "  B: Saci",
        C: "  C: Lobisomem",
        D: "  D: Boitatá"
},
    gabarito: "A"
}
var pergunta10 ={
    perguntaTexto: "Em qual local da Ásia o português é língua oficial?",
    alternativas: {
        A: "  A: Índia",
        B: "  B: Moçambique",
        C: "  C: Macau",
        D: "  D: Portugal"
},
    gabarito: "C"
}
var perguntax ={
    perguntaTexto: "",
    alternativas: {
        A: "  A:  ",
        B: "  B: ",
        C: "  C: ",
        D: "  D: "
},
    gabarito: ""
}
var perguntas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7, pergunta8, pergunta9, pergunta10]
gabarito = comecarAJogar()

function comecarAJogar() {
    var numeroPergunta = parseInt(Math.random() * perguntas.length)
    var perguntaNaTela = perguntas[numeroPergunta]
    perguntas.splice(numeroPergunta, 1)
    document.getElementById('btnProxima').disabled = true
    exibirPerguntasAlternativas(perguntaNaTela)
    return perguntaNaTela.gabarito

} 

function exibirPerguntasAlternativas(perguntaNaTela) {
    var perguntaNoHtml = document.getElementById('perguntaTexto')
    perguntaNoHtml.innerHTML = perguntaNaTela.perguntaTexto

    var divAlternativas = document.getElementById('exibeALternativas') 
    var opcoesTexto = ""
    for (var alternativa in perguntaNaTela.alternativas) {
        opcoesTexto += "<input type='radio' class='opcoesAlternativas' name='atributo' value='"
        + alternativa + "'>" + perguntaNaTela.alternativas[alternativa] +  "<br>"
    }
    var html = "<div id='opcoes'>"
    divAlternativas.innerHTML = html + opcoesTexto + '</div>'
     
} 

function verificarResposta(){
    var perguntaMarcada = obtemAtributoSelecionado()
    document.getElementById('btnProxima').disabled = false
    document.getElementById('btnAcertei?').disabled = true
    if (perguntaMarcada == gabarito){
        var divPerguntas = document.getElementById('telaDePerguntas')
        var html = "<P id='resposta'> Você acertou</p>" + "<br>" + "<a href='https://www.todamateria.com.br/perguntas-e-respostas-de-conhecimentos-gerais/'>Referência</a>"
        divPerguntas.innerHTML = html

    }
    else if (perguntaMarcada != gabarito ){
        var divPerguntas = document.getElementById('telaDePerguntas')
        var html = "<P id='resposta'> Você Errou, a resposta correta era a alternativa: " + gabarito + "</p>" + "<br>" + "<a href='https://www.todamateria.com.br/perguntas-e-respostas-de-conhecimentos-gerais/'>referência</a>"
        divPerguntas.innerHTML = html
    }
    else {
        proximaPergunta()
    }
    
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}


function proximaPergunta(){
    document.getElementById('btnAcertei?').disabled = false
    var divPerguntas = document.getElementById('telaDePerguntas')
    divPerguntas.innerHTML = `<h1 id="perguntaTexto"></h1> <div id="exibeALternativas"></div>`
    if (perguntas.length != 0) {
    gabarito = comecarAJogar()
    }
    else {
        alert("fim de jogo")
        document.getElementById('btnProxima').disabled = true
        document.getElementById('btnAcertei?').disabled = true

    }
}

