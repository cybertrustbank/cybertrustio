(function() {
    $('.faq-wrap .card-header').bind('click', function() {
        $(this).toggleClass("border-bottom").find('i').toggleClass("fa-chevron-right fa-chevron-down").parent().next().toggle(200);
        var obj = this;
        $('.faq-wrap .card-header').each(function(item) {
            var cardbody = $(this).next();
            if (obj !== this && !cardbody.is(":hidden")) {
                $(this).toggleClass("border-bottom").find('i').toggleClass("fa-chevron-right fa-chevron-down")
                cardbody.hide();
            }
        });
    });
})();