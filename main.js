const form = document.getElementById("form-agenda");
const nomes = [];
const telefones = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const inputNome = document.getElementById("nome");
    const inputTel = document.getElementById("tel");
    const corpoTabela = document.querySelector("tbody");

    if (nomes.includes(inputNome.value) || telefones.includes(inputTel.value)) {
        alert("Nome e/ou telefone já existem na agenda");
    } else {
        nomes.push(inputNome.value);
        telefones.push(inputTel.value);

        var linha = "<tr>";
        linha += "<td>" + inputNome.value + "</td>";
        linha += "<td>" + inputTel.value + "</td>";
        linha += "</tr>";

        corpoTabela.innerHTML += linha;

        inputNome.value = "";
        inputTel.value = "";
    }
});