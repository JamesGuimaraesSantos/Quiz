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
    perguntaTexto: "Quais o menor e o maior país do mundo?",
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

var perguntas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5]

function comecarAJogar() {
    var numeroPergunta = parseInt(Math.random() * perguntas.length)
    var perguntaNaTela = perguntas[numeroPergunta]
    perguntas.splice(numeroPergunta, 1)
    document.getElementById('btnComecar').disabled = true
    exibirPerguntasAlternativas(perguntaNaTela)
} 

function exibirPerguntasAlternativas(perguntaNaTela) {
    var perguntaNoHtml = document.getElementById('perguntaTexto')
    perguntaNoHtml.innerHTML = perguntaNaTela.perguntaTexto

    var divAlternativas = document.getElementById('exibeALternativas') 
    var opcoesTexto = ""
    for (var alternativa in perguntaNaTela.alternativas) {
        opcoesTexto += "<input type='radio' class='opcoesAlternativas' name='atributo' value='"
        + alternativa + "'>"  + perguntaNaTela.alternativas[alternativa] + "<br>"
    }
    var html = "<div id='opcoes'>"
    divAlternativas.innerHTML = html + opcoesTexto + '</div>'
     
} 

function proximaPergunta(){
    var divPerguntas = document.getElementById('teste')
    var perguntasMarcadas = obtemAtributoSelecionado()
    divPerguntas.innerHTML = `<h1 id="perguntaTexto"></h1> <div id="exibeALternativas"></div>`
  
    if (perguntas.length == 0){
        divPerguntas.innerHTML = `<h1 id="perguntaTexto"></h1> <div id="exibeALternativas"> FIM DE JOGO </div>`
    }
    else {
        comecarAJogar()
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






