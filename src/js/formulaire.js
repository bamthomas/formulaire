$(document).ready(function() {

    $('ul.nav li').click(function() {
        var nav_id = $(this).attr('id');
        var content_id = nav_id.replace('-navbar', '');
    
        $('.content').addClass('hidden');
        $('#' + content_id).removeClass('hidden');
        $('ul.nav li').removeClass('active');
        $(this).addClass('active');
    });

});

