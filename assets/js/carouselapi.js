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







$(document).ready(function() {
    
    //change background image in css
    var bgImage = $('#bgImg').css('background-image', 'url(' + this.background + ')');
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
              subTagCopy = results[i].type_of_material;
                console.log(subTagCopy);
              bgImage = results[i].multimedia.url;
                console.log(bgImage);
            $('#bgImg').css("background-image", "url('" + bgImage + "')");
            $('#newsContainer').append("<div class='carousel-item' id='bgImg'><div class='row'><div class='col s7'></div><div class='col s5'><div class='article'><span id='subTag'>" + subTagCopy + "</span><div id='byline'>" + bylineCopy + "</div><div id='headline'>" + headlineCopy + "</div><div id='summary'>" + summaryCopy + "</div><a class='waves-effect waves-light btn-large' src=" + articleURL + ">Read More</a></div></div></div></div>");
            }
            // $('.carousel.carousel-slider').carousel({fullWidth: true});
        })      
        .catch(function(error) {
        console.log('error',error);
    })
    
// Fullscreen Search
    $(function search() {
        $('#searchBtn').on('click', function(event) {
            event.preventDefault();
            $('#search').addClass('open');
            $('#search > form > input[type="search"]').focus();
        });
    
        $('#search, #search button.close').on('click keyup', function(event) {
            if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
                $(this).removeClass('open');
        }
        });
    });
  })























