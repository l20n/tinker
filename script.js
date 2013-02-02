$(function() {
	$('.span4').hover(function() {
		$(this).find('header').fadeOut('slow');
	}, function() {
		$(this).find('header').fadeIn('slow');
	});
});