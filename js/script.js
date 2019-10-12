var link = document.querySelector(".button-popup");
var popup = document.querySelector(".reservation-form");
var arrive = popup.querySelector(".input-arrive");
var departure = popup.querySelector(".input-departure");

link.addEventListener("click", function (evt) {
	popup.classList.toggle("reservation-form-hide");
});

popup.addEventListener("submit", function (evt) {
	if (!departure.value) {
		evt.preventDefault();
		departure.classList.add("input-error");
		departure.focus();
	}

	if (!arrive.value) {
		evt.preventDefault();
		arrive.classList.add("input-error");
		arrive.focus();
	}
});

arrive.addEventListener("keyup", function(evt){
	if(arrive.value) {
		arrive.classList.remove("input-error");
	}
});

departure.addEventListener("keyup", function(evt){
	if(departure.value) {
		departure.classList.remove("input-error");
	}
});
