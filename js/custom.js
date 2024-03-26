(function($) { "use strict"; 
	// Nav Menu Hover Script
	$('ul.nav li.dropdown').on('hover', function() {
	  $(this).find('.dropdown-menu').stop(true, true).fadeIn(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).fadeOut(500);
	});


	// hamburger menu icons
	$('.navbar-toggler').on('click', function(){
	   $(this).toggleClass('active');
	});
})(jQuery);

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.querySelectorAll('.thumb-a .item-img img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

images.forEach(function(img) {
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
