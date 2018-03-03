const slider = $('#js-burgers__slider');
const arRight = $('#js-arrow__right');
const arLeft = $('#js-arrow__left');
	const step = 100;
var nextLeft = 0;
var currentLeft = 0;
const maxLeft = -400;
const maxRight = 400




arRight.on('click', function(){
	console.log(currentLeft);
	nextLeft = parseInt(currentLeft);
	if(currentLeft > maxLeft){
		currentLeft = nextLeft - step;
		slider.css({'left': currentLeft +'%'});
		console.log(currentLeft);

		console.log(nextLeft);
}else{
	currentLeft = 0;
	slider.css({'left': 0});
}
});
arLeft.on('click', function(){
	console.log(currentLeft);
	nextLeft = parseInt(currentLeft);
	if(currentLeft < 0 ){
		currentLeft = nextLeft + step;
		slider.css({'left': currentLeft +'%'});
		console.log(currentLeft);

		console.log(nextLeft);
}else{
	currentLeft = maxLeft;
	slider.css({'left': maxLeft + '%'});
}
});


function kek(){
	var cheburek = $('.burgers__slide').width();
	return cheburek;
}
function cheburek(){
	var lol = $('.burgers__slider').width();
	return lol;
}
