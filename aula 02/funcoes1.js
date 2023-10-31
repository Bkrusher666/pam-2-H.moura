let num1 = 2
const num2 = 8
var msg = "Olá amigos! Esse é o meu número:"


function soma() {
    let resultado = num1 + num2
    console.log(msg, resultado)
}

soma()

function somaComParametros(valor1, valor2) {
    console.log("O resultado é:", valor1 + valor2)
}

somaComParametros(6, 11)

const multplicacao = (n1, n2) =>{
       console.log("O resultado é:", n1 * n2)
}

console.log(multplicacao(2, 3))