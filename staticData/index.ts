import firstIcon from '@/public/firstIconSlider.svg';
import secondIcon from '@/public/secondIconSlider.svg';
import thirdIcon from '@/public/thirdIconSlider.svg';
import iconFour from '@/public/dancer.svg';
import iconFive from '@/public/somersault.svg';
import iconSix from '@/public/somersaultBack.svg';
import lamp from '@/public/lampIcon.png';
import target from '@/public/targetIcon.png';
import laptop from '@/public/laptopIcon.png';

// В этом файле находятся статичные данные для генерации контента (выносить их в Redux не имеет смысла). В некоторых
// объектах содержатся наименования классов конкретного компонента, тк проект небольшой, я допустил это, при необходимости
// можно переделать в функцию, возвращающую объект и принимающую аргументами наименования классов, для удобного использования

// Для дополнительной стилизации кнопки из библиотеки MUI
export const sx = {
	textTransform: 'none',
	fontFamily: 'inter',
};

// Иконки для карусели
export const carouselIcons = [
	firstIcon,
	secondIcon,
	thirdIcon,
	iconFour,
	iconFive,
	iconSix,
];

// Текст для карусели
export const carouselTxt = [
	'Высокая и оперативная скорость <br /> обработки заявки',
	'Огромная комплексная база <br /> данных, обеспечивающая <br /> объективный ответ на запрос',
	'Защита конфеденциальных сведений, <br /> не подлежащих разглашению по <br />федеральному законодательству',
	'Могу крутиться вокруг своей оси <br />Могу долго крутиться <br />Могу ооочень долго крутиться',
	'Хоба, кувырок вперед, безумный трюк',
	'А это, не ну вы не поверите, <br /> это не ну это короче ээээ кувырок назад',
];

// Данные для заполнения карточек тарифов
export const dataCards = [
	{
		cardTop: 'firstCardTop',
		name: 'Beginner',
		underName: 'Для небольшого исследования',
		icon: 'firstIcon',
		src: lamp,
		price: { normal: '799 ₽', crossed: '1 200 ₽' },
		perMonth: 150,
		firstPoint: 'Безлимитная история запросов',
		secondPoint: 'Безопасная сделка',
		thirdPoint: 'Поддержка 24/7',
		activeStyle: 'activeFirstCard',
	},
	{
		cardTop: 'secondCardTop',
		name: 'Pro',
		underName: 'Для HR и фрилансеров',
		icon: 'secondIcon',
		src: target,
		price: { normal: '1 299 ₽', crossed: '2 600 ₽' },
		perMonth: 279,
		firstPoint: 'Все пункты тарифа Beginner',
		secondPoint: 'Экспорт истории',
		thirdPoint: 'Рекомендации по приоритетам',
		activeStyle: 'activeSecondCard',
	},
	{
		cardTop: 'thirdCardTop',
		name: 'Business',
		underName: 'Для корпоративных клиентов',
		icon: 'thirdIcon',
		src: laptop,
		price: { normal: '2 379 ₽', crossed: '3 700 ₽' },
		perMonth: 150,
		firstPoint: 'Все пункты тарифа Pro',
		secondPoint: 'Безлимитное количество запросов',
		thirdPoint: 'Приоритетная поддержка',
		activeStyle: 'activeThirdCard',
	},
];
