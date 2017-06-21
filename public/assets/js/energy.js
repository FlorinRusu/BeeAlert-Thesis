/**
 * Created by Florin on 5/15/2017.
 */
$(function () {
    $.ajax('/users/energy', {
        dataType:"json",
        success:function(data) {
            //Credit: http://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript
            console.log(data);
            var source;
            var $result_e = '';
            var $content = $('#tab3show');
            for(var i = 0; i <10; i++) {
                source = data[i].link;
                $result_e +='<img src="/assets/images/electricitate.png" class="img-fenosa pull-left" alt="post img">'
                    +'<li class="energy" style="min-height:100px;">'+data[i].title
                    +'<br >' + source.link(source)+'</li>'
                    +'<hr>'
                ;
            }
            //$content.html('<ul id="tab3show">'+$result_e+'</ul> ')
            $content.html('<h3>Energie</h3>'+$result_e);
        },
        error: function( data){
            console.log(data);
        }
    });

});