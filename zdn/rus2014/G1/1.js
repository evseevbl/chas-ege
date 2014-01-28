(function(){'use strict';

var v1=sl1();//Если 1, то ищем ошибку

window.vopr.txt=
	(v1?
		'В каком слове допущена ошибка в постановке ударения: неверно выделена буква, обозначающая ударный гласный звук?':
		'В каком слове верно выделена буква, обозначающая ударный гласный звук?'
	)+'<br/>';
	
var ver=[//Список (на самом деле массив) правильных слов
	"афЁра",
	'балОванный',
	"бралА",
	"бралАсь",
	"валовОй(продукт)",
	"вернА",
	"взялАсь",
	"влилАсь",
	"вручИт",
	"гналА",
	"гналАсь",
	'дозвонЯтся',
	"зАняли ",
	"зАпертый",
	"запертА",
	"квартАл",
	"клАла",
	"коклЮш",
	"корЫсть",
	"нАчал ",
	"нАчали",
	"началА",
	"нефтепровОд",
	"облегчИт",
	"освЕдомишься",
	"плодоносИть",
	"повторИт",
	"позвонИт",
	"сОгнутый",
	"слЕсари",
	"слИвовый",
	"смазлИва",
	"снЯтый",
	"снятА",
	'чЕрпать',
];//Лучше их располагать по алфавиту

var nev=[//Список (на самом деле массив) неправильных слов
	"афЕра",
	"брАла",
	"брАлась",
	"валовОй",
	"взЯлась",
	"влИлась",
	"гнАла",
	"зАперта",
	"занЯли",
	"кОклюш ",
	"квАртал",
	"клалА",
	"местностЕй",
	"нефтепрОвод",
	"облЕгчит",
	"осведомИшься",
	"плодоНосить",
	"повтОрит",
	"позвОнит",
	"прОстыня",
	"слесарЯ",
	"сливОвый",
	"снЯта",
	"согнУтый.",
	"тортЫ",
	"шарфЫ",
];//Внимание: после последнего элемента тоже ставится запятая. Её можно и не ставить, но так удобнее.

window.vopr.ver=v1?nev:ver;
window.vopr.nev=v1?ver:nev;
AtoB();

})();


