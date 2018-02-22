const userPhone = function(){
	var usP = $('#user-phone').val();
	return usP;
};
const userName = function(){
	var usP = $('#user-name').val();
	return usP;
};

$(document).ready(function() {
     $('button[type="submit"]').prop('disabled', true);
     $('input[type="text"]').keyup(function() {
        if(userName() !== '' && userPhone() !== '' ) {

           $('button[type="submit"]').prop('disabled', false);
        }

     });
 });

$('#js-form').on('click', function(){
    if(userName() == '') {
       $('#user-name').attr('placeholder', 'Введите имя');
       $('#user-name').css({borderColor: 'red'});
   }else{
    $('#user-name').css({borderColor: '#f8b43a'});
   }
   if(userPhone() == '') {
       $('#user-phone').attr('placeholder', 'Введите номер телефона');
       $('#user-phone').css({borderColor: 'red'});   
   }else{
      $('#user-phone').css({borderColor: '#f8b43a'});  
   }
});

