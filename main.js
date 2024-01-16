$(document).ready(function() {
    const endpoint = `https://api.github.com/users/quadrosga`;

    $.ajax(endpoint)
        .done(function(data) {
            $('#icon').attr('src', data.avatar_url);
            $('#name').text(data.name || 'Nome');
            $('#username').text('@' + data.login);
            $('#repo').text(data.public_repos);
            $('#followers').text(data.followers);
            $('#following').text(data.following);
            $('#link').attr('href', data.html_url);
        })
        .fail(function() {
            console.log('Erro ao recuperar dados. Tente novamente em alguns instantes');
        });
});

