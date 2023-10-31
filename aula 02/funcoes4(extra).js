let num1 = 2
const num2 = 8
var msg = "Olá amigos! Esse é o meu número:"


function subtrair() {
    let resultado = num1 - num2
    console.log(msg, resultado)
}

subtrair()

function subtrairComParametros(valor1, valor2) {
    console.log("O resultado é:", valor1 - valor2)
}

subtrairComParametros(6, 11)
subtrairComParametros(6282, 18171)
subtrairComParametros(6, 11)