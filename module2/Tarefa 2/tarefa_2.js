function question1(){
    //1. Resolva as operações:
    console.log("10+15")
    console.log(10+15)
    
    console.log(" \"10\"+2")
    console.log(10+2)
    
    console.log("\"10\"*2")
    console.log(10*2)
    
    console.log("\"10\"/3")
    console.log(10/3)
    
    console.log("\"10\"%3")
    console.log(10%3)
    
    console.log("10+true")
    console.log(10+true)
    
    console.log("10==\"10\"")
    console.log(10==10)
    
    console.log("10 === \"10\"")
    console.log(10 === 10)
    
    console.log("10<11")
    console.log(10<11)
    
    console.log("10>12")
    console.log(10>12)
    
    console.log("10<=10.1")
    console.log(10<=10.1)
    
    console.log("10>9.99")
    console.log(10>9.99)
    
    console.log("10 != \"dez\"")
    console.log(10 != "dez")
    
    console.log("10+true")
    console.log(10+true)
    
    console.log("\"dez\" + true")
    console.log("dez" + true)
    
    console.log("10+false")
    console.log(10+false)
    
    console.log("10*false")
    console.log(10*false)
    
    console.log("true + true")
    console.log(true + true)
    
    console.log("10++")
    // console.log(10++)
    
    console.log("10--")
    // console.log(10--)
    
    console.log("1&1")
    console.log(1&1)
    
    console.log("1&0")
    console.log(1&0)
    
    console.log("0&0")
    console.log(0&0)
    
    console.log("1&0")
    console.log(1&0)
    
    console.log("0/1")
    console.log(0/1)
    
    console.log("5+5==10")
    console.log(5+5==10)
    
    console.log("\"5\"+\"5\"==10")
    console.log("5"+"5"==10)
    
    console.log("\"5\"*2>9")
    console.log("5"*2>9)
    
    console.log("(10+10)*2")
    console.log((10+10)*2)
    
    console.log("10+10*2")
    console.log(10+10*2)
}

question1()

// 2. Responda as perguntas de acordo com as variáveis.
var branco = "preto"
var preto = "cinza"
var cinza = "branco"
var carro = "preto"
var valor = 30000
var prestacao = 750

a1(branco, branco)
a2(branco, cinza)
a3(carro, branco)
a4(carro)
a5(valor)
a6(branco, preto, cinza)

function a1(branco, branco){
    // a) branco == “branco”
    var element1 = document.getElementById("a1")
    element1.innerHTML = branco == branco
}

function a2(branco, cinza){
    // a) branco == “cinza”
    var element2 = document.getElementById("a2")
    element2.innerHTML = branco == cinza
}

function a3(carro, branco){
    // c) carro === branco
    var element3 = document.getElementById("a3")
    element3.innerHTML = carro == branco
}

function a4(carro){
    // d) var cavalo = carro == “preto” ? “cinza” : “marron”;
    var element4 = document.getElementById("a4")
    element4.innerHTML = carro == "preto" ? "cinza" : "marron"
}

function a5(valor){
    // e) Quantas prestações são necessárias para pagar o valor do carro com uma entrada
    // de 3.000? Demonstre a operação.
    var element5 = document.getElementById("a5")

    var restantePagamento = valor - 3000
    element5.innerHTML = "retirando a entrada do valor: " + restantePagamento + ", Levanto em conta que cada parcela será igual a entrada, ficamos com o total de: " + restantePagamento/3000 + " de parcelas para pagar"
}

function a6(branco, preto, cinza){
    // f) Somando as variáveis de cores é formada uma string de quantos caracteres?
    var element6 = document.getElementById("a6")
    var cores = branco + preto + cinza
    element6.innerHTML = cores.length
}
