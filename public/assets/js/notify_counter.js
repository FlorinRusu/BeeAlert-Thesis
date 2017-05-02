/**
 * Created by Florin on 5/1/2017.
 */
$(function() {
    $lungime = $(".dropdown-menu li").length;
    $(".ring-badge").append($lungime);

    if ($lungime == 0) {
        $(".ring-badge").hide("fast");
    }

    var $droplist = $("#drop-list");
    $droplist.css("display", $droplist.css("display") === 'none' ? '' : 'none');

    $(".fa-bell").click(function() {
        $(".dropdown-menu").fadeToggle(300);
        return false;
    });
});

//When we simply click on the page, menu dissapears
$(document).click(function() {
    $(".dropdown-menu").hide();
});

// The click on the div block-list will not fade it
$(".dropdown-menu").click(function() {
    return false;
});