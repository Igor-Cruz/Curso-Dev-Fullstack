//Operadores Lógicos
let inputNota1 = prompt('Nota 1:')
let inputNota2 = prompt('Nota 2: ')

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)

let mediaAprovado = 7
let excelente = 10
let recuperacao = 5

let media = (nota1 + nota2) / 2

if (media >= mediaAprovado || media === excelente){
    document.write('Aprovado')
}else if (media >= recuperacao){
    document.write('Recuperação')
}else{
    document.write('Lhe esperamos ano que vem')
}
