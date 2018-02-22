const menuList = $('.menu-acco');
const menuItem = $('.menu-acco__item');
const menuActive = $('.menu-acco__content');

menuItem.on('click', function(){

if($(this).hasClass('menu_active')){
	$(this).removeClass('menu_active');
}else{
	menuItem.removeClass('menu_active');
	$(this).addClass('menu_active');
}
})