const buttonOpen = document.querySelectorAll('.comments__btn');

const reviews__list = document.querySelector('.comments__list');

var openOverlay = function(){
	document.body.style.overflow = 'hidden';
	const overlayElement = document.createElement('div');
	overlayElement.classList.add('overlay');

	const contentElement = document.createElement('div');
	contentElement.classList.add('overlay__content');

	const titleElement = document.createElement('div');
	titleElement.classList.add('overlay__title');
	titleElement.textContent = "Константин Спилберг";

	const textElement = document.createElement('div');
	textElement.classList.add('overlay__text');
	textElement.textContent = "Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным. Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным.";

	const buttonClose = document.createElement('button');
	buttonClose.classList.add('overlay__close');
	buttonClose.addEventListener('click', function(){
	document.body.removeChild(overlayElement);
	document.body.style.overflow = 'auto';
});
	overlayElement.appendChild(contentElement);
	contentElement.appendChild(titleElement);
	contentElement.appendChild(buttonClose);
	contentElement.appendChild(textElement);
	document.body.appendChild(overlayElement);

	return overlayElement;
};

    reviews__list.addEventListener('click', function(event){
    event.preventDefault();
	const overlay = openOverlay();
});

 $('body').on('wheel', '.overlay', function(e) {
    e.stopPropagation();
  });
