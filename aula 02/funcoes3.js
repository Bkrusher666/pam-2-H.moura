const somaMelhorada = (n1, n2) => {
    let result = ''
    
    if (typeof n1 == 'number' && typeof n2 == 'number') {
        result = n1 + n2
        return "Resultado", result
    }
    return "Valores de entrada inválidos"
}

console.log(somaMelhorada(6, '5'))
console.log(somaMelhorada(6, 5))