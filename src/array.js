// Criando array de objetos, primero método
const alunosArray = [
    { nome: 'Sandra', nota: 7 },
    { nome: 'Anna', nota: 8},
    { nome: 'Carlos', nota: 3},
    { nome: 'Aline', nota: 4},
    { nome: 'João', nota: 9},
]

// Criando array de objetos, através de função construtora
function Aluno(nome, nota) {
    this.nome = nome;
    this.nota = nota;
}

const aluno1 = new Aluno('Sandra', 7);
const aluno2 = new Aluno( 'Anna', 8);
const aluno3 = new Aluno( 'Carlos', 3);
const aluno4 = new Aluno( 'Aline', 4);
const aluno5 = new Aluno( 'João', 9);

const alunosArray2 = [aluno1, aluno2, aluno3, aluno4, aluno5];

console.log(alunosArray);
console.log(alunosArray2);

// Criando funções para filtrar as notas
    // método forEach

const aprovados = [];

alunosArray.forEach(aluno => {
    if (aluno.nota >= 6) {
        aprovados.push(aluno.nome)
    }
})

console.log(aprovados);

    // método filter

const aprovados2 = alunosArray2.filter(aluno => aluno.nota >= 6);

console.log(aprovados2);