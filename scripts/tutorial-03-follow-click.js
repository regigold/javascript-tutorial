//JavaScript Document

var theThing = document.querySelector("#sun");
var container = document.querySelector("#click-surface");

container.addEventListener("click", function(event) {
    $('.sun-transform').removeClass();
	var xPosition = event.clientX - container.getBoundingClientRect().left - (theThing.clientWidth / 2);
	var yPosition = event.clientY - container.getBoundingClientRect().top - (theThing.clientHeight / 2);
	// in case of a wide border, the boarder-width needs to be considered in the formula above
	theThing.style.left = xPosition + "px";
	theThing.style.top = yPosition + "px";
	}
);
