/*const commandAcco = document.querySelector('#js_team_accordeon');
const commandItem = document.querySelector('.team-accordeon__item');
const commandTrigger = document.querySelector('.team-accordeon__trigger');
const commandActive = document.querySelector('team-accordeon__item_active');



commandAcco.addEventListener('click', function(event){
	event.preventDefault();
	const targetEl = event.target;
	console.log(targetEl);
	const commandLi = targetEl.parentNode;
	console.log(commandLi);
	if(commandActive){
		Closeli(commandActive);
	}
	Openli(commandLi);
/*
	if(commandLi.classList.contains('team-accordeon__item_active')) {
		Closeli(commandLi);
		console.log('1');
}else{
	Openli(commandLi);
	console.log('2');
};
*//*
});/*

const Openli = function(el){
	el.classList.add('team-accordeon__item_active');
}

const Closeli = function (el){
	el.classList.remove ('team-accordeon__item_active');
}
*/

commandAcco = $('#js_team_accordeon');
commandItem = $('.team-accordeon__item');
commandTrigger = $('.team-accordeon__trigger')

commandTrigger.on('click', function(){

if($(this).parent().hasClass('team-accordeon__item_active')){
	$(this).parents().removeClass('team-accordeon__item_active');
}else{
	commandItem.removeClass('team-accordeon__item_active');
	$(this).parent().addClass('team-accordeon__item_active');
}
	
});



