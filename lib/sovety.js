'use strict';
window.sovety=[
'<br/><br/>Это - экспериментальная, тестовая версия программы.<br/>В ней могут быть ошибки и неполадки.',
'<br/><br/>Все замечания и предложения отправляйте<br/>на адрес nickkolok@mail.ru',
'<br/><br/>Программа "Час ЕГЭ" корректно работает<br/>только в <a href="../doc/systreb.html" target="_blank">поддерживаемых браузерах</a>.<br/>',
'<br/>В тренажёре иногда используются статистические данные,<br/>например, о погоде или ценах. Эти данные являются<br/>автоматически сгенерированными, а <i>не</i> реальными.',
'<br/>Одна из разработчиц "Час ЕГЭ", Настя Червинская, срочно и <br/>бесплатно отдаёт котят в хорошие руки. Связаться с ней<br/> можно <a href="https://vk.com/kitten112007" target="_blank">ВКонтакте</a> или по телефону 8 (951) 5519607',
//'6.12.2013 в 15-00 в ауд. 430 Главного корпуса ВГУ состоится<br/>бесплатная лекция проф. Глушко, главы экзаменационной <br/>комиссии по математике,  на тему "Решение задач С5".',
'<br/>Математический факультет ВГУ - это <br/>высококвалифицированный профессорско-преподавательский <br/> состав и увлекательная студенческая жизнь.',
'<br/>Математический факультет ВГУ - это <br/>отличная профессиональная подготовка <br/>для работы в различных сферах деятельности.',
'<br/>Математический факультет ВГУ - это <br/>увлекательная студенческая жизнь и весёлый,<br/>доброжелательный, жизнерадостный коллектив.',
'Если Вам близка математика, Вы хотите стать специалистом, <br/>владеющим современными информационными технологиями и<br/> технологиями математического моделирования<br/>– ждем Вас на математическом факультете!',
'<br/>Вы можете <a href="../doc/oprosy.html"  target="blank">проголосовать</a> за то, <br/>что будет добавлено в "Час ЕГЭ"<br/>в ближайшем еженедельном выпуске.',
'<br/><br/>"Час ЕГЭ" содержит задания ЕГЭ по математике от B1 до B15 - <br/>в соответствии с новыми стандартами 2014 года.',
'<br/>Набор заданий тренажёра "Час ЕГЭ" по математике <br/>основан на <a href="http://mathege.ru/" target="_blank">Открытом банке заданий</a>,<br/>но не повторяет его в точности.',
//'<br/>9 февраля, в воскресенье, в 10:00, Математический<br/>факультет проводит день открытых дверей<br/>в Главном корпусе ВГУ (Университетская пл., 1), ауд. 435',
'Дорогие старшеклассники! Вы можете попробовать свои силы<br/>на бесплатном пробном ЕГЭ по математике (с оценкой от экспертов),<br/>а также посетить бесплатные консультации, которые ведут<br/>преподаватели математического факультета. <a href="https://www.math.vsu.ru/index.php?option=com_content&view=article&id=49:%D0%BF%D1%80%D0%BE%D0%B1%D0%BD%D1%8B%D0%B9-%D0%B5%D0%B3%D1%8D-%D0%B8-%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B0%D0%B1%D0%B8%D1%82%D1%83%D1%80%D0%B8%D0%B5%D0%BD%D1%82%D0%BE%D0%B2&catid=11:abiturientu&Itemid=101">Подробнее...</a>',
].shuffle();
function informer(){
	var i;
	document.write('<div id="inf">');
	document.write('<ul id="sovety">');
	for(i=0;i<window.sovety.length;i++){
		document.write('<li><div class="lisov">');
		document.write(window.sovety[i]);
		document.write('</div></li>');
	}
	document.write('</ul>');
	document.write('</div>');
	$(function(){'use strict';
		$('#sovety').anythingSlider({
			forwardText         : "&gt;",
			backText         	: "&lt;",
			hashTags			:false,
//			expand				:true,
			startPanel			:1,
			theme				:'minimalist-square',
			buildNavigation		:false,
			buildStartStop		:false,
			resizeContents  	:false,
			enableKeyboard		:false,
			autoPlay			:true,
			delay				:10000,
		});
	});
}
informer();
