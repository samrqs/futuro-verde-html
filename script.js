$(document).ready(function() {
    checkFooterPosition();

    $(window).on('resize', function() {
        checkFooterPosition();
    });

    function checkFooterPosition() {
        var contentHeight = $('.content').outerHeight();
        var windowHeight = $(window).height();

        if (contentHeight > windowHeight) {
            $('.footer-page').css('position', 'fixed');
            $('.footer-page').css('bottom', '0');
        } else {
            $('.footer-page').css('position', 'relative');
        }
    }
});
