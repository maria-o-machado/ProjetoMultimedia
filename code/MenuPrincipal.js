"use strict";

(function()
{
	window.addEventListener("load", main);
}());

function main()
{
	var mainWindow = window.parent;
	var jogar = document.getElementsByTagName("button")[0];
	var tutorial = document.getElementsByTagName("button")[1];
	var ranking = document.getElementsByTagName("button")[2];
	var definicoes = document.getElementsByTagName("button")[3];
	var sair = document.getElementsByTagName("button")[4];
	var creditos= document.getElementsByTagName("button")[5];
	var music = document.getElementById("musica");

	var ativado = localStorage.getItem("musica");
	if (ativado=="on"){
		music.play();
		music.loop = true;
	}

	var jogarClick = function(ev){
		jogarClickHandler(ev, mainWindow);
	}

	var creditosClick = function(ev){
		creditosClickHandler(ev, mainWindow);
	}

	var definicoesClick = function(ev) {
		definicoesClickHandler(ev, mainWindow);
	}

	var rankingClick = function(ev) {
		rankingClickHandler(ev, mainWindow);
	}

	var sairClick = function(ev) {
		sairClickHandler(ev, mainWindow);
	}

	jogar.addEventListener("click", jogarClick);
	creditos.addEventListener("click", creditosClick);
	definicoes.addEventListener("click", definicoesClick);
	ranking.addEventListener("click", rankingClick);
	sair.addEventListener("click", sairClick);
}

function jogarClickHandler(ev, mainWindow){
	ev.stopPropagation();
  mainWindow.postMessage("botaojogar", "*");
}

function definicoesClickHandler(ev, mainWindow){
	ev.stopPropagation();
  mainWindow.postMessage("botaodefenicoes", "*");
}

function creditosClickHandler(ev, mainWindow)
{
	ev.stopPropagation();
  mainWindow.postMessage("botaocreditos", "*");

}

function rankingClickHandler(ev, mainWindow)
{
	ev.stopPropagation();
  mainWindow.postMessage("botaoranking", "*");
}

function sairClickHandler(ev, mainWindow)
{
	alert("Agora não sais!");
}
