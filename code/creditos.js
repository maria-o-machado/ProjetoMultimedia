"use strict";

(function()
{
	window.addEventListener("load", main);
}());

function main()
{
	var mainWindow = window.parent;
	var voltar = document.getElementsByTagName("button")[0];
	var sair = document.getElementsByTagName("button")[1];
	var music = document.getElementById("musica");

	var ativado = localStorage.getItem("musica");
	if (ativado=="on"){
		music.play();
		music.loop = true;
	}

	var voltarClick = function(ev){
		voltarClickHandler(ev, mainWindow);
	}

	var sairClick = function(ev){
		sairClickHandler(ev, mainWindow);
	}

	voltar.addEventListener("click", voltarClick);  //intersecta evento na capture phase (i.e., na descida) e não na bubbling phase (i.e., subida, por omissão)
	sair.addEventListener("click", sairClick);
}


function voltarClickHandler(ev, mainWindow)
{
	ev.stopPropagation();
  mainWindow.postMessage("botaovoltar", "*");

}

function sairClickHandler(ev, mainWindow)
{
	alert("Agora não sais!");
}
