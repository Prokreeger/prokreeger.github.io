console.log('connect - ok');

/* ==================  View ================ */



/* ==================  Model ================ */

// Задание 1

function sendAJAX(){
	//AJAX
	// $.post(
	// 	"php/a1.php",
	// 	{
	// 		"num1" : $('#num1').val(),
    //         "num2" : $('#num2').val()
	// 	},
	// 	function (data) {
	// 		console.log(data);
	// 		$('#out').html(data);
	// 	}
	// );
	//--------------------
	$.ajax({
		url: "php/a1.php",
		method : "POST",
		data : {
            "num1" : $('#num1').val(),
            "num2" : $('#num2').val()
        },
		success: function(data){
			$('#out').html(data);
			// data = JSON.parse(data);
			// console.log(data.bar);
		}
	});
	// $('#out').load('test.txt');
}

// Задание 2



// Задание 3



// Задание 4



// Задание 5



// Задание 6



/* ==================  Controller ================ */

$(document).ready(function(){
	$('.send-numbers-btn').on('click', sendAJAX);
});
