$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
    var firstP = $('#firstP').text();
    var splitFirst = firstP.split(" ");
    $('#firstP').html('')
    for(var i=0; i<splitFirst.length; i++){
      $( "#firstP" ).append( "<span>" + splitFirst[i] + " </span>" )
    }

    //똑같이
    var secondP = $('#secondP').text();

    



  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!
  window.setInterval(function(){
    var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
    $('span').css({
      'color' : randomColor,
    });

  }, 1000);

});