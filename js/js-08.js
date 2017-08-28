console.log('connect - ok');

/* ==================  View ================ */

let inpt = $(".url-input");
let urlBtn = $(".url-btn");
let originUrl = $(".original-url");
let newUrl = $(".new-url");

/* ==================  Model ================ */

function randomStr() {
	num = 4;
    str = '';
    symbol = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (var i=0; i < num; i++) {
        str += symbol.charAt(Math.floor(Math.random()*symbol.length));
    }
	return str;
}

/* ==================  Controller ================ */

$(urlBtn).on("click", function(e) {
    e.preventDefault();
    var url = $(inpt).val();
    originUrl.html("<b>Введено:</b> " + url);
    url = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('.')[0];
    url = url.replace(/o|O/g,"0");
    url = url.replace(/l/g,"1");
    url = url.replace(/i/g,"3");
    url = url.replace(/s/g,"5");
    newUrl.html("<b>Получено:</b> " + url + randomStr());
});