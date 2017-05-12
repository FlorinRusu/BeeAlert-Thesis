/**
 * Created by Florin on 5/4/2017.
 */


    //feed to parse
$(document).ready(function() {

    var feed = "http://feeds.feedburner.com/raymondcamdensblog?format=xml";
  //http://www.emsc-csem.org/service/rss/rss.php?filter=yes&min_mag=3.5&region=ROMANIA&min_intens=0&max_intens=8/
    $.ajax('/users/feeds', {
        // accepts:{
        //     xml:"application/rss+xml"
        // },
        dataType:"json",
        success:function(data) {
            //Credit: http://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript
            console.log(data);
            // $(data).find("item").each(function () { // or "item" or whatever suits your feed
            //     var el = $(this);
            //     console.log("------------------------");
            //     console.log("title      : " + el.find("title").text());
            //     console.log("link       : " + el.find("link").text());
            //     console.log("description: " + el.find("description").text());
            // });
        },

        error: function( data){
            console.log(data);
        }
    });

});
