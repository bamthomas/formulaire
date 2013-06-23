$(document).ready(function() {

    $('#form-navbar').click(function() {
        $('.content').addClass('hidden');
        $('#form').removeClass('hidden');
        $('ul.nav li').removeClass('active');
        $('#form-navbar').addClass('active');
    });

    $('#about-navbar').click(function() {
        $('.content').addClass('hidden');
        $('#about').removeClass('hidden');
        $('ul.nav li').removeClass('active');
        $('#about-navbar').addClass('active');
    });
});

