/**
 * Created by Florin on 5/4/2017.
 */

$(function () {
    $.ajax('/users/feeds', {
        dataType:"json",
        success:function(data) {
            //Credit: http://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript
            console.log(data);
            var $result = '';
            var $list = $('.eq-list');
            for(var i = 0; i <10; i++) {
                $result += '<li class="equakes list-group-item">'+data[i].title+'</li>';
            }
            $list.html('<ul class="list-group">'+$result+'</ul>')
        },

        error: function( data){
            console.log(data);
        }
    });
});

