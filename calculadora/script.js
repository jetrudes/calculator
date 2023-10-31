alert ("vamos somar 2 números")
let numberOne = prompt("digite o primeiro numero")
let numberTwo = prompt("Digite o segundo numero")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const som = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert('Soma:' + som)
alert('Subtração:' + sub)
alert('Multiplicação:' + mult)
alert('Divisão:' + div)
alert('Resto da Divisão:' + restDiv)

let Number = 10
if (Number % 2 === 0) {
    alert("Número par")
}
else {
    alert("Número ímpar")
}




