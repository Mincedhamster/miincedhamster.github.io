const secMenu = $('.menu:not(.menu-acco)');
const menuList = $('.menu-acco');
const menuItem = $('.menu-acco__item');
const menuActive = $('.menu-acco__content');


menuItem.on('click', function(){
	console.log($(this).parents('.menu'));
if($(this).hasClass('menu_active')){
	$(this).removeClass('menu_active');
}else{
	menuItem.removeClass('menu_active');
	$(this).addClass('menu_active');
}

});

$(document).mouseup(function (e) {
    if (menuItem.has(e.target).length === 0){
        menuItem.removeClass('menu_active');
    }
});

