$(document).ready(function(){

	$("#phoneBlogOne").mask("+7  9 9 9 - 9 9 - 9 9 - 9 9 9"); // blog

	$("#phoneBlogTwo").mask("+7  9 9 9 - 9 9 - 9 9 - 9 9 9"); // blog

});

// Вход - Выпадающий блок
function showInThree() {
	$('#showInBlog').animate({
		top: 0
	}, 500);


	document.getElementById('main-blog-landing').style.display = 'none';
	// document.getElementById('footerBlog').style.display = 'none';
};

// Вход - Выпадающий блок - Обртно домой)
function hideInThree() {
	$('#showInBlog').animate({
		top: '-200%'
	}, 500);
	
	document.getElementById('main-blog-landing').style.display = 'flex';
	// document.getElementById('footerBlog').style.display = 'flex';
};