// string

let nome = 'Igor'
let sobrenome = 'Cruz'

console.log( nome + ' ' + sobrenome) //concatenar

console.log(`${nome} ${sobrenome}`) //literal


//numbers
// numbers não tem aspas

let idade = 26
console.log(idade)

//number float
let porcentagem = 10.2
console.log(porcentagem + '%')

//boolean ( true or false)

let maiorDeIdade = true
console.log(maiorDeIdade)

let menorDeIdade = false
console.log(menorDeIdade)

//array

let habilidade = ['Javascript', 'PHP', 'Python']
console.log(habilidade)
console.log(habilidade.length)
console.log(habilidade[1])

//object

let pessoa = {
    herói:'Van',
    Codenome: 'H',
    IdadeEvolutiva:26,
    Espécie:['Caçador', 'Lobisomen']
}

console.log(pessoa.Espécie[1])

// undefined
let endereço
console.log(enredeço) // Foi declarada, mas não foi definidada

// null
let cidade = null
console.log(cidade)
