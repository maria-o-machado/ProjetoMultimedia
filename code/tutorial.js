"use strict";

const pasta= "../resources/ranking/";
const opInativa = 0;

(function()
{
	window.addEventListener("load", main);
}());

function main()
{
	var mainWindow = window.parent;
	var buttonVoltar = document.getElementById("buttonVoltar");
	var buttonJogo = document.getElementById("buttonJogo");

	var music = document.getElementById("musica");
	var ativado = localStorage.getItem("musica");
	if (ativado=="on"){
		music.play();
		music.loop = true;
	}

	var voltarClick = function(ev){
		voltarClickHandler(ev, mainWindow);
	}

	var jogarClick = function(ev){
		jogarClickHandler(ev, mainWindow);
	}

	buttonJogo.addEventListener("click", jogarClick);

	buttonVoltar.addEventListener("click", voltarClick);  //intersecta evento na capture phase (i.e., na descida) e não na bubbling phase (i.e., subida, por omissão
}


function voltarClickHandler(ev, mainWindow){
	ev.stopPropagation();
  mainWindow.postMessage("botaovoltar", "*");

}

function jogarClickHandler(ev, mainWindow){
	ev.stopPropagation();
  mainWindow.postMessage("botaojogar", "*");

}
