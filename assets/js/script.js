$(document).ready(function() {
  	
  	$('.carousel.carousel-slider').carousel({fullWidth: true});

  	//change background image in css
  	var bgImage = $('#bgImg').css('background-image', 'url(' + this.background + ')');
  	var subTagCopy = "";
  	var bylineCopy = "";
  	var headlineCopy = "";
  	var summaryCopy = "";
  	var articleURL = "";

  	$('#newsContainer').append("<div id='bgImg' class='carousel-item'><div class='row'><div class='col s7'></div><div class='col s5'><div class='article'><span id='subTag'>" + subTagCopy + "</span><div id='byline'>" + bylineCopy + "</div><div id='headline'>" + headlineCopy + "</div><div id='summary'>" + summaryCopy + "</div><a class='waves-effect waves-light btn-large' src=" + articleURL + ">Read More</a></div></div></div></div>");


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

