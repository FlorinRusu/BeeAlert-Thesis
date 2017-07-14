var $grid = $('.grid').masonry({
    // options
    itemSelector: '.grid-item'
});
$grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
});