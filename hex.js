"use strict";

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function generateRandomIndex() {
	return Math.floor(Math.random() * 16);
}

document.querySelector(".btn-hero").addEventListener("click", function () {
	let newColor = "#";
	for (let index = 0; index < 6; index++) {
		newColor += String(hex[generateRandomIndex()]);
	}
	document.querySelector(".color").textContent = newColor;
	document.querySelector("body").style.backgroundColor = newColor;
	newColor = "#";
});
