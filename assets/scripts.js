$(document).ready(function () {
	//Фиксированная шапка при скроле
	function fixedHeader() {
		var topp = $('.topline-row').height();;
		function fixScroll() {
			if (window.scrollY > topp) {
				$(".header").addClass("fixed");
			}
			if (window.scrollY < topp) {
				$(".header").removeClass("fixed");
			}
		}

		fixScroll();

		$(window).scroll(function () {
			fixScroll();
		});
	}
	fixedHeader();

	$(window).resize(function () {
		fixedHeader();
	});


	//Выбор количества товаров
	$('.quantity-block__button').click(function (e) {
		e.preventDefault();
		let currentButton = $(this);
		let itemsInput = $('.quantity-block__input');
		let itemsInputValue = $('.quantity-block__input').val();
		if (currentButton.hasClass('plus')) {
			itemsInput.val(Number(itemsInputValue) + 1);
		}
		if (currentButton.hasClass('minus')) {
			itemsInput.val(Number(itemsInputValue) - 1);
			if (Number(itemsInputValue) <= 1) {
				itemsInput.val('1');
			}
		}
	});

	//Рандомный цвет для аватарок
	function randColor() {
		let rand = () => Math.floor(Math.random() * (255 + 1 - 0) + 0);
		return `rgb(${rand()},${rand()},${rand()})`;
	}

	$(".review-item").each(function () {
		$(this).find('.review-item-head__avatar').css('background-color', randColor());
	});

	//Проставление лайка-дизлайка
	$('.like-diselike__link').click(function (e) {
		e.preventDefault();
		let currentAction = $(this);
		currentActionText = currentAction.text();
		currentAction.addClass('active');
		console.log(currentActionText);
		currentAction.find('.like-diselike__value').text(Number(currentActionText) + 1);
		currentAction.closest('.like-diselike').addClass('noclick');
	});

	//Фильтрация комментариев при клике на рейтинг
	$('.rating-list__link').click(function (e) {
		e.preventDefault();
		let currentSortingLink = $(this);
		$('.load-more-block').hide();
		if (currentSortingLink.hasClass('js-sorting-five')) {
			console.log('test');
			$('.reviews-content').find('.four-stars').hide();
			$('.reviews-content').find('.five-stars').show();
			$('.reviews-content').find('.hidden').removeClass('hidden');
		} else if (currentSortingLink.hasClass('js-sorting-four')) {
			$('.reviews-content').find('.four-stars').show();
			$('.reviews-content').find('.five-stars').hide();
			$('.reviews-content').find('.hidden').removeClass('hidden');
		}
	});


});

/* function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.style.display = nav.style.display === 'block' 
  ? 'none'
  : 'block';
} */

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  arrows: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
  asNavFor: ".slider-nav",
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      arrow: true
    }
  }]
});
$(".slider-nav").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 500,
  asNavFor: ".slider-for",
  dots: false,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  slide: "div",
  responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrow: true
      }
    }]
});