// Chargement de l'API youtube en asynchrone    
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// On récupère l'ID de la vidéo
var homeVideoId = $('#univers-player').data('video-id');

// Chargement de l'iframe Youtube (en fonction du data-video-id présent dans le code HTML)
function onYouTubeIframeAPIReady() {
    univers_player = new YT.Player('univers-player', {
        videoId: homeVideoId,
        playerVars: {
            'showinfo': 0,
            'modestbranding': 1,
            'iv_load_policy': 3,
            'autoplay': 0,
            'autohide': 1
        },
        events: {
            'onReady': onPlayerReady
        },
        ratio: 1,
        ready: false
    });
}


// Gestion de la hauteur du player youtube en fonction de la largeur de l'écran selon le ratio original de la vidéo
function setPlayerWidth(player) {
    var ratio = player.ratio;
    var width = $(player.c.parentElement).width();
    $(player.c).css('width', '100%').css('height', width / ratio);
}

// Quand le player vidéo est chargé, on récupère le ratio largeur/hauteur du player, et on trigg la fonction setPlayerWidth() qui va mettre à jour sa hauteur
function onPlayerReady(event) {
    univers_player.ratio = $('#univers-player').width() / $('#univers-player').height();
    univers_player.ready = true;
    setPlayerWidth(univers_player);
}

// Calcul de la largeur à appliquer au moteur de recherche déplié, en fonction de la largeur de l'écran
function setSearchEngineWidth(){
    $('.site-banner .gsf-fields').css('width',$('.header-top').width());
}

// Gestion de la taille des images du slider HP
function setSliderSize(slider) {    
    // Pour chaque slide
    $(slider).find('article').each(function(i) {
        // On récupère l'image
        var this_img = $($(this).find('img'));
        // On réinitialise sa taille
        this_img.css('transform', 'scale(1)');
        // On récupère la hauteur de l'image initiale
        var init_height = this_img.height();
        // On récupère la hauteur des slides (qui sont elles en fonction de la largeur de l'écran)
        var end_height = $(this).height();
        // On applique une homotétie sur l'image selon le ratio des 2 précédentes hauteurs
        this_img.css('transform', 'scale(' + end_height / init_height + ')');
    })
}

// Affichage "full" du bandeau quicklinks en HP si pas de bloc "exposer"
function testQuickLinks() {
    if (!$('.expo-stand').length) {
        $('.quicklinks').addClass('view-full');
    }
}

// Déplacement HTML liés au fil d'ariane
function moveAriane() {
    $('.breadcrumb-nav').next().andSelf().wrapAll('<div class="bloc-ariane"></div>')
    if ($('.wrapper h1').length) {
        $('.bloc-ariane').insertAfter('.wrapper h1:eq(0)');
    };
}
$(window).load(function() {
    // Retrait de la classe no-js une fois la page chargée (style CSS dédiée à la classe no-js)
    $('body').removeClass('no-js');

    // Gestion du lancement de la vidéo Youtube au clic sur le bouton custom
    $('.univers-video .video-overlay').on('click', function() {
        if (univers_player.getPlayerState() != 1 && univers_player.getPlayerState() != 2) {
            univers_player.playVideo();
            $('.univers-video .video-overlay').fadeOut();
        }
    })

    //Déplacement JS spé Mobile: la selection de la langue et les liens externes du haut de page => dans le footer
    $('.rwd-actions').prepend($('.lang-switcher'));
    $('.rwd-actions').prepend($('.header-labels'));
    $('.lang-switcher').show();
    $('.header-labels').css('opacity', '1');

    setSliderSize('.la-slider');
    setSearchEngineWidth()

    $(window).resize(function() {
        // On appelle toutes les fonctions faisant des opérations liées à la largeur de l'écran
        if (univers_player.ready) {
            setPlayerWidth(univers_player);
        }
        setSliderSize('.la-slider');
        setSearchEngineWidth();
    })


    // Page intérieure uniquement
    if ($('.body-corpo').length) {
        moveAriane();
        // Gestion de l'apparition des share-links: on toggle l'affichage de la liste des liens RS et l'affichage du texte "partager cette page"
        $(".bloc-ariane .share-rs").click(function() {
            $('.bloc-ariane .sr-list').toggleClass('show');
            $(".bloc-ariane .sr-title").toggle();
        });

        // Au click en dehors de la zone "social-share", on fait disparaitre les share-links
        $("body").click(function(e) {
            if ($(e.target).hasClass('social-share') || $(e.target).parents(".social-share").size()) {
                
            } else {
                $('.bloc-ariane .sr-list').removeClass('show');
                $(".bloc-ariane .sr-title").show();
            }
        });
    };

    // Fiche exposant
    if ($('.catalogue.exposant.fiche').length) {
        $('.catal-ex-item-buttons').insertAfter('.catal-ed-main-media');
        $('.catal-nav-ex.mod-catal').insertAfter('.edito');
    };
})