/**
 * Created by Florin on 5/14/2017.
 */

function search(){
    var input, filter, ul,li, p, i, img;
    input = document.getElementById('form-control');

    filter = input.value.toUpperCase();
    ul = document.getElementById('tab1show');
    li = ul.getElementsByTagName("li");
    img = ul.getElementsByClassName('apa-canal');
  //  h3 = ul.getElementsByTagName("h3");
    hr1 = ul.getElementsByTagName("hr");
    for( i=0; i<li.length;i++){
        p = li[i].getElementsByTagName("p")[0];
        //console.log(p);
        if(p.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display ="";
            img[i].style.display="";
            hr1[i].style.display="none";

        }
        else{
            li[i].style.display ="none";
            img[i].style.display="none";
            hr1[i].style.display="none";
        }
    }
}
