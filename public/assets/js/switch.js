/**
 * Created by Florin on 5/2/2017.
 */

var $contents = $('.tab-content');
$contents.slice(1).hide();
$('.tab').click(function() {
    var $target = $('#' + this.id + 'show').show();
    $contents.not($target).hide();

});

$(window).resize(function() {
    google.maps.event.trigger(map, 'resize');
});