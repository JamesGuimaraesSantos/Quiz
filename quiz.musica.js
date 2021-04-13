/* -- Perguntas sobre musicaa*/

var pergunta1 ={
    perguntaTexto: "Qual estrela dos anos 80 é reconhecida pelo Guinness World Records como a artista feminina mais vendida de todos os tempos?",
    alternativas: {
        A: "  A:  Madona",
        B: "  B: Cindy Crawford",
        C: "  C: Claudia Schiffer",
        D: "  D: Elle Macpherson"
},
    gabarito: "A"
}
var pergunta2 ={
    perguntaTexto: "David Bowie apareceu em que filme cult em 1986?",
    alternativas: {
        A: "  A: Maze runner 3",
        B: "  B: Jogo bruto",
        C: "  C: Labirinto",
        D: "  D: Nausicaä do Vale do Vento"
},
    gabarito: "C"
}
var pergunta3 ={
    perguntaTexto: "Em que ano dos anos 80 Madness se separou, eventualmente se transformando em The Madness?",
    alternativas: {
        A: "  A: 1985",
        B: "  B: 1986",
        C: "  C: 1987",
        D: "  D: 1988"
},
    gabarito: "D"
}
var pergunta4 ={
    perguntaTexto: "A partir de 1981, o Duran Duran lançou quantos álbuns até agora?(2020)",
    alternativas: {
        A: "  A: 13",
        B: "  B: 15",
        C: "  C: 14",
        D: "  D: 17"
},
    gabarito: ""
}
var pergunta5 ={
    perguntaTexto: "Qual banda temática de frutas conseguiu o primeiro lugar na Billboard em 1 com 'Venus'?",
    alternativas: {
        A: "  A: Bananarama",
        B: "  B: Marujujuca",
        C: "  C: limoon",
        D: "  D: Cajuju"
},
    gabarito: "A"
}
var pergunta6 ={
    perguntaTexto: "Quem interrompeu a performance de Michael Jackson em Earth Song no Brit Awards de 1996 ao se apresentar no palco?",
    alternativas: {
        A: "  A: Lou Bega",
        B: "  B: Howie Dorough",
        C: "  C: Jarvis Cocker",
        D: "  D: Freddie Prinze Jr"
},
    gabarito: "C"
}
var pergunta7 ={
    perguntaTexto: "Qual é o único país a ganhar 3 concursos Eurovision Song consecutivos (1992, 1993 e 1994)?",
    alternativas: {
        A: "  A: Brasil",
        B: "  B: Irlanda",
        C: "  C: EUA",
        D: "  D: Alemanha"
},
    gabarito: "B"
}
var pergunta8 ={
    perguntaTexto: "Em que ano Fergie, famoso pelo Black Eyed Peas, fez seu primeiro álbum solo The Dutchess?",
    alternativas: {
        A: "  A: 2004",
        B: "  B: 2006",
        C: "  C: 2008",
        D: "  D: 2010"
},
    gabarito: "B"
}
var pergunta9 ={
    perguntaTexto: "Qual duo lançou o álbum de 2003 Speakerboxxxx / The Love Below?",
    alternativas: {
        A: "  A: OutKast",
        B: "  B: Linkin Park",
        C: "  C: Papa Roach",
        D: "  D: Charlie Brown Jr"
},
    gabarito: "A"
}
var pergunta10 ={
    perguntaTexto: "Todo mundo conhece 'Kiss from a Rose', mas qual foi o segundo maior hit de Seal dos anos 90?",
    alternativas: {
        A: "  A: Amantes",
        B: "  B: Assassino",
        C: "  C: Psicopatia",
        D: "  D: Liberdade para voar"
},
    gabarito: "B"
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