"use strict";

(function()
{
	window.addEventListener("load", main);
}());

function main()
{
	var sWidth = window.screen.availWidth;
	var wWidth = 1344;
	var wHeight = 756;
	var wLeft = (sWidth - wWidth)/2;	//center window on the screen
	var myWindow = window.open("../main.html", "mainWindow", "width = " + wWidth + ", height = " + wHeight + ", left = " + wLeft);
}
