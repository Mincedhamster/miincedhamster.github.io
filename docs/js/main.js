const btnClose = document.querySelector("#js__top_close");

const m__nav = document.querySelector('#m__nav');

const btnOpen = document.querySelector('#js_menu-burger');


btnClose.addEventListener('click', function(){
	m__nav.classList.toggle('close');
	document.body.style.overflow = 'visible';

}); 

btnOpen.addEventListener('click', function(){
	m__nav.classList.toggle('close');
	document.body.style.overflow = 'hidden';
});

$('body').on('wheel', '#m__nav', function(e) {
    e.stopPropagation();
  });