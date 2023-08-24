function validaForm() {
    const numeroPerdas = document.getElementById("numero-perdas");
    const numeroGanhos = document.getElementById("numero-ganhos");
    
    if (numeroPerdas >= numeroGanhos) {
        alert("O valor de ganhos deve ser maior que o de perdas!");
        return false;
    } else {
        alert("O valor de ganhos deve ser maior que o de perdas!");
        return true;
    }
}