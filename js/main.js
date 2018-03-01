const btnClose = document.querySelector("#js__top_close");

const m__nav = document.querySelector('#m__nav');

const btnOpen = document.querySelector('#js_menu-burger');

const link = $('.nav-mobile__link');


btnClose.addEventListener('click', function(){
	m__nav.classList.toggle('close');

}); 

btnOpen.addEventListener('click', function(){
	m__nav.classList.toggle('close');
});

link.on('click', function(){
	m__nav.classList.toggle('close');
})

$('body').on('wheel', '#m__nav', function(e) {
    e.stopPropagation();
  });