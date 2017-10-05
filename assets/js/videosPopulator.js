$(document).ready(function() {
    
    //$('.carousel.carousel-slider').carousel({fullWidth: true});



    //change background image in css


    var videoHeader = "https://www.youtube.com/watch?v="; 
    var videoID = "";
    var videoImage = "";
    var videoTitle = "";
    var videoDescription = "";

    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=date&q='art culture'&type=video&safeSearch=strict&key=AIzaSyDoaUKXTA1aR0qPgnQRAGCdbp--k_TBWXU";
       $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function(response) {
            var results = response.items;
          
            for (var i = 0; i < results.length; i++) {


                console.log("title :", response.items[i].snippet.title);
                console.log("description", results[i].snippet.description);
                console.log("thumbnail/ high URL:", results[i].snippet.thumbnails.high.url);
                console.log("videoId", results[i].id.videoId);
                console.log("publishedAt", results[i].snippet.publishedAt);

                  videoID = results[i].id.videoId;

                  videoURL = videoHeader + videoID;
                  videoImage = results[i].snippet.thumbnails.high.url;

                  videoTitle = response.items[i].snippet.title;
                  videoDescription = results[i].snippet.description;

                  //don't forget to close the article container div
                $('#videosContainer').append("<div class='articleContainer'> <a href='" + videoURL + "'> <div class='col s5'> <div class='articleImage'> <img src='" + videoImage + "' height='0%' width='100%'> </div> </div> <div class='col s7 articleInfo'>    <span id='articleTag'>News</span>   <div id='articleHead'> " + videoTitle + " </div>  <div class='articleByline'>  <span id='articleSource'> " + videoDescription + "</span>  |  <span id='articleDate'>09.23.17</span>  </a> </div> ")



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

})      .catch(function(error) {
        console.log('error',error);
})







    

    
  })
