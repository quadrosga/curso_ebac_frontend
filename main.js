function validaForm() {
    const numeroPerdas = document.getElementById("numero-perdas").value;
    const numeroGanhos = document.getElementById("numero-ganhos").value;
        
    if (numeroPerdas >= numeroGanhos) {
        alert("O valor de ganhos deve ser maior que o de perdas!");
        return false;
    } else {
        alert("Valores recebidos com sucesso!");
        return true;
    }
}
