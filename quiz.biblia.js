var pergunta1 ={
    perguntaTexto: "A quem Paulo chamou de 'meu companheiro de lutas ?",
    alternativas: {
        A: "  A: Apolo",
        B: "  B: Arquipo",
        C: "  C: Áfia",
        D: "  D: Ágape"
},
    gabarito: "B"
}
var pergunta2 ={
    perguntaTexto: "Quais discípulos perguntaram a Jesus se podiam fazer descer fogo do céu?",
    alternativas: {
        A: "  A: João e Tiago",
        B: "  B: Pedro e João",
        C: "  C: Tiago e Pedro",
        D: "  D: Pedro e João"
},
    gabarito: "A"
}
var pergunta3 ={
    perguntaTexto: "Qual era o nome da serpente de bronze que Moisés tinha feito?",
    alternativas: {
        A: "  A: Aserá",
        B: "  B: Leviatã",
        C: "  C: Neustã",
        D: "  D: Jutohân"
},
    gabarito: "C"
}
var pergunta4 ={
    perguntaTexto: "Qual era o nome babilônico de Daniel?",
    alternativas: {
        A: "  A: Aspenaz",
        B: "  B: Abede-Nego",
        C: "  C: Abede-Maí",
        D: "  D: Beltessazar"
},
    gabarito: "D"
}
var pergunta5 ={
    perguntaTexto: "Qual o nome que Jacó deu ao lugar onde sonhou com Deus?",
    alternativas: {
        A: "  A: Be­tuel",
        B: "  B: Luz",
        C: "  C: Lugar de descanso",
        D: "  D: Betel"
},
    gabarito: "D"
}
var pergunta6 ={
    perguntaTexto: "Qual o livro da Bíblia que termina com um ponto de interrogação?",
    alternativas: {
        A: "  A: Jonas",
        B: "  B: Joel",
        C: "  C: Judas",
        D: "  D: Mateus"
},
    gabarito: "A"
}
var pergunta7 ={
    perguntaTexto: "Qual livro se encontra no Novo Testamento?",
    alternativas: {
        A: "  A: Sofonias",
        B: "  B: Filemom",
        C: "  C: Habacuque",
        D: "  D: Gêneses"
},
    gabarito: "B"
}
var pergunta8 ={
    perguntaTexto: "Em quais livros da Bíblia não encontramos a palavra 'Deus'?",
    alternativas: {
        A: "  A: Ester e Cânticos",
        B: "  B: Ageu e Amós",
        C: "  C: Oséias e Eclesiastes",
        D: "  D: Ester e Eclesiastes"
},
    gabarito: "A"
}
var pergunta9 ={
    perguntaTexto: "Qual o menor livro da Bíblia?",
    alternativas: {
        A: "  A: Judas",
        B: "  B: Mateus",
        C: "  C: III João",
        D: "  D: II João"
},
    gabarito: "D"
}
var pergunta10 ={
    perguntaTexto: "Na visão profética de João qual era o número de cavaleiros do Apocalipse?",
    alternativas: {
        A: "  A: 6",
        B: "  B: 7",
        C: "  C: 5",
        D: "  D: 4"
},
    gabarito: "D"
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
        var html = "<P id='resposta'> Você acertou</p>" + "<br>" + "<a href='https://www.respostas.com.br/perguntas-biblicas-dificil/'>Referência</a>"
        divPerguntas.innerHTML = html

    }
    else if (perguntaMarcada != gabarito ){
        var divPerguntas = document.getElementById('telaDePerguntas')
        var html = "<P id='resposta'> Você Errou, a resposta correta era a alternativa: " + gabarito + "</p>" + "<br>" + "<a href='https://www.respostas.com.br/perguntas-biblicas-dificil/'>referência</a>"
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