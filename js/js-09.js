console.log('connect - ok');

/* ==================  View ================ */



/* ==================  Model ================ */

// Задание 1

function sendNumbers(){
	$.ajax({
		url: "php/a1.php",
		method : "POST",
		data : {
            "num1" : $(".num1").val(),
            "num2" : $(".num2").val()
        },
		success: function(data){
			$("#out").text(data);
		}
	});
}

// Задание 2

function sendYear(){
	$.ajax({
		url: "php/a2.php",
		method : "POST",
		data : { "year" : $(".inpt-year").val() },
		success: function(data) {
			$("#out2").text(data);
		}
	});
}

// Задание 3

function idealWeight(){
	$.ajax({
		url: "php/a3.php",
		method : "POST",
		data : {
			"sex" : $("input[name='gender']:checked").val(),
			"height" : $(".height").val()
		},
		success: function(data) {
			$("#out3").text(data);
		}
	});
}

// Задание 4

function idealWeightRange(){
	$.ajax({
		url: "php/a3.php",
		method : "POST",
		data : {
			"sex" : $("input[name='gender-range']:checked").val(),
			"height" : $("input[type='range']").val()
		},
		success: function(data) {
			$("#out4").text(data);
		}
	});
}

// Задание 5

function sendForm(){
	$.ajax({
		url: "php/mail.php",
		method : "POST",
		data : {
			"fio" : $("#fio").val(),
			"email" : $("#email").val(),
			"phone" : $("#phone").val()
		},
		success: function(data) {
			$("#out5").text(data);
		}
	});
}

// Задание 6

function getProduct(){
	$.ajax({
		url: "php/goods.php",
		method : "GET",
		data : { "art" : $(".art").val() },
		success: function(data) {
			var obj = JSON.parse(data);
			var out = "";
			out = out + '<div class="product">';
			out = out + '<div class="product-title">' + obj.name + '</div>';
			out = out + '<img class="product-img" src="' + obj.img + '">';
			out = out + '<div class="product-weight">';
			out = out + '<span class="product-weight-title">Вес:</span> ' + obj.weight;
			out = out + '</div>';
			out = out + '<div class="product-cost">';
			out = out + '<span class="product-cost-title">Стоимость:</span> ' + obj.cost;
			out = out + '</div>';
			out = out + '</div>';
			$("#out6").html(out);
		}
	});
}

/* ==================  Controller ================ */

$(document).ready(function(){
	$(".send-numbers-btn").on("click", sendNumbers);
	$(".send-year-btn").on("click", sendYear);
	$(".ideal-weight-btn").on("click", idealWeight);
	$(".ideal-weight-range-btn").on("click", idealWeightRange);
	$(".send-form").on("click", sendForm);
	$(".get-product").on("click", getProduct);
});
