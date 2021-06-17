// Laço de repetição - For..OF

let Professores = [
    {
        Nome:'Igor',
        Peso: 80,
        Especialidade:'Judô'
    },
    {
        Nome:'Jel',
        Peso: 85,
        Especialidade:'Capoeira'
    }
]

for(let Professor of Professores ){
    console.log(Professor.Especialidade)
}

// for(let contador = 0; contador <= Professores.length; contador++){
//     console.log(Professores[contador].nome)
// }
