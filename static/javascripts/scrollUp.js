$(function () {
	$.scrollUp({
		animation: 'fade',
		activeOverlay: '#00FFFF',
		scrollImg: { active: true, type: 'background', src: 'candy-theme-flat/images/top.png' }
	});
});
$('#scrollUpTheme').attr('href', 'candy-theme-flat/stylesheets/libs/scrollup.css');
$('.image-switch').addClass('active');