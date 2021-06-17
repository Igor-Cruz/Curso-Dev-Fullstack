// Laços de Repetição | For
// O for deve ter 3 instruções

// for(let contador = 10; contador <= 100; contador++){
//     document.write(`Hello Man ${contador}`)
//     document.write('<br>')
//     }

let opcoes

for(let contador = 1900; contador <= 2021; contador++){
    opcoes += `<option>${contador}</option>`
}

document.querySelector('#ano').innerHTML = opcoes

let lista = ''

let clientes = ['Igor', 'Isa', 'Hebert', 'Karen','Ione', 'Ju','João']

for(contador = 0; contador <= clientes.length -1; contador++){
    lista += `<li>${clientes[contador]} - ${contador}</li>`

}
document.querySelector('#listadeClientes').innerHTML = lista