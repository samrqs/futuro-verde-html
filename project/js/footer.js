$(document).ready(function() {
    checkFooterPosition();

    $(window).on('resize', function() {
        checkFooterPosition();
    });

    function checkFooterPosition() {
        var contentHeight = $('.content').outerHeight();
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();

        if (windowWidth <= 500) {
            $('.footer-page').css({
                'position': 'fixed',
            });
            $('.row').css({
                'padding-bottom': '200px', // Corrigido aqui
            });
        } else {
            if (contentHeight > windowHeight) {
                $('.footer-page').css({
                    'position': 'fixed',
                    'bottom': '0'
                });
            } else {
                $('.footer-page').css('position', 'relative');
            }
        }
    }
});
