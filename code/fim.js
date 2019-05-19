"use strict";

(function()
{
	window.addEventListener("load", main);
}());

function main()
{
	var mainWindow = window.parent;
	var buttonCreditos = document.getElementById("buttonCreditos");

	var music = document.getElementById("musica");
	var ativado = localStorage.getItem("musica");
	if (ativado=="on"){
		music.play();
		music.loop = true;
	}

	var creditosClick = function(ev){
		creditosClickHandler(ev, mainWindow);
	}

	buttonCreditos.addEventListener("click", creditosClick);
}


function creditosClickHandler(ev, mainWindow){
	ev.stopPropagation();
  mainWindow.postMessage("botaocreditos", "*");

}
