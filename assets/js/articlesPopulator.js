$(document).ready(function() {
  	
  	//$('.carousel.carousel-slider').carousel({fullWidth: true});



  	//change background image in css


    var imgURL = "";
    var imgHeader = "https://static01.nyt.com/"; 
  	//var bgImage = $('#bgImg').css('background-image', 'url(' + imgURL + ')');
  	var subTagCopy = "";
  	var bylineCopy = "";
  	var headlineCopy = "";
  	var summaryCopy = "";
  	var articleURL = "";


    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=20388c3de825432d848c39afed6eef54&q=culture";
-
       $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function(response) {
            var results = response.response.docs;
          
            for (var i = 0; i < results.length; i++) {

                articleURL = results[i].web_url;
                  console.log("Article:::", articleURL);

                headlineCopy = results[i].headline.main;
                  console.log("Headline:::",headlineCopy);

                summaryCopy = results[i].snippet;
                  console.log("Summary:::",summaryCopy);

                bylineCopy = results[i].source;
                  console.log("Byline:::", bylineCopy);

                if (results[i].multimedia !== undefined) {

                  imgURL = imgHeader + results[i].multimedia[0].url;
                  console.log("Image URL:::", imgURL);

                  //don't forget to close the article container div
                  $('#articlesContainer').append("<div class='articleContainer'> <a href='" + articleURL + "'> <div class='col s5'> <div class='articleImage'> <img src='" + imgURL + "' height='0%' width='100%'> </div> </div> <div class='col s7 articleInfo'>    <span id='articleTag'>News</span>   <div id='articleHead'> " + headlineCopy + " </div>  <div class='articleByline'>  <span id='articleSource'> " + bylineCopy + "</span>  |  <span id='articleDate'>09.23.17</span>  </a> </div> ")



//                    <div class="row">
  //     <div class='col s5'>
  //       <div id='articleImg'>
  //       </div>
  //     </div>
  //     <div class="col s7 articleInfo">
  //       <span id="articleTag">TV</span>
  //       <div id="articleHead">What’s So Great About Kids Fighting Monsters?
  //       </div>
  //       <div class="articleByline">
  //         <span id="articleSource">WIRED</span>  |  <span id="articleDate">09.23.17</span>
  //       </div>
  //     </div>
  //   </div>
  // </div>







                }
             


                // for(var j = 0; j < results.multimedia.length; i++) [

                //  subTag = results[i].multimedia[0].type_of_material;
                //   console.log(subTag);
                // ]

                
}

})      .catch(function(error) {
        console.log('error',error);
})







    

    
  })
