var cartaVejeta = {
    nome: "Vejeta",
    imagem: "img/vejeta.jpg",
    atributos: {
        ataque: 92,
        defesa: 60,
        magia: 79
    }
}

var cartaGoku = {
    nome: "Goku",
  imagem: "https://i.pinimg.com/474x/6a/27/ff/6a27ffd4653d5bc4b873fdeacd6e2ad9.jpg",
    atributos: {
        ataque: 98,
        defesa: 70,
        magia: 85
    }
}

var cartaFreeza = {
    nome: "Freeza",
  imagem: "img/freeza.jpg",
    atributos: {
        ataque: 97,
        defesa: 62,
        magia: 90
    }
}

var cartaBulma = {
    nome: "Bulma",
  imagem: "img/bulma.jpg",
    atributos: {
        ataque: 50,
        defesa: 40,
        magia: 20
    }
}

var cartaTrunks = {
    nome: "Trunks",
  imagem: "img/trunks.jpg",
    atributos: {
        ataque: 90,
        defesa: 88,
        magia: 70
    }
}

var cartaGohan = {
    nome: "Gohan",
  imagem: "img/gohan.jpg",
    atributos: {
        ataque: 95,
        defesa: 90,
        magia: 88
    }
}

var cartaPiccolo = {
    nome: "Piccolo",
  imagem: "img/piccolo.jpg",
    atributos: {
        ataque: 91,
        defesa: 79,
        magia: 97
    }
}

var cartaKuririn = {
    nome: "Kuririn",
  imagem: "img/kuririn.jpg",
    atributos: {
        ataque: 82,
        defesa: 71,
        magia: 65
    }
}

var cartaTenshinhan = {
    nome: "Tenshinhan",
  imagem: "img/tenshinhan.jpg",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 50
    }
}

var cartaYamcha = {
    nome: "Yamcha",
  imagem: "img/yamcha.jpg",
    atributos: {
        ataque: 75,
        defesa: 55,
        magia: 40
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaVejeta, cartaGoku, cartaFreeza, cartaBulma, cartaTrunks, cartaGohan, cartaPiccolo, cartaKuririn, cartaTenshinhan, cartaYamcha]

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 10)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 10)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 10)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    exibeCartaJogador()
}


function exibeCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador")
   var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  var opcoesTexto = ""
  
  for (var atributo in cartaJogador.atributos){
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo +"'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
  }
    
    var html = "<div id='opcoes' class='carta-status'>"

  divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto
}




function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() { 
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class ="resultado-final">Você venceu!</p>'
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class ="resultado-final">Você Perdeu!</p>'
    } else {
        htmlResultado = '<p class ="resultado-final">Empate!</p>'
    }
    divResultado.innerHTML = htmlResultado
    exibeCartaMaquina()
}
function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
   var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  var opcoesTexto = ""
  
  for (var atributo in cartaMaquina.atributos){
      opcoesTexto += "<p type='text' name='atributo' value='" + atributo +"'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
  }
    
    var html = "<div id='opcoes' class='carta-status'>"

  divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto
  
}