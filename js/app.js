$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});
});

// slick-slider
$(document).ready(function(){
  $('.reviews__container').slick({
	//autoplay: true,
	//autoplaySpeed: 5000,
  });
});

$(document).ready(function(){
  $('.blog__mobile-container_slider').slick({
  	centerMode: true,
  	centerPadding: '10px',
  	responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '15px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '24px',
        slidesToShow: 1
      }
    }
  ]
  });
});

// mask-input number-phone, Поддержка
$(document).ready(function(){

	$('.link-number').click(function() {
		$('.active').removeClass('active');
			$(this).addClass('active');
	});

	$("#phone").mask("+7 9 9 9 - 9 9 - 9 9 - 9 9 9"); // index

	$("#phoneTwo").mask("+7  9 9 9 - 9 9 - 9 9 - 9 9 9"); // index

	$("#phoneThree").mask("+7  9 9 9 - 9 9 - 9 9 - 9 9 9"); // index

	$("#phoneNewsOne").mask("+7  9 9 9 - 9 9 - 9 9 - 9 9 9"); // news

	$("#phoneNewsTwo").mask("+7  9 9 9 - 9 9 - 9 9 - 9 9 9"); // news
});

// Возможности программы - линки
tabs = [].slice.call(document.querySelectorAll(".item"));
	
	function showHide(id){
		tabs.forEach(function(e){e.style.display = "none"});
		document.getElementById(id).style.display = "flex";
		document.getElementById(id).animate([
			{ opacity: '0' },
			{ opacity: '1' }
		], { 
		  duration: 700
		});
	}

// Вход - Выпадающий блок
function showIn() {
	$('#showIn').animate({
		top: 0
	}, 500);
	
	document.getElementById('main-overflow').style.overflow = 'hidden';
	document.getElementById('main-landing').style.display = 'none';
	// document.getElementById('reviews').style.display = 'none';
	// document.getElementById('mobile-app').style.display = 'none';
	// document.getElementById('business-sphere').style.display = 'none';
	// document.getElementById('question').style.display = 'none';
	// //document.getElementById('tariffs').style.display = 'none';
	// document.getElementById('blog').style.display = 'none';
	// document.getElementById('support').style.display = 'none';
	// document.getElementById('footer').style.display = 'none';
}

// Вход - Выпадающий блок - Обртно домой)
function hideIn() {
	$('#showIn').animate({
		top: '-200%'
	}, 500);

	document.getElementById('main-overflow').style.overflow = 'auto';
	document.getElementById('main-landing').style.display = 'flex';
	// //document.getElementById('program-features').style.display = 'flex';
	// document.getElementById('improving-project').style.display = 'flex';
	// document.getElementById('reviews').style.display = 'flex';
	// document.getElementById('mobile-app').style.display = 'flex';
	// document.getElementById('business-sphere').style.display = 'flex';
	// document.getElementById('question').style.display = 'flex';
	// //document.getElementById('tariffs').style.display = 'flex';
	// document.getElementById('blog').style.display = 'flex';
	// document.getElementById('support').style.display = 'flex';
	// document.getElementById('footer').style.display = 'flex';
};

// Вход - Глазик
function show_hide_password(target){
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}

// Вход - Глазик номер два
function show_hide_password_two(target){
	var input = document.getElementById('password-input-two');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}

// Вход\регистрация - Забыли пароль?
function passwordRecovery() {
	document.getElementById('registration').style.display = 'none'
	document.getElementById('passwordRecovery').style.display = 'flex'
}

function closeRecovery() {
	document.getElementById('registration').style.display = 'flex'
	document.getElementById('passwordRecovery').style.display = 'none'
}

function showCodeForm() {
	document.getElementById('formCode').style.display = 'flex'
	document.getElementById('sendNumber').style.display = 'none'
}

