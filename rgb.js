"use strict";

function randomRGB() {
	var x = Math.floor(Math.random() * 256);
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);
	var RGBColor = "rgb(" + x + "," + y + "," + z + ")";
	console.log(RGBColor);
	return RGBColor;
}

document.querySelector(".btn-hero").addEventListener("click", function () {
	let newColor = randomRGB();
	document.querySelector("body").style.backgroundColor = newColor;
	document.querySelector(".color").textContent = newColor;
});
