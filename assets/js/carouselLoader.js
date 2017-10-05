$(document).ready(function() {
  	
  	$('.carousel.carousel-slider').carousel({fullWidth: true});



  	//change background image in css

    var imgURL = "";
  	var bgImage = $('#bgImg').css('background-image', 'url(' + imgURL + ')');
  	var subTagCopy = "";
  	var bylineCopy = "";
  	var headlineCopy = "";
  	var summaryCopy = "";
  	var articleURL = "";


    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=culture";

       $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function(response) {
            var results = response.response.docs;
          
            for(var i = 0; i < results.length; i++) {

              articleURL = results[i].web_url;
                console.log(articleURL);

              headlineCopy = results[i].headline.main;
                console.log(headlineCopy);

              summaryCopy = results[i].snippet;
                console.log(summaryCopy);

              bylineCopy = results[i].source;
                console.log(bylineCopy);



                // for(var j = 0; j < results.multimedia.length; i++) [

                //  subTag = results[i].multimedia[i].type_of_material;
                //   console.log(subTag);
                // ]






                
}

})      .catch(function(error) {
        console.log('error',error);
})







  	$('#newsContainer').append("<div id='bgImg' class='carousel-item'><div class='row text-center'><div class='col s7'></div><div class='col s5'><div class='article'><span id='subTag'>" + subTagCopy + "</span><div id='byline'>" + bylineCopy + "</div><div id='headline'>" + headlineCopy + "</div><div id='summary'>" + summaryCopy + "</div><a class='waves-effect waves-light btn-large' src=" + articleURL + ">Read More</a></div></div></div></div>");



    
  })
