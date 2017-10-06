// // CAROUSEL API
// // --------------------------------------------------------
// var carouselURLBase = "http://webhose.io/filterWebContent?token=be373c14-94fd-4b4e-b6a6-4231ed384118&format=json&sort=crawled&q=%22art%22%20language%3Aenglish%20thread.country%3AUS%20site_type%3Anews%20%22culture%22%20language%3Aenglish%20thread.country%3AUS%20site_type%3Anews";
// var carouselCounter = 0;


// function runCarousel (numCarousel, carouselURLBase) {


//   $.ajax({
//     url: carouselURLBase,
//     method: "GET"
//   }).done(function() {

//     for (var i = 0; i < numCarousel; i++) {
//       carouselCounter++;


//       var carouselSection = $("<div>");
//       carouselSection.addClass("well");
//       carouselSection.attr("id", "carousel-well-" + carouselCounter);
//       $("#newsContainer").append(carouselSection);



//       //carousel headline 
//         $("#carousel-well-" + carouselCounter)
//           .append(
//             "<h3><a href='" + response.docs[i].url + "' class='articleHeadline'><span class='label label-primary'>" +
//             carouselCounter + "</span><strong> " +
//             response.docs[i].thread.title + "</strong></a></h3>"
//           );
//         console.log(response.docs[i].thread.title);
//       }



//       //carousel author
//       if (response.docs[i].author) {
//         $("#carousel-well-" + carouselCounter)
//           .append("<h5>" + response.docs[i].author + "</h5>");

//         console.log(response.docs[i].author);
//       }



//       //carousel image
//       var imgCarousel = new Image ();
//       imgCarousel.src = response.docs[i].main_image;

//       $("#carousel-well-" + carouselCounter)
//         .append(imgCarousel);




//       $("#carousel-well-" + carouselCounter)
//         .append("<h5>Section: " + response.docs[i].url + "</h5>");
     
//       console.log(response.docs[i].published);
//       console.log(response.docs[i].url);
//       console.log(response.docs[i].site_full);
//     })
//   }







// $(document).ready(function() {
    
//     //change background image in css
//     var bgImage = $('#bgImg').css('background-image', 'url(' + this.background + ')');
//     var subTagCopy = "";
//     var bylineCopy = "";
//     var headlineCopy = "";
//     var summaryCopy = "";
//     var articleURL = "";
//     var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=culture";
//        $.ajax({
//             url: queryURL,
//             method: "GET"
//         })
//         .done(function(response) {
//             var results = response.response.docs;
          
//             for(var i = 0; i < results.length; i++) {
//               articleURL = results[i].web_url;
//                 console.log(articleURL);
//               headlineCopy = results[i].headline.main;
//                 console.log(headlineCopy);
//               summaryCopy = results[i].snippet;
//                 console.log(summaryCopy);
//               bylineCopy = results[i].source;
//                 console.log(bylineCopy);
//               subTagCopy = results[i].type_of_material;
//                 console.log(subTagCopy);
//               bgImage = results[i].multimedia.url;
//                 console.log(bgImage);
//             $('#bgImg').css("background-image", "url('" + bgImage + "')");
//             $('#newsContainer').append("<div class='carousel-item' id='bgImg'><div class='row'><div class='col s7'></div><div class='col s5'><div class='article'><span id='subTag'>" + subTagCopy + "</span><div id='byline'>" + bylineCopy + "</div><div id='headline'>" + headlineCopy + "</div><div id='summary'>" + summaryCopy + "</div><a class='waves-effect waves-light btn-large' src=" + articleURL + ">Read More</a></div></div></div></div>");
//             }
//             // $('.carousel.carousel-slider').carousel({fullWidth: true});
//         })      
//         .catch(function(error) {
//         console.log('error',error);
//     })
    
// // Fullscreen Search
//     $(function search() {
//         $('#searchBtn').on('click', function(event) {
//             event.preventDefault();
//             $('#search').addClass('open');
//             $('#search > form > input[type="search"]').focus();
//         });
    
//         $('#search, #search button.close').on('click keyup', function(event) {
//             if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
//                 $(this).removeClass('open');
//         }
//         });
//     });
//   })
























// SEARCH RESULTS API
//------------------------------------------------------------------------





// click
// --------------------------------------------------------

$("#run-search").on("click", function(event) {
  event.preventDefault();
  articleCounter = 0;
  $("#well-section").empty();
  searchTerm = $("#search-term").val().trim();
  var queryURL = queryURLBase + searchTerm;
  numResults = 20

  runQuery(numResults, queryURL);
});




//search results
//-----------------------------------------

var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
var searchTerm = "";
var numResults = 0;
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=";
// var resultsLimit = "&limit=40"
var articleCounter = 0;


function runQuery(numArticles, queryURL) {


  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(NYTData) {

    // Loop 
    for (var i = 0; i < numArticles; i++) {
      articleCounter++;

      var wellSection = $("<div>");
      wellSection.addClass("well");
      wellSection.attr("id", "article-well-" + articleCounter);
      $("#searchResults").append(wellSection);


      // SEARCH RESULT MAIN HEADLINE & URL (headline is the url)

      if (NYTData.response.docs[i].headline !== "null") {
        $("#articleHead")
          .append(
            "<h3><a href='" + NYTData.response.docs[i].web_url + "' class='articleHeadline'><span class='label label-primary'>" +
            articleCounter + "</span><strong> " +
            NYTData.response.docs[i].headline.main + "</strong></a></h3>"
          );
        console.log(NYTData.response.docs[i].headline.main);
      }


      //SEARCH RESULT AUTHOR INFO


      if (NYTData.response.docs[i].byline && NYTData.response.docs[i].byline.original) {
        $("#articleByline")
          .append("<h5>" + NYTData.response.docs[i].byline.original + "</h5>");

        console.log(NYTData.response.docs[i].byline.original);
      }


      //SEARCH RESULT IMAGE

  //    var img = new Image ();
    //  img.src = "https://nytimes.com/" + NYTData.response.docs[i].multimedia[0].url;

      //$("#articleImg")
        //.append(img);

     // console.log("https://nytimes.com/" + NYTData.response.docs[i].multimedia[0].url);


      //url in case needed but atm is redundant bc headline is linked

      $("#articleSource")
        .append(
          "<a href='" + NYTData.response.docs[i].web_url + "'>" +
          NYTData.response.docs[i].web_url + "</a>"
        );
    }
  });
}



// clear
// --------------------------------------------------------
$("#clear-all").on("click", function() {
  articleCounter = 0;
  $("#well-section").empty();
});



