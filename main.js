$(document).ready(function() {
    $("form").on("submit", function(e) {
        e.preventDefault();
        const novaTarefa = $("#nova-tarefa").val();
        const novoItem = $("<li></li>").text(novaTarefa);
        $("ul").append(novoItem); 
        $("#nova-tarefa").val("");
    })

    $("ul").on("click", "li", function() {
        $(this).toggleClass("clicado");
    });
})