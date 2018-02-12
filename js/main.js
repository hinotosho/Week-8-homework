$(document).ready(function() {
console.log('Hello!');

$('.hamburger-a, .hamburger-b').click(toggleNavBar);

function toggleNavBar() {
	$('.nav-list').css('display', 'block');
	$('nav').slideToggle();
}
});