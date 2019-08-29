jQuery(function($) {
    (function () {
        var $main = $('.gallery');
        if ($main.length == 0) return;

        var nav_css = '.nav-img';
        var link_css = '.nav-img a';
        var nav_active_class = 'nav-active';
        var poster_src_css = '.poster-img img';

        $main.on('click', link_css, function() {
            var $this = $(this);
            var src = $this.find('img').attr('data-src');

            $main.find(poster_src_css).attr('src', src);
            $main.find(nav_css).removeClass(nav_active_class);
            $this.parent().addClass(nav_active_class);
        });
    })();
});
