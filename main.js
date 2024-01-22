// Classe de abstração
function Bebida(nome, quantidade, temperatura) {
    this.nome = nome;
    this.quantidade = quantidade;
    this.temperatura = temperatura;
}

// Classes herdeiras
function Refri(nome, quantidade, temperatura) {
    Bebida.call(this, nome, quantidade, temperatura);
}

function Drink(nome, quantidade, temperatura) {
    Bebida.call(this, nome, quantidade, temperatura);
}

function Alc(nome, quantidade, temperatura) {
    Bebida.call(this, nome, quantidade, temperatura);
}

// Instâncias de objetos
const refri1 = new Refri("Coca", 2, "gelada");
const refri2 = new Refri("Fanta", 1, "gelada");
const drink = new Drink("Negroni", 1, "gelada");
const alc = new Alc("Vinho", 3, "ambiente");

console.log(refri1);
console.log(refri2);
console.log(drink);
console.log(alc);