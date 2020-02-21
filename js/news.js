// mask-input number-phone, Поддержка
$(document).ready(function(){
	$("#phoneNewsOne").mask("+7  9 9 9 - 9 9 - 9 9 - 9 9 9"); // news

	$("#phoneNewsTwo").mask("+7  9 9 9 - 9 9 - 9 9 - 9 9 9"); // news
});

// Вход - Выпадающий блок
function showInNews() {
	$('#showInNews').animate({
		top: 0
	}, 500);

	document.getElementById('main-news-landing').style.display = 'none';
	// document.getElementById('footerNews').style.display = 'none';
};

// Вход - Выпадающий блок - Обртно домой)
function hideInNews() {
	$('#showInNews').animate({
		top: '-200%'
	}, 500);
	
	document.getElementById('main-news-landing').style.display = 'flex';
	// document.getElementById('footerNews').style.display = 'flex';
};


