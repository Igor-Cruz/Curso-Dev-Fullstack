//Condicionais

let idade = prompt('Digite sua idade')

if (idade >= 18){
    document.write('Você é maior de idade')
} else if(idade >=15 || idade === 17){
    document.write('Você é menor de idade')
}else{
    document.write('Tem que ser mais velho')
}