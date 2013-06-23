$(document).ready(function() {
    
    function FormViewModel() {
        this.prenom = null;
        this.nom = null;
        this.prevenir_nom_prenom = null;
        this.prevenir_telephone = null;
    }

    var formViewModel = new FormViewModel();

    if (Modernizr.localstorage) {
        for (var prop in formViewModel) {
            formViewModel[prop] = localStorage['formulaire.' + prop];
        }
    } else {
        var warningHtml = '<div class="alert"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Attention!</strong><p>Votre navigateur ne supporte pas l\'enregistrement de données. Cf <a href="http://caniuse.com/namevalue-storage">http://caniuse.com/namevalue-storage</a>. Les données que vous allez saisir ne pourront pas être sauvegardées.</p></div>';
        $('#form').prepend(warningHtml);
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
        for(var prop in formViewModel) {
            localStorage['formulaire.' + prop] = formViewModel[prop];
        }
    });


    ko.applyBindings(formViewModel);
});

