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

	offSons.style.filter = "grayscale(100%)";
	offMusica.style.filter = "grayscale(100%)";

	onSons.addEventListener("click", somClickHandler);
	offSons.addEventListener("click", somClickHandler);
	onMusica.addEventListener("click", musicaClickHandler, true);
	offMusica.addEventListener("click", musicaClickHandler, true);
	voltar.addEventListener("click", voltarClickHandler, true);  
}


function somClickHandler(ev){
	var botao = ev.currentTarget;
	if (botao==offSons){
		onSons.style.filter = "grayscale(100%)";
		offSons.style.filter = "none";
	}
	else if(botao==onSons){
		onSons.style.filter = "none";
		offSons.style.filter = "grayscale(100%)";
	}

}

function musicaClickHandler(ev){
	var botao = ev.currentTarget;
	if (botao==offMusica){
		onMusica.style.filter = "grayscale(100%)";
		offMusica.style.filter = "none";
	}
	else if (botao==onMusica){
		onMusica.style.filter = "none";
		offMusica.style.filter = "grayscale(100%)";
	}

}

function voltarClickHandler(ev)
{
	ev.stopPropagation();
    location.href = "../html/MenuPrincipal.html";

}