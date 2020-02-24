document.body.style.backgroundRepeat="no-repeat";
/* $(document).ready(function(){
  $(".sticky a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
  
          // Store hash
          var hash = this.hash;
          console.log(hash);
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 750, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
          });
      }  
  });
});
 */



document.getElementById("sticky").addEventListener("mouseenter", ShowSticky);
document.getElementById("sticky").addEventListener("mouseleave", HideSticky);
function ShowSticky() {

	var list = document.getElementsByClassName("homeListText");
	for (let index = 0; index < list.length; index++) {
		list[index].style.display = "block";
	}
}

function HideSticky() {

	var list = document.getElementsByClassName("homeListText");
	for (let index = 0; index < list.length; index++) {
		list[index].style.display = "none";
	}
}
function OpenLink(link){
	var win = window.open(link, '_blank');
	win.focus();
}





$num = $('.my-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $('.my-card:nth-child(' + $even + ')').addClass('active');
  $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.my-card:nth-child(' + $odd + ')').addClass('active');
  $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
}

$('.my-card').click(function() {
  $slide = $('.active').width();
  console.log($('.active').position().left);
  
  if ($(this).hasClass('next')) {
    $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
  } else if ($(this).hasClass('prev')) {
    $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
  }
  
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
  
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});




// Keyboard nav
$('html body').keydown(function(e) {
  if (e.keyCode == 37) { // left
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode == 39) { // right
    $('.active').next().trigger('click');
  }
});