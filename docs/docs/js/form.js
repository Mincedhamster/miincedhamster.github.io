const userPhone = function(){
	var usP = $('#user-phone').val();
	return usP;
};
const userName = function(){
	var usP = $('#user-name').val();
	return usP;
};
const userStreet = function(){
  var usP = $('#user-street').val();
  return usP;
};
const userHome = function(){
  var usP = $('#user-home').val();
  return usP;
};

const digits = function (event){
  console.log(event.key);
  let isDigit = false;
    let isDash = false;
    let isControl = false;

    if(event.key>=0 || event.key<= 9){
      isDigit = true;
      console.log(isDigit);
    };
    if(event.key=='-'){
      isDash = true;
      console.log(isDash);
    }
    if(event.key =='ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace'){
      isControl = true;
      console.log(isControl);
    }

    if(!isDigit && !isDash && !isControl){
      event.preventDefault();
    }  
} 
const phoneEl = $('#user-phone'); 
phoneEl.on('keydown', function(event){
  digits(event);
});

const homeEl = $('#user-home'); 
homeEl.on('keydown', function(event){
  digits(event);
});

$(document).ready(function() {
     $('button[type="submit"]').prop('disabled', true);
     $('input[type="text"]').keyup(function() {
        if(userName() !== '' && userPhone() !== '' && userStreet() !== '' && userHome() !== '' ) {

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
    if(userStreet() == '') {
       $('#user-street').attr('placeholder', 'Введите улицу');
       $('#user-street').css({borderColor: 'red'});
   }else{
    $('#user-street').css({borderColor: '#f8b43a'});
   }
   if(userHome() == '') {
       $('#user-home').attr('placeholder', ' № дома');
       $('#user-home').css({borderColor: 'red'});   
   }else{
      $('#user-home').css({borderColor: '#f8b43a'});  
   }


});

