"use strict";

(function()
{
	window.addEventListener("load", main);
}());

function main()
{
	var onSons = document.getElementById("onSons");
	var offSons = document.getElementById("offSons");
	var onMusica = document.getElementById("onMusica");
	var offMusica = document.getElementById("offMusica");
	var voltar = document.getElementById("buttonVoltar");
	var music = document.getElementById("musica");

	var ativadoMusica = localStorage.getItem("musica");
	if (ativadoMusica=="on"){
		music.play();
		music.loop = true;
		offMusica.style.filter = "grayscale(100%)";
	}
	else{
		onMusica.style.filter = "grayscale(100%)";
	}

	var butmusica=function(ev){
		musicaClickHandler(ev, music);
	}

	var ativadoSons = localStorage.getItem("sons");
	if (ativadoSons=="on"){
		offSons.style.filter = "grayscale(100%)";
	}
	else{
		onSons.style.filter = "grayscale(100%)";
	}


	onSons.addEventListener("click", somClickHandler);
	offSons.addEventListener("click", somClickHandler);
	onMusica.addEventListener("click",butmusica);
	offMusica.addEventListener("click", butmusica);
	voltar.addEventListener("click", voltarClickHandler, true);
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

function musicaClickHandler(ev, music){
	var botao = ev.currentTarget;
	if (botao==offMusica){
		onMusica.style.filter = "grayscale(100%)";
		offMusica.style.filter = "none";
		localStorage.setItem("musica", "off");
		music.pause();
	}
	else if (botao==onMusica){
		onMusica.style.filter = "none";
		offMusica.style.filter = "grayscale(100%)";
		localStorage.setItem("musica", "on");
		music.play();
	}
	return;
}

function voltarClickHandler(ev)
{
	ev.stopPropagation();
    location.href = "../html/MenuPrincipal.html";

}
