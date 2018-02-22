
$('#js-form').on('submit', submitForm);

function submitForm (ev) {
    ev.preventDefault();
    
    var form = $(ev.target),
        data = form.serialize(),
        url = form.attr('action'),
        type = form.attr('method');

    ajaxForm(form).done(function(msg) {
            status = msg.status;
        
        if (status === 'OK') {
            form.append("<script type='text/javascript'> var openOverlay = function(){document.body.style.overflow = 'hidden';const overlayElement = document.createElement('div');overlayElement.classList.add('overlay');const contentElement = document.createElement('div');contentElement.classList.add('overlay__content'); contentElement.classList.add('form__overlay_content'); const textElement = document.createElement('div');textElement.classList.add('overlay__text');textElement.textContent = 'Заявка принята';const buttonClose = document.createElement('button');buttonClose.classList.add('overlay__close');buttonClose.addEventListener('click', function(){document.body.removeChild(overlayElement);});overlayElement.appendChild(contentElement);contentElement.appendChild(buttonClose);contentElement.appendChild(textElement);document.body.appendChild(overlayElement);return overlayElement;}; openOverlay();</script>");
           // form.append('<p class="success">' + mes + '</p>');
        } else{
            form.append("<script type='text/javascript'> var openOverlay = function(){document.body.style.overflow = 'hidden';const overlayElement = document.createElement('div');overlayElement.classList.add('overlay');const contentElement = document.createElement('div');contentElement.classList.add('overlay__content'); contentElement.classList.add('form__overlay_content'); const textElement = document.createElement('div');textElement.classList.add('overlay__text');textElement.textContent = 'Произошла ошибка';const buttonClose = document.createElement('button');buttonClose.classList.add('overlay__close');buttonClose.addEventListener('click', function(){document.body.removeChild(overlayElement);});overlayElement.appendChild(contentElement);contentElement.appendChild(buttonClose);contentElement.appendChild(textElement);document.body.appendChild(overlayElement);return overlayElement;}; openOverlay();</script>");
            //form.append('<p class="error">' + mes + '</p>');
        }
    }).fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

};

// Универсальная функция для работы с формами

    var ajaxForm = function (form) {
    var data = form.serialize(),
        url = form.attr('action');
    
    return $.ajax({
        type: 'POST',
        url: url,
        dataType : 'JSON',
        data: data
    })
};

