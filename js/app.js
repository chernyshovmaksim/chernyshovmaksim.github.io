import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import 'slick-carousel';
import IMask from 'imask';

require('./modules/mobile-menu');
require('./modules/popup');
require('./modules/lazyload');


$(document).ready(function () {
	$('.slider').slick({
		autoplay: true
	});

	IMask(document.querySelector('.popup__tel'), {
		mask: '+{7}(000)000-00-00'
	});

});
