"use strict";

(function()
{
	window.addEventListener("load", main);
}());

function main()
{
	var mainWindow = window.parent;
	var onSons = document.getElementById("onSons");
	var offSons = document.getElementById("offSons");
	var onMusica = document.getElementById("onMusica");
	var offMusica = document.getElementById("offMusica");
	var voltar = document.getElementById("buttonVoltar");
	var music = document.getElementById("musica");

	var ativado = localStorage.getItem("musica");
	if (ativado=="on"){
		music.play();
		music.loop = true;
	}

	var ativadoMusica = localStorage.getItem("musica");
	if (ativadoMusica=="on"){
		offMusica.style.filter = "grayscale(100%)";
	}
	else{
		onMusica.style.filter = "grayscale(100%)";
	}

	var butmusica=function(ev){
		musicaClickHandler(ev, music, mainWindow);
	}

	var ativadoSons = localStorage.getItem("sons");
	if (ativadoSons=="on"){
		offSons.style.filter = "grayscale(100%)";
	}
	else{
		onSons.style.filter = "grayscale(100%)";
	}

	var voltarClick = function(ev){
		voltarClickHandler(ev, mainWindow);
	}

	onSons.addEventListener("click", somClickHandler);
	offSons.addEventListener("click", somClickHandler);
	onMusica.addEventListener("click",butmusica);
	offMusica.addEventListener("click", butmusica);
	voltar.addEventListener("click", voltarClick);
}


function somClickHandler(ev){
	var botao = ev.currentTarget;
	if (botao==offSons){
		onSons.style.filter = "grayscale(100%)";
		offSons.style.filter = "none";
		localStorage.setItem("sons", "off");
	}
	else if(botao==onSons){
		onSons.style.filter = "none";
		offSons.style.filter = "grayscale(100%)";
		localStorage.setItem("sons", "on");
	}
	return;
}

function musicaClickHandler(ev, music, mainWindow){
	var botao = ev.currentTarget;
	if (botao==offMusica){
		onMusica.style.filter = "grayscale(100%)";
		offMusica.style.filter = "none";
		localStorage.setItem("musica", "off");
		mainWindow.postMessage("musicapara", "*");

	}
	else if (botao==onMusica){
		onMusica.style.filter = "none";
		offMusica.style.filter = "grayscale(100%)";
		localStorage.setItem("musica", "on");
		mainWindow.postMessage("musicaretoma", "*");

	}
	return;
}

function voltarClickHandler(ev, mainWindow)
{
	ev.stopPropagation();
	mainWindow.postMessage("botaovoltar", "*");


}
