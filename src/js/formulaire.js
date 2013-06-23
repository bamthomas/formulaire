$(document).ready(function() {
    
    function FormViewModel() {
        this.prenom = null;
        this.nom = null;
    }

    var formViewModel = new FormViewModel();

    if (!Modernizr.localstorage) {
        var warningHtml = '<div class="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Attention!</strong><p>Votre navigateur ne supporte pas l\'enregistrement de données. Cf <a href="http://caniuse.com/namevalue-storage">http://caniuse.com/namevalue-storage</a>. Les données que vous allez saisir ne pourront pas être sauvegardées.</p></div>';
        $('#form').prepend(warningHtml);
    } else {
        formViewModel.nom = localStorage.getItem('nom');
    }

    $('ul.nav li').click(function() {
        var nav_id = $(this).attr('id');
        var content_id = nav_id.replace('-navbar', '');

        $('.content').addClass('hidden');
        $('#' + content_id).removeClass('hidden');
        $('ul.nav li').removeClass('active');
        $(this).addClass('active');
    });

    $('#save').click(function() {
        localStorage.setItem('nom',formViewModel.nom);
    });


    ko.applyBindings(formViewModel);
});

