
var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=date&q='art culture'&type=video&safeSearch=strict&key=AIzaSyDoaUKXTA1aR0qPgnQRAGCdbp--k_TBWXU";

       $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function(response) {
            var results = response.items;
            console.log(response);
            //console.log(response.items[0].snippet.thumbnails.default.url);
            //console.log(response.items[0].snippet.title);
            for(var i = 0; i < results.length; i++) {

                console.log("title :", response.items[i].snippet.title);
                console.log("description", results[i].snippet.description);
                console.log("thumbnail/ high URL:", results[i].snippet.thumbnails.high.url);
                console.log("videoId", results[i].id.videoId);
                console.log("publishedAt", results[i].snippet.publishedAt);
}

})      .catch(function(error) {
        console.log('error',error);
})
