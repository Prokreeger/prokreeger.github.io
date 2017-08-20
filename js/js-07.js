console.log('connect - ok');

/* ==================  View ================ */

let maxInpt = 10;
let inptBox = $(".input-fields");
let addButton = $(".add-input-btn");
let x = 1;

/* ==================  Model ================ */

// Задание 1

$(addButton).click(function(e) {
    e.preventDefault();
    if (x < maxInpt) {
        x++;
        $(inptBox).append('<div class="margin-b-10 field-wrapper"><input class="form-control text-inpt" type="text" placeholder="Введите текст"> <input class="btn btn-danger remove-input-btn" type="button" value="-"></div>');
    }
});

$(inptBox).on("click", ".remove-input-btn", function(e) {
    e.preventDefault();
    $(this).parent("div").remove();
    x--;
});

// Задание 2-3

$('.fields-value-btn').on('click', function() {
    $('.fields-value').val('');
    var isValid = true;
    $('.input-fields input[type="text"]').each(function() {
        if ($(this).val().length < 1) {
            $(this).parent('.field-wrapper').addClass('has-error');
            $(this).parent('.field-wrapper:not(:has(.alert))').append('<div class="alert alert-danger" role="alert">Заполните поле!</div>');
            isValid = false;
        } else {
            $(this).parent('.field-wrapper').removeClass('has-error');
            $(this).parent('.field-wrapper').children('.alert').remove();
        }
    });
    if (isValid) {
        if ($('.fields-filter:checked').val() == '0') {
            $(".text-inpt:odd").each(function(index, element) {
                $('.fields-value').val($('.fields-value').val() + $(this).val() + '\n');
            });
        } else if ($('.fields-filter:checked').val() == '1') {
            $('.text-inpt:even').each(function(index, element) {
                $('.fields-value').val($('.fields-value').val() + $(this).val() + '\n');
            });
        } else {
            $('.text-inpt').each(function(index, element) {
                $('.fields-value').val($('.fields-value').val() + $(this).val() + '\n');
            });
        }
    }
});

// Задание 4

$('.modal-btn').on('click', function() {
    $('.modal').removeClass('hidden');
    $('.modal').addClass('show');
});

$('.modal .btn').on('click', function() {
    $('.modal').removeClass('show');
    $('.modal').addClass('hidden');
    if ($(this).val() == "Опция 1") {
        $('.text').text('Вы выбрали опцию 1');
    } else {
        $('.text').text('Вы выбрали опцию 2');
    }
});

// Задание 5

$(".add-list-item-btn").on('click', function() {
    $('.list').append('<li>' + $('.list-item-input').val() + '</li>');
});

$('.list').on('click', 'li', function(){
    $(this).toggleClass('bg-red');
});

// Задание 6

$('.img-box').mouseenter(function() {
    $('.img-caption').show('slide', { direction: 'right', queue: false });
});
$('.img-box').mouseleave(function() {
    $('.img-caption').hide('slide', { direction: 'right', queue: false });
});

// Задание 7-8

$('.task-7 img').mouseenter(function() {
    if (typeof $(this).attr('alt') === typeof undefined ||
        $(this).attr('alt') === false ||
        $(this).attr('alt') == '' ||
        typeof $(this).attr('src') === typeof undefined ||
        $(this).attr('src') === false ||
        $(this).attr('src') == '') {
            $('.attr-box').text('Не все аттрибуты заполнены!!!');
            $('.attr-box').removeClass('alert-info');
            $('.attr-box').addClass('alert-danger');
            $(this).css('border', '2px solid red');
    } else {
        $('.attr-box').text('Alt: ' + $(this).attr('alt') + ' Src: ' + $(this).attr('src'));
    }
    $('.attr-box').removeClass('hidden');
    $('.attr-box').addClass('show');
});
$('.task-7 img').mouseleave(function() {
    $('.attr-box').text('');
    $('.attr-box').removeClass('show');
    $('.attr-box').addClass('hidden');
    $('.attr-box').removeClass('alert-danger');
    $('.attr-box').addClass('alert-info');
    $(this).css('border', 'none');
});
$('.task-7 a').mouseenter(function() {
    if (typeof $(this).attr('href') === typeof undefined ||
        $(this).attr('href') === false ||
        $(this).attr('href') == '' ||
        typeof $(this).attr('title') === typeof undefined ||
        $(this).attr('title') === false ||
        $(this).attr('title') == '' ||
        typeof $(this).attr('target') === typeof undefined ||
        $(this).attr('target') === false ||
        $(this).attr('target') == '') {
            $('.attr-box').text('Не все аттрибуты заполнены!!!');
            $('.attr-box').removeClass('alert-info');
            $('.attr-box').addClass('alert-danger');
    } else {
        $('.attr-box').text('Href: ' + $(this).attr('href') + ' Title: ' + $(this).attr('title') + ' Target: ' + $(this).attr('target'));
    }
    $('.attr-box').removeClass('hidden');
    $('.attr-box').addClass('show');
});
$('.task-7 a').mouseleave(function() {
    $('.attr-box').text('');
    $('.attr-box').removeClass('show');
    $('.attr-box').addClass('hidden');
    $('.attr-box').removeClass('alert-danger');
    $('.attr-box').addClass('alert-info');
});

// Задание 9

$('.count-headings-btn').on('click', function(){
    if ($('h1').length < 1) {
        alert('На странице нет заголовка - H1');
    }
    if ($('h2').length < 1) {
        alert('На странице нет заголовка - H2');
    }
    if ($('h3').length < 1) {
        alert('На странице нет заголовка - H3');
    }
    if ($('h4').length < 1) {
        alert('На странице нет заголовка - H4');
    }
    if ($('h5').length < 1) {
        alert('На странице нет заголовка - H5');
    }
    if ($('h6').length < 1) {
        alert('На странице нет заголовка - H6');
    }
    $('.headings-box').html('H1 = ' + $('h1').length + '<br>' +
                            'H2 = ' + $('h2').length + '<br>' +
                            'H3 = ' + $('h3').length + '<br>' +
                            'H4 = ' + $('h4').length + '<br>' +
                            'H5 = ' + $('h5').length + '<br>' +
                            'H6 = ' + $('h6').length);
    $('.headings-box').removeClass('hidden');
    $('.headings-box').addClass('show');
});

// Задание 10

$('.count-meta-btn').on('click', function(){
    if ($('title').length < 1) {
        alert('На странице нет title');
    }
    if ($('meta[name=description]').length < 1) {
        alert('На странице нет meta description');
    }
    if ($('meta[name=keywords]').length < 1) {
        alert('На странице нет meta keywords');
    }
    $('.meta-box').html('Title = ' + $('title').text().length + '<br>' +
                        'Description = ' + $('meta[name=description]').attr('content').length);
    $('.meta-box').removeClass('hidden');
    $('.meta-box').addClass('show');
});

/* ==================  Controller ================ */

